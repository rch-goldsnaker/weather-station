// Get the information about the User which credentials are used to perform this REST API call.
// https://thingsboard.cloud/swagger-ui/#/auth-controller/getUserUsingGET

import { NextResponse } from "next/server";
import axios from "@/config/axiosServer";

export async function GET() {
  try {

    //LOGIN THINGSBOARD
    const username = process.env.TB_USERNAME;
    const password = process.env.TB_PASSWORD;

    if (!username || !password) {
      throw new Error(
        "The environment variables for the username and password are not defined."
      );
    }
    const responseLogin = await axios.post(`/api/auth/login`, {
      username,
      password,
    });

    //THINGSBOARD USER API
    const responseUser = await axios.get(`/api/auth/user`, {
      headers: {
        accept: "application/json",
        "X-Authorization": `Bearer ${responseLogin.data.token}`,
      },
    });

    return NextResponse.json({ ...responseUser.data });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
