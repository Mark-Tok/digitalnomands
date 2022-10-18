import React, { useState } from "react";

import styled from "styled-components";
import { PostsInterface } from "api/types";

import Comment from "./Comment";

const Comments = styled.button`
  margin: 10px;
  color: #8b8b8b;
`;

const Post = ({
  title,
  body,
  comments,
}: Pick<PostsInterface, "title" | "body" | "comments">) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Comments onClick={() => setVisible(!visible)}>
          Comments{!!visible ? " -" : " +"}
        </Comments>
      </div>
      {!!visible &&
        comments &&
        comments.map((item, index) => (
          <Comment key={index + "comment"} {...item} />
        ))}
    </div>
  );
};

export default React.memo(Post);
