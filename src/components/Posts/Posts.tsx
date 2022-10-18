import React from "react";

import { useSelector } from "react-redux";

import { ModulesType } from "api/types";

import Post from "./Post";

export const Posts: React.FC = () => {
  const posts = useSelector((state: ModulesType) => state.posts);
  return (
    <div style={{ margin: "20px", maxWidth:'400px' }}>
      <div style={{fontWeight:'bold'}}>
        Posts:
      </div>
      {posts?.map(({ title, body, comments }, index) => {
        return (
          <div key={index + "post"}>
            <Post body={body} comments={comments} title={title} />
          </div>
        );
      })}
    </div>
  );
};
