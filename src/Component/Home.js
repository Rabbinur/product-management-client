import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
            //remaining id display korbe without refreshing
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }

          console.log(data);
        });
    }
  };
  return (
    <div>
      <h2>Users:{displayUsers.length}</h2>
      <div>
        {displayUsers.map((user) => (
          <p key={user._id}>
            {user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>

            <button onClick={() => handleDelete(user)}> X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
