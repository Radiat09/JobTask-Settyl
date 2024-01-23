import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoomForm = ({ roomCode, socket, setUser }) => {
  const [roomID, setRoomID] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    const roomData = {
      name,
      roomID,
      userID: roomCode(),
      host: false,
      presenter: false,
    };
    setUser(roomData);
    console.log(roomData);
    navigate(`/board/${roomID}`);
    socket.emit("userJoined", roomData);
  };

  return (
    <form onSubmit={handleJoinRoom} className="w-full md:w-4/5 mt-5 space-y-3">
      <div>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
        />
      </div>
      <div>
        <input
          id=""
          type="text"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          placeholder="Enter room code"
          className="flex-1 p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
        />
      </div>
      <div>
        <button
          type="submit"
          className="text-xl w-full h-16 before:block before:absolute hover:before:bg-blue-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-[500px] before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-blue-700 bg-transparent border-2 overflow-hidden border-blue-700 duration-500"
        >
          Join Room
        </button>
      </div>
    </form>
  );
};

export default JoinRoomForm;
