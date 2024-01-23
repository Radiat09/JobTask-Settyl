import Forms from "../../Components/Forms/Forms";

const Home = () => {
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
      <Forms roomCode={roomCode} />
    </div>
  );
};

export default Home;
