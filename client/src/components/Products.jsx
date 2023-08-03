import React from "react";
import { Product } from "../components/Product";

export const Products = ({ products, showUser }) => {
  return (
    <div className="container">
      <div className="row">
        {products?.map((product, key) => {
          return <Product product={product} showUser={showUser} key={key} />;
        })}
      </div>
    </div>
  );
};
