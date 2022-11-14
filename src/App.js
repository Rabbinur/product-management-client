import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import AddUSers from "./Component/AddUSers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/users/add",
      element: <AddUSers></AddUSers>,
    },
  ]);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  // const handleAddUsers = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const picture = form.picture.value;
  //   const quantity = form.quantity.value;
  //   const price = form.price.value;
  //   const user = { name, email, price, quantity, picture };
  //   console.log(user);
  //   //data fetching from server and set it server
  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const newUsers = [...users, data]; //set data from input to showing client side
  //       setUsers(newUsers);
  //       console.log(data);
  //     })
  //     .catch((err) => console.error(err));
  //   form.reset();
  // };
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      {/* <form onSubmit={handleAddUsers}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="picture" name="picture" placeholder="pictureURL" />
        <br /> <input type="price" name="price" placeholder="Price" />
        <br />
        <input type="quantity" name="quantity" placeholder="quantity" />
        <br />
        <input type="submit" value="Add users" />
      </form>

      <h1>users : {users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>{user.email}</p>
        ))}
      </div> */}
    </div>
  );
}

export default App;
