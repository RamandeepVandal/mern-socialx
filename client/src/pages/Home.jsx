import React, { useState, useEffect } from "react";
// react navigate
import { useNavigate } from "react-router-dom";
// axios
import Axios from "axios";
// component
import { Header } from "../components/Header";
import { Products } from "../components/Products";

export const Home = () => {
  // products data
  const [unFilteredProducts, setUnFilteredProducts] = useState([{}]);
  const [products, setProducts] = useState([{}]);
  
  // productFilter
  const [filterSelection, setFilterSelection] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  // get the products
  const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    setUnFilteredProducts(data);
    setProducts(data);
  };

  // navigation
  const navigate = useNavigate();

  // navigate to details page for selected product
  const toDetails = (data) => navigate("/details", { state: { data } });

  // show user
  const showUser = async (id, product) => {
    await Axios.post("http://localhost:5000/product/user/", {
      id,
    }).then((res) => {
      const userInfo = res.data.user;
      toDetails({ product, userInfo });
    });
  };

  // filter
  const filterProducts = () => {
    return setProducts(
      unFilteredProducts.filter((product) => product?.goodType === filterSelection)
    );
  };

  return (
    <div className="page-text-style">
      <Header />

      <section className="d-flex flex-column justify-content-center align-items-center p-5">
        <div className="container">
          <div className="d-flex justify-content-evenly align-items-center mb-3">
            <h1 className="mb-3 page-text-style-h1">Products</h1>
            <div className="form-group d-flex align-items-center">
              <select
                class="form-select form-select-lg me-2"
                onChange={(e) => {
                  setFilterSelection(e.target.value);
                }}
              >
                <option value="Computer">
                  Computers, Tablets & Accessories
                </option>
                <option value="Phone">Cell Phones and Accessories</option>
                <option value="Office">Office Supplies & Ink</option>
                <option value="TV">TV & Home Theatre</option>
                <option value="Headphone">Headphones, Speakers & Audio</option>
                <option value="Videogame">Video Games & VR</option>
                <option value="Cars">Cars, Trucks & Vans</option>
                <option value="Clothing">Clothing</option>
                <option value="Camera">Cameras, Camcorders & Drones</option>
              </select>
              <button className="btn btn-main" onClick={filterProducts}>
                Filter
              </button>
            </div>
          </div>
        </div>

        <Products products={products} showUser={showUser} />
      </section>
    </div>
  );
};
