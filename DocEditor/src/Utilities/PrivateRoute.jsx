import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContexApi";
import { AiOutlineLoading } from "react-icons/ai";

const PrivateRoute = ({ children }) => {
  const { firebaseUser, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-5xl text-center flex justify-center">
        <AiOutlineLoading className="animate-spin"></AiOutlineLoading>
      </div>
    );
  }
  if (firebaseUser) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
