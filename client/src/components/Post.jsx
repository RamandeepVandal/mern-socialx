import React from "react";

export const Post = ({ post }) => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-stretch">
      <div className="card p-3 m-3 product-promo-card">
        <div className="card-body mx-auto">
          <img
            src={post?.imageURL}
            alt="post item"
            className="img-fluid card-img-top product-img"
          />
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center post-title-price">
            <p>{post?.title}</p>
            <p>${post?.price}</p>
          </div>
          <p className="text-center">{post?.description}</p>
          <div className="d-flex justify-content-between align-items-center post-title-price">
            <button className="btn btn-danger btn-lg post-btn">Del</button>
            <button className="btn btn-warning btn-lg post-btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
