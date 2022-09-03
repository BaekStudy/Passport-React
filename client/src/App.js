import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.css";
//import { myContext } from "./Context/Context";

import Header from "./Components/Header";

import Homepage from "./Pages/Homepage";
import AdminPage from "./Pages/AdminPage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register.js";

import useStore from "./Store/useStore";

function App() {
  //const ctx = useContext(myContext);

  const reqUser = useStore((state) => state.reqUser);
  const getReqUser = useStore((state) => state.getReqUser);

  useEffect(() => {
    getReqUser();
    console.log(reqUser);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {reqUser ? (
          <>
            {reqUser.isAdmin ? (
              <Route path="/admin" element={<AdminPage />}></Route>
            ) : null}
            <Route path="/profile" element={<Profile />}></Route>
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
