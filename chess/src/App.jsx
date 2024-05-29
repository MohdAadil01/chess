import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:4000"; // Your server URL

const socket = socketIOClient(SOCKET_SERVER_URL);
const App = () => {
  return (
    <div>
      <h1>Socket.IO React App</h1>
    </div>
  );
};

export default App;
