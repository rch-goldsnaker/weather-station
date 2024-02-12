//Get latest time-series value (getLatestTimeseries)
// https://thingsboard.cloud/swagger-ui/#/telemetry-controller/getLatestTimeseriesUsingGET

import { NextRequest, NextResponse } from "next/server";
import axios from "@/config/axiosServer";

interface CustomRequest extends Request {
  query: {
    [key: string]: string | undefined;
  };
}

export async function GET(request: NextRequest ) {
  try {
    const entityType = request.nextUrl.searchParams.get("entityType")
    const entityId = request.nextUrl.searchParams.get("entityId")
    const keys = request.nextUrl.searchParams.get("keys")
    const useStrictDataTypes = request.nextUrl.searchParams.get("useStrictDataTypes")

    //LOGIN THINGSBOARD
    const username = process.env.TB_USERNAME;
    const password = process.env.TB_PASSWORD;

    if (!username || !password) {
      throw new Error(
        "The environment Rafa variables for the username and password are not defined."
      );
    }
    const responseLogin = await axios.post(`/api/auth/login`, {
      username,
      password,
    });

    //THINGSBOARD USER API

    const url = `/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries?keys=${keys}&useStrictDataTypes=${useStrictDataTypes}`;

    const responseTelemetry = await axios.get(url, {
      headers: {
        accept: "application/json",
        "X-Authorization": `Bearer ${responseLogin.data.token}`,
      },
    });

    return NextResponse.json({ ...responseTelemetry.data });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
