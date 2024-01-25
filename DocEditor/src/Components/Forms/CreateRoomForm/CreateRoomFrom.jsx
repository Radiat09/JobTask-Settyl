import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/ContexApi";

const CreateRoomFrom = ({ roomCode, socket }) => {
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [roomID, setRoomID] = useState(roomCode());
  const [name, setName] = useState("");
  const handleCreateRoom = (e) => {
    e.preventDefault();
    const roomData = {
      name,
      roomID,
      userID: roomCode(),
      host: true,
      presenter: true,
    };
    console.log(roomData);
    setUser(roomData);
    navigate(`/board/${roomID}`);
    socket.emit("userJoined", roomData);
  };
  return (
    <form
      onSubmit={handleCreateRoom}
      className="w-full md:w-4/5 mt-5 space-y-3"
    >
      <div className="">
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <input
          id=""
          disabled
          type="text"
          value={roomID}
          placeholder="Generate room code"
          className="flex-1 p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
        />
        <div className="flex gap-2 justify-start items-center">
          <button
            onClick={() => setRoomID(roomCode())}
            type="button"
            className="text-xl px-4 py-3 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
          >
            <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Generate
          </button>
          <button
            type="button"
            className="text-xl px-4 py-3 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
          >
            <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Copy
          </button>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="text-xl w-full h-16 before:block before:absolute hover:before:bg-blue-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-[500px] before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-blue-700 bg-transparent border-2 overflow-hidden border-blue-700 duration-500"
        >
          Generate Room
        </button>
      </div>
    </form>
  );
};

export default CreateRoomFrom;
