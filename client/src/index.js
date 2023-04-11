import { JSONRPCClient } from "json-rpc-2.0";

const client = new JSONRPCClient((jsonRPCRequest) =>
  fetch("/api/json-rpc", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(jsonRPCRequest),
  }).then((response) => {
    if (response.status === 200) {
      return response.json().then((jsonRPCResponse) => client.receive(jsonRPCResponse));
    } else if (jsonRPCRequest.id !== undefined) {
      return Promise.reject(new Error(response.statusText));
    }
  })
);

client.request("echo", { text: "Hello, World!" }).then((result) => console.log(result));
