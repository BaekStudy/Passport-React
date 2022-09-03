import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const login = () => {
    Axios.post(
      "http://localhost:4000/auth/login",
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
        //네비케이션으로 바꾸자.
      } else {
        console.log(res);
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={login}>Login</button>
    </div>
  );
}
