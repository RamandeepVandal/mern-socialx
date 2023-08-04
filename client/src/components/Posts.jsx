import React from "react";
import { Post } from "./Post";

export const Posts = ({ posts }) => {
  return (
    <div className="container">
      <div className="row">
        {posts?.map((post, key) => {
          return <Post post={post} key={key} />;
        })}
      </div>
    </div>
  );
};
