const WebSocket = require("ws");
const { JSONRPCServer, JSONRPCServerAndClient, JSONRPCClient, createJSONRPCErrorResponse } = require("json-rpc-2.0");

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  const serverAndClient = new JSONRPCServerAndClient(
    new JSONRPCServer(),
    new JSONRPCClient((request) => {
      try {
        ws.send(JSON.stringify(request));
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    })
  );

  serverAndClient.addMethod("serverFn", ({ text }) => {
    console.log(text);
    return "Received call from client";
  });

  ws.on("message", (message) => {
    const jsonRPCRequest = JSON.parse(message);
    serverAndClient.receiveAndSend(jsonRPCRequest).then((jsonRPCResponse) => {
      if (jsonRPCResponse) {
        ws.send(JSON.stringify(jsonRPCResponse));
      } else {
        ws.send(JSON.stringify(createJSONRPCErrorResponse(jsonRPCRequest.id, 2023, "custom err msg")));
      }
    });
  });

  serverAndClient.request("clientFn", { text: "call clientFn" }).then((res) => {
    console.log(res);
  });
});
