import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const register = () => {
    Axios.post(
      "http://localhost:4000/auth/register",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    ).then((res) => {
      if (res.data === "success") {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Login</button>
    </div>
  );
}
