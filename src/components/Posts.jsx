import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button, Card, CardText, CardTitle } from "reactstrap";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  // console.log(location.state);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container mx-auto">
      <h3>News Feed</h3>
      <Link to="/" className="back">
        Back
      </Link>
      <div className="posts">
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              body
              className="my-2"
              style={{
                width: "18rem",
                background: "#c4c4c4",
                fontSize: "0.9rem",
              }}
            >
              <CardTitle tag="h5">
                User {id} / Post {post.id}
              </CardTitle>
              <CardText>
                <strong>Post title: </strong>
                {post.title}
              </CardText>
              <CardText>
                <strong>Post content: </strong>
                {post.body}
              </CardText>
              <Link to={`/posts/comments/${post.id}`} state={post.id}>
                <Button color="primary">Comments</Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
