import React, { useState } from "react";

const AddUSers = () => {
  const [users, setUsers] = useState({});
  const handleAddUsers = (event) => {
    event.preventDefault();
    console.log(users);

    //fetching data store to server
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User added successfully"); //alert message
          event.target.reset();
        }
        console.log(data);
      });
  };

  //blur use korle sob ekbare neoa jai
  const handleInputBlur = (event) => {
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
      <h2>Please add a new users</h2>
      <form onSubmit={handleAddUsers}>
        <input
          onChange={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
        />{" "}
        <br />
        <input
          onChange={handleInputBlur}
          type="email"
          name="email"
          placeholder="email"
        />{" "}
        <br />
        <input
          onChange={handleInputBlur}
          type="picture"
          name="picture"
          placeholder="pictureURL"
        />
        <br /> <input type="price" name="price" placeholder="Price" />
        <br />
        <input
          onChange={handleInputBlur}
          type="quantity"
          name="quantity"
          placeholder="quantity"
        />
        <br />
        <input type="submit" value="Add users" />
      </form>
    </div>
  );
};

export default AddUSers;
