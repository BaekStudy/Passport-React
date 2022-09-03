import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../Context/Context";
import Axios from "axios";

export default function Header() {
  const ctx = useContext(myContext);

  const logout = () => {
    Axios.get("http://localhost:4000/auth/logout", {
      withCredentials: true,
    }).then((res) => {
      if (res.data === "success") {
        window.location.href = "/";
        // nevigate로 변경하자
      }
    });
  };
  return (
    <div className="NavContainer">
      {ctx ? (
        <>
          <Link onClick={logout} to="/logout">
            Logout
          </Link>
          {ctx.isAdmin ? <Link to="/admin">Admin</Link> : null}
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      <Link to="/">Home</Link>
    </div>
  );
}
