import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./main.css";
import { myContext } from "./Context/Context";

import Header from "./Components/Header";

import Homepage from "./Pages/Homepage";
import AdminPage from "./Pages/AdminPage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register.js";

function App() {
  const ctx = useContext(myContext);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact component={Homepage}></Route>
        {ctx ? (
          <>
            {ctx.isAdmin ? (
              <Route path="/admin" component={AdminPage}></Route>
            ) : null}
            <Route path="/profile" component={Profile}></Route>
          </>
        ) : (
          <>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
