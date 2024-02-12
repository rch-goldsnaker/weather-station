"use server";

import axios from "@/config/axiosServer";
import { AxiosResponse } from "axios";

type ResponseData = {
  token: string;
  refreshToken: string;
};

type LoginResult = {
  token?: string;
  refreshToken?: string;
  error?: Error;
};

export async function loginTb(): Promise<LoginResult> {
  try {
    const username = process.env.TB_USERNAME;
    const password = process.env.TB_PASSWORD;

    if (!username || !password) {
      throw new Error(
        "The environment variables for the username and password are not defined."
      );
    }

    const responseLogin: AxiosResponse<ResponseData> = await axios.post(
      `/api/auth/login`,
      {
        username,
        password,
      }
    );

    const { token, refreshToken } = responseLogin.data;
    return { token, refreshToken };
  } catch (error) {
    return { error: error as Error };
  }
}
