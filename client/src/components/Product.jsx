import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = ({ product, showUser }) => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <div
        className="card p-3 m-3 product-promo-card"
        onClick={() => {
          showUser(product?._id, product);
        }}
      >
        <div className="d-flex justify-content-between">
          <p className="fs-3">{product?.title}</p>
          <p className="fs-4">${product?.price}</p>
        </div>
      </div>
    </div>
  );
};
