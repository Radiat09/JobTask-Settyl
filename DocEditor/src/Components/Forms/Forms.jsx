import CreateRoomFrom from "./CreateRoomForm/CreateRoomFrom";
import JoinRoomForm from "./JoinRoomForm/JoinRoomForm";

const Forms = ({ roomCode, socket, setUser }) => {
  return (
    <div className="max-w-7xl mx-auto my-40 flex flex-col lg:flex-row gap-5 text-center px-2">
      <div className="flex-1 flex flex-col justify-center items-center border-2 border-blue-800 p-5 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Create Room
        </h1>
        <CreateRoomFrom roomCode={roomCode} socket={socket} setUser={setUser} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center border-2 border-blue-800 p-5 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Join Room
        </h1>
        <JoinRoomForm roomCode={roomCode} socket={socket} setUser={setUser} />
      </div>
    </div>
  );
};

export default Forms;
