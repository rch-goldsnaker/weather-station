"use client";
import { loginTb } from "@/app/actions";
import { useEffect, useState } from "react";
import { readSetting } from "./modals/actions";

const Telemetry4 = () => {
  const [receivedMessages, setReceivedMessages] = useState("");

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const login = await loginTb();
        const setting = await readSetting();

        const token = login.token;
        let { entityType, entityId } = setting.data[0];
        const webSocket = new WebSocket(
          process.env.NEXT_PUBLIC_TB_WS_URL || ""
        );

        webSocket.onopen = () => {
          const object = {
            authCmd: {
              cmdId: 0,
              token: token,
            },
            cmds: [
              {
                entityType: entityType,
                entityId: entityId,
                scope: "LATEST_TELEMETRY",
                cmdId: 10,
                type: "TIMESERIES",
              },
            ],
          };
          const data = JSON.stringify(object);
          webSocket.send(data);
        };

        webSocket.onmessage = (event) => {
          const receivedData = JSON.parse(event.data);
          const { subscriptionId, data } = receivedData;
          const { temperature } = data;
          console.log("Temperature data:", temperature[0][1]);
          setReceivedMessages(temperature[0][1])
        };

        webSocket.onclose = () => {
          console.log("Connection closed!");
        };

        // Clean up function
        return () => {
          webSocket.close();
        };
      } catch (error) {
        // Manejo de errores si la promesa se rechaza
      }
    };
    fetchLoginData();
  }, []);

  return (
    <div>
      {receivedMessages}
    </div>
  ); // This component doesn't render anything
};

export default Telemetry4;
