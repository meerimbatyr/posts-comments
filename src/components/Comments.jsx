import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Card, CardText, CardTitle } from "reactstrap";

function Comments() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setComments(res.data));
  }, []);
  return (
    <div className="container">
      <h3>Comments</h3>
      {/* <Link to={`/posts/${location.state}`} className="back">
        Back
      </Link> */}
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Card
              key={comment.id}
              body
              className="my-2"
              style={{
                background: "#c4c4c4",
                fontSize: "0.9rem",
              }}
            >
              <CardTitle tag="h5">
                Post {id} / Comment {comment.id}
              </CardTitle>
              <CardText>
                <strong>Comment by: </strong>
                {comment.email}
              </CardText>
              <CardText>
                <strong>Comment content: </strong>
                {comment.body}
              </CardText>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
