import React, { useState } from "react";
// navigate
import { useNavigate } from "react-router-dom";

export const Post = ({ post, deletePosts }) => {
  // new post object
  const postData = {
    id: post?._id,
    title: post?.title,
    description: post?.description,
    price: post?.price,
    goodType: post?.goodType,
    imageURL: post?.imageURL,
  };

  // navigate to the edit page
  const navigate = useNavigate();
  const toEdit = (data) => navigate("/edit", { state: { data } });

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3 mb-3">
      <div className="card p-3 m-3 product-promo-card h-100 w-100">
        <div className="card-body mx-auto">
          <img
            src={post?.imageURL}
            alt="post item"
            className="img-fluid card-img-top product-img"
          />
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center post-title-price">
            <p className="page-text-style-h1">{post?.title}</p>
            <p className="page-text-style-h1">${post?.price}</p>
          </div>
          <p className="text-center page-text-style-p">{post?.description}</p>
          <div className="d-flex justify-content-between align-items-center post-title-price">
            <button className="btn" onClick={() => deletePosts(post?._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </button>
            <button className="btn" onClick={() => toEdit(postData)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
