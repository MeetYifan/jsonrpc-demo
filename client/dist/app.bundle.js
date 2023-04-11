(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const webSocket = new WebSocket("ws://localhost");

const serverAndClient = new JSONRPCServerAndClient(
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

webSocket.onmessage = (event) => {
  serverAndClient.receiveAndSend(JSON.parse(event.data.toString()));
};

webSocket.onclose = (event) => {
  serverAndClient.rejectAllPendingRequests(`Connection is closed (${event.reason}).`);
};

serverAndClient.addMethod("echo", ({ text }) => text);

serverAndClient.request("add", { x: 1, y: 2 }).then((result) => console.log(`1 + 2 = ${result}`));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxhQUFhO0FBQ2pGO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBLGlDQUFpQyxZQUFZLDBDQUEwQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdFwiKTtcclxuXHJcbmNvbnN0IHNlcnZlckFuZENsaWVudCA9IG5ldyBKU09OUlBDU2VydmVyQW5kQ2xpZW50KFxyXG4gIG5ldyBKU09OUlBDU2VydmVyKCksXHJcbiAgbmV3IEpTT05SUENDbGllbnQoKHJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHdlYlNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpKTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5cclxud2ViU29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gIHNlcnZlckFuZENsaWVudC5yZWNlaXZlQW5kU2VuZChKU09OLnBhcnNlKGV2ZW50LmRhdGEudG9TdHJpbmcoKSkpO1xyXG59O1xyXG5cclxud2ViU29ja2V0Lm9uY2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICBzZXJ2ZXJBbmRDbGllbnQucmVqZWN0QWxsUGVuZGluZ1JlcXVlc3RzKGBDb25uZWN0aW9uIGlzIGNsb3NlZCAoJHtldmVudC5yZWFzb259KS5gKTtcclxufTtcclxuXHJcbnNlcnZlckFuZENsaWVudC5hZGRNZXRob2QoXCJlY2hvXCIsICh7IHRleHQgfSkgPT4gdGV4dCk7XHJcblxyXG5zZXJ2ZXJBbmRDbGllbnQucmVxdWVzdChcImFkZFwiLCB7IHg6IDEsIHk6IDIgfSkudGhlbigocmVzdWx0KSA9PiBjb25zb2xlLmxvZyhgMSArIDIgPSAke3Jlc3VsdH1gKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==