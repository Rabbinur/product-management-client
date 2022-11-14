import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  //for not refresh
  const [displayUsers, setDisplayUsers] = useState(users);
  const handleDelete = (user) => {
    const agree = window.confirm(
      `are you sure you want to delete : ${user.name}`
    );
    console.log(agree);
    if (agree) {
      console.log("delete this id ", user._id);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("user deleted successfully");
            const reaminingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(reaminingUsers);
          }

          console.log(data);
        });
    }
  };
  return (
    <div>
      <h2>Users:{users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.email}
            <button onClick={() => handleDelete(user)}> X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
