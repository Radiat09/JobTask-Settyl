import { useContext, useEffect } from "react";
import Forms from "../../Components/Forms/Forms";
import { AuthContext } from "../../ContextApi/ContexApi";

const Home = () => {
  const { socket, setUsers } = useContext(AuthContext);
  useEffect(() => {
    socket.on("userHasJoined", (data) => {
      if (data.success) {
        console.log("user Joined");
        setUsers(data.users);
      } else {
        console.log("Join error");
      }
    });
  }, [socket]);

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
      <Forms roomCode={roomCode} socket={socket} />
    </div>
  );
};

export default Home;
