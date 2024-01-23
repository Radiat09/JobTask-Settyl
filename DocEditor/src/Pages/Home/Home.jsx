import { useEffect, useState } from "react";
import Forms from "../../Components/Forms/Forms";
import io from "socket.io-client";

const server = "http://localhost:9000/";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};
const socket = io(server, connectionOptions);
const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    socket.on("userHasJoined", (data) => {
      if (data.success) {
        console.log("user Joined");
      } else {
        console.log("Join error");
      }
    });
  }, []);

  const roomCode = () => {
    let s4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  };
  console.log(roomCode());
  return (
    <div>
      <Forms roomCode={roomCode} socket={socket} setUser={setUser} />
    </div>
  );
};

export default Home;
