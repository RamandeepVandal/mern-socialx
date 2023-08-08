import React from "react";
import { Post } from "./Post";

export const Posts = ({ posts, deletePosts }) => {
  return (
    <div className="container">
      <div className="row">
        {posts?.map((post, key) => {
          return <Post post={post} key={key} deletePosts={deletePosts} />;
        })}
      </div>
    </div>
  );
};
