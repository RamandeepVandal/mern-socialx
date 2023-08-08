import React, { useState } from "react";
// axios
import Axios from "axios";
// react router navigation
import { useNavigate } from "react-router-dom";
// get user id hook
import { getUserID } from "../hooks/getUserID";
// component
import { Header } from "../components/Header";

export const AddProduct = () => {
  // user id
  const userID = getUserID();

  // user data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [goodType, setGoodType] = useState("");
  const [postUser, setPostUser] = useState(userID);

  // navigate
  const navigate = useNavigate();

  // on form submit
  const onSubmit = (e) => {
    e.preventDefault();

    addProduct(title, description, price, imageURL, goodType, postUser);
  };

  // add product
  const addProduct = async (
    title,
    description,
    price,
    imageURL,
    goodType,
    postUser
  ) => {
    await Axios.post("http://localhost:5000/products", {
      title,
      description,
      price,
      imageURL,
      goodType,
      postUser,
    }).then((res) => {
      if (res.data.status === "ok") {
        navigate("/home");
      } else {
        alert("Please fill out all fields.");
      }
    });
  };

  return (
    <div>
      <Header />

      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="page-text-style-h1">Add Product</h1>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <form onSubmit={onSubmit} className="card mt-5 mb-5 p-5">
                <div className="form-group">
                  <label
                    htmlFor="title"
                    className="form-label page-text-style-p"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label
                    htmlFor="description"
                    className="form-label page-text-style-p"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label
                    htmlFor="price"
                    className="form-label page-text-style-p"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label
                    htmlFor="image"
                    className="form-label page-text-style-p"
                  >
                    Image Url
                  </label>
                  <input
                    id="image"
                    type="text"
                    className="form-control"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label
                    htmlFor="goods"
                    className="form-label page-text-style-p"
                  >
                    Type of Good
                  </label>
                  <select
                    class="form-select"
                    onChange={(e) => setGoodType(e.target.value)}
                  >
                    <option value="Computer">
                      Computers, Tablets & Accessories
                    </option>
                    <option value="Phone">Cell Phones and Accessories</option>
                    <option value="Office">Office Supplies & Ink</option>
                    <option value="TV">TV & Home Theatre</option>
                    <option value="Headphone">
                      Headphones, Speakers & Audio
                    </option>
                    <option value="Videogame">Video Games & VR</option>
                    <option value="Cars">Cars, Trucks & Vans</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Camera">Cameras, Camcorders & Drones</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-main mt-3">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
