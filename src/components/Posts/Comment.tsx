import React from "react";

import { CommentsInterface } from "api/types";
import styled from "styled-components";

const User = styled.div`
  color: #8e8e8e;
  font-weight: bold;
`;

const Text = styled.div`
  color: #8e8e8e;
`;

const Comment = ({ ...comment }: CommentsInterface) => {
  return (
    <div>
      <User>{comment.name}</User>
      <Text>{comment.body}</Text>
    </div>
  );
};

export default React.memo(Comment);
