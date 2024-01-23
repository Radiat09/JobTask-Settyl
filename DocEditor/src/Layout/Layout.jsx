import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="text-center flex gap-4 justify-center">
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
        <NavLink to="/board" className="text-xl">
          Whiteboard
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
