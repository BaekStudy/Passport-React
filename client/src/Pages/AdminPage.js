import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { myContext } from "../Context/Context";

export default function AdminPage() {
  const ctx = useContext(myContext);

  const [data, setData] = useState();
  const [selectedUser, setSelectedUser] = useState();
  useEffect(() => {
    Axios.get("http://localhost:4000/auth/getallusers", {
      withCredentials: true,
    }).then((res) => {
      setData(
        res.data.filter((item) => {
          return item.username !== ctx.username;
        })
      );
    });
  }, [ctx]);
  if (!data) {
    return null;
  }

  const deleteUser = () => {
    let userid;
    data.forEach((item) => {
      if (item.username === selectedUser) {
        userid = item.id;
      }
    });

    Axios.post(
      "http://localhost:4000/auth/deleteuser",
      {
        id: userid,
      },
      {
        withCredentials: true,
      }
    );
  };

  return (
    <div>
      <h1>Admin Page, Only Admin's Can See This!</h1>
      <select
        onChange={(e) => setSelectedUser(e.target.value)}
        name="deleteuser"
        id="deleteuser"
      >
        <option id="Select a user">Select A User</option>
        {data.map((item) => {
          return (
            <option key={item.username} id={item.username}>
              {item.username}
            </option>
          );
        })}
      </select>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}
