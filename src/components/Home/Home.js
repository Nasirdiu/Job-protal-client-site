import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://aqueous-crag-86187.herokuapp.com/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://aqueous-crag-86187.herokuapp.com/user/${id}`;
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
        <div key={user._id} className='m-3 d-flex justify-content-center'>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.description}</Card.Text>
              <Button onClick={() => handleDelete(user._id)} variant="primary">
               Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Home;
