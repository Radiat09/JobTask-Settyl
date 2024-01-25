import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/ContexApi";
import toast from "react-hot-toast";

const Layout = () => {
  const navigate = useNavigate();
  const { firebaseUser, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      navigate("/login");
      toast.success("Logged Out!");
    });
  };
  return (
    <div>
      <div className="text-center flex flex-col gap-4 justify-center items-center mt-10">
        <h1 className="text-2xl font-extrabold text-blue-700">
          {firebaseUser?.displayName}
        </h1>
        <div className="w-20 h-20 rounded-full">
          <img
            className="w-20 h-20 rounded-full"
            src={
              firebaseUser
                ? firebaseUser.photoURL
                : "https://i.ibb.co/MckJ5Px/0288511473a4032cef007e8a911838af.jpg"
            }
            alt={`image of ${firebaseUser?.displayName}`}
          />
        </div>
        <button
          className="px-4 py-2 bg-gray-500 text-white font-bold hover:text-gray-500 hover:bg-white hover:border transition-all duration-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
