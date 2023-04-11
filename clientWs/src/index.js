const webSocket = new WebSocket("ws://localhost:3000");
import { JSONRPCServer, JSONRPCClient, JSONRPCServerAndClient } from "json-rpc-2.0";

let serverAndClient;
webSocket.onopen = () => {
  serverAndClient = new JSONRPCServerAndClient(
    new JSONRPCServer(),
    new JSONRPCClient((request) => {
      try {
        webSocket.send(JSON.stringify(request));
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    })
  );

  serverAndClient.request("serverFn", { text: "call serverFn" }).then((res) => console.log(res));
  serverAndClient.request("errFn", { text: "err" }).then((res) => console.log(`err: ${res}`));

  serverAndClient.addMethod("clientFn", (res) => {
    console.log(res);
    return "Received call from server";
  });
};

webSocket.onmessage = (event) => {
  serverAndClient.receiveAndSend(JSON.parse(event.data.toString()));
};

webSocket.onclose = (event) => {
  serverAndClient.rejectAllPendingRequests(`Connection is closed (${event.reason}).`);
};
