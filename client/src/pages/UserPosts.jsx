import React, { useEffect, useState } from "react";
// navigation
import { useNavigate } from "react-router-dom";
// axios
import Axios from "axios";
// get user id hook
import { getUserID } from "../hooks/getUserID";
// component
import { Header } from "../components/Header";
import { Posts } from "../components/Posts";

export const UserPosts = () => {
  // user id
  const userID = getUserID();

  // current user post
  const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    getPosts(userID);
  }, []);

  // get the posts of the current user
  const getPosts = async (id) => {
    await Axios.post("http://localhost:5000/user/products", {
      id,
    }).then((res) => {
      setPosts(res.data);
    });
  };

  // navigation
  const navigate = useNavigate();
  const addPost = () => navigate('/add');

  return (
    <div className='page-text-style'>
      <Header />

      <section className="d-flex flex-column justify-content-center align-items-center p-5 m-5">
        <h1 className="mb-3 page-text-style-h1">Posts</h1>

        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <div className="card mt-3 p-5">
            <p className="fs-2 page-text-style-h1">No posts to show. </p>
            <button onClick={addPost} className="btn btn-main fs-3">Create Posts</button>
          </div>
        )}
      </section>
    </div>
  );
};
