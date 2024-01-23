const JoinRoomForm = () => {
  return (
    <form className="w-full md:w-4/5 mt-5 space-y-3">
      <div>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
        />
      </div>
      <div>
        <input
          id=""
          type="text"
          placeholder="Enter room code"
          className="flex-1 p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
        />
      </div>
      <div>
        <button className="text-xl w-full h-16 before:block before:absolute hover:before:bg-blue-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-[500px] before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-blue-700 bg-transparent border-2 overflow-hidden border-blue-700 duration-500">
          Join Room
        </button>
      </div>
    </form>
  );
};

export default JoinRoomForm;
