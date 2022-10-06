import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div className="container">
      <h3 className="user">Users</h3>
      <div className="users">
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              className="my-5 mx-auto"
              color="secondary"
              outline
            >
              <CardHeader className="text-center fs-5">
                <strong>User {user.id}</strong>
              </CardHeader>
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  {user.name}
                </CardTitle>
                <ListGroup flush>
                  <ListGroupItem>
                    <strong>Email:</strong>
                    {user.email}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Phone: </strong>
                    {user.phone}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Website:</strong>
                    {user.website}
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
              <Link
                to={`/posts/${user.id}`}
                state={user.id}
                id={user.id}
                style={{ margin: "auto" }}
              >
                <Button color="primary" className="mx-auto my-2">
                  Read posts
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default User;
