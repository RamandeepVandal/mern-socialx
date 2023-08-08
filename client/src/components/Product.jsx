import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = ({ product, showUser }) => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3 mb-3">
      <div
        className="card p-5 product-promo-card h-100 w-100"
        onClick={() => {
          showUser(product?._id, product);
        }}
      >
        <div className="card-body d-flex justify-content-center align-items-center mb-3">
          <img
            src={product?.imageURL}
            alt="product"
            className="card-img-top img-fluid w-50"
          />
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-evenly align-items-center">
            <p className="fs-3 page-text-style-h1">{product?.title}</p>
            <p className="fs-4 page-text-style-h1">${product?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
