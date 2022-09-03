import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const myContext = createContext({});
export default function Context(props) {
  const [user, setUser] = useState();
  useEffect(() => {
    Axios.get("http://localhost:4000/auth/user", {
      withCredentials: true,
    }).then((res) => {
      setUser(res.data);
    });
  }, []);

  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
