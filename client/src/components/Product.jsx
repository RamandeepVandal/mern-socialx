import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = ({ product, showUser }) => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <div
        className="card m-3 p-3 product-promo-card"
        onClick={() => {
          showUser(product?._id, product);
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <p className="fs-3 page-text-style-h1">{product?.title}</p>
          <p className="fs-4 page-text-style-h1">${product?.price}</p>
        </div>  
      </div>
    </div>
  );
};
