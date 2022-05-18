import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      console.log("deleting user id", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };

  return (
    <div className="text-center">
      <h1>All user data:{users.length}</h1>
      {users.map((user) => (
        <li key={user._id}>
          {user.name}:{user.description}{" "}
          <button
            className="btn btn-info m-2"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Home;
