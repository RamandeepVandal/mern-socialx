import React, { useState, useEffect } from "react";
// axios
import Axios from 'axios';
// component
import { Header } from "../components/Header";
import { Products } from "../components/Products";

export const Home = () => {
  // products data
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    getProducts();
  }, []);

  // get the products
  const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    setProducts(data);
    console.log(data);
  };

  // show user
  const showUser = async(id) => {

    console.log(id);

   await Axios.post('http://localhost:5000/product/user/', {
    id
   }).then((res) => {
    console.log(res.data.user);
   })
  }

  return (
    <div>
      <Header />

      <section className="d-flex flex-column justify-content-center align-items-center p-5 m-5">
        <h1 className="mb-3">Products</h1>
        
        <Products products={products} showUser={showUser} />
      </section>
    </div>
  );
};
