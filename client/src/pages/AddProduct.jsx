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
  const [imagePath, setImagePath] = useState("");
  const [postUser, setPostUser] = useState(userID);

  // navigate
  const navigate = useNavigate();

  // on form submit
  const onSubmit = (e) => {
    e.preventDefault();

    addProduct(title, description, price, imagePath, postUser);
  };

  // add product
  const addProduct = async (title, description, price, imagePath, postUser) => {
    await Axios.post("http://localhost:5000/products", {
      title,
      description,
      price,
      imagePath,
      postUser
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
        <h1>Add Product</h1>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <form onSubmit={onSubmit} className="card mt-5 mb-5 p-5">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
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
                  <label htmlFor="description" className="form-label">
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
                  <label htmlFor="price" className="form-label">
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
                  <label htmlFor="image" className="form-label">
                    Image Url
                  </label>
                  <input
                    id="image"
                    type="text"
                    className="form-control"
                    value={imagePath}
                    onChange={(e) => setImagePath(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-dark mt-3">
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
