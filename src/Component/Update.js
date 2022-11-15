import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUsers = useLoaderData();
  const [users, setUsers] = useState({});
  const handleUpdateUsers = (event) => {
    event.preventDefault();
    console.log(users);
  };

  //blur use korle sob ekbare neoa jai
  const handleInputChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...users }; //set users value into newuser
    newUser[field] = value; //newusers vitore feild set kore then value set
    setUsers(newUser);

    // console.log(value, field);

    // console.log(event.target);
  };
  return (
    <div>
      <h2>Please update information of {storedUsers.name}</h2>
      <form onSubmit={handleUpdateUsers}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          defaultValue={storedUsers.name}
          placeholder="name"
        />{" "}
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          defaultValue={storedUsers.email}
          placeholder="email"
        />{" "}
        <br />
        <input
          onChange={handleInputChange}
          type="picture"
          name="picture"
          defaultValue={storedUsers.picture}
          placeholder="pictureURL"
        />
        <br />{" "}
        <input
          type="price"
          name="price"
          defaultValue={storedUsers.price}
          placeholder="Price"
        />
        <br />
        <input
          onChange={handleInputChange}
          type="quantity"
          name="quantity"
          defaultValue={storedUsers.quantity}
          placeholder="quantity"
        />
        <br />
        <input type="submit" value="update users" />
      </form>
    </div>
  );
};

export default Update;
