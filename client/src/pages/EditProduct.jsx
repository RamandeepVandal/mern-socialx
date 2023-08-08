import React, { useState } from "react";
// axios
import Axios from "axios";
// react router navigation
import { useNavigate, useLocation } from "react-router-dom";
// get user id hook
import { getUserID } from "../hooks/getUserID";
// component
import { Header } from "../components/Header";

export const EditProduct = () => {
  // user id
  const userID = getUserID();

  // location
  const location = useLocation();

  // user data
  const [id, setID] = useState(location?.state?.data?.id);
  const [title, setTitle] = useState(location?.state?.data?.title);
  const [description, setDescription] = useState(location?.state?.data?.description);
  const [price, setPrice] = useState(location?.state?.data?.price);
  const [imageURL, setImageURL] = useState(location?.state?.data?.imageURL);
  const [postUser, setPostUser] = useState(userID);

  // navigate
  const navigate = useNavigate();

  // on form submit
  const onSubmit = (e) => {
    e.preventDefault();

    editProduct(id, title, description, price, imageURL, postUser);
  };

  // add product
  const editProduct = async (id, title, description, price, imageURL, postUser) => {
    await Axios.put(`http://localhost:5000/user/post/${id}`, {
      title,
      description,
      price,
      imageURL,
      postUser,
    }).then((res) => {
      if (res.data.status === "ok") {
        navigate("/posts");
      } else {
        alert("Please fill out all fields.");
      }
    });
  };

  return (
    <div>
      <Header />

      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="page-text-style-h1">Edit Product</h1>

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
                <button type="submit" className="btn btn-main mt-3">
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
