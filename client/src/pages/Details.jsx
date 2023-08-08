import React, { useState } from "react";
// react location and navigation
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const Details = () => {
  // location
  const location = useLocation();
  // navigate
  const navigate = useNavigate();

  const [itemInfo, setItemInfo] = useState(location?.state?.data);

  // go back to the homepage
  const backToHome = () => navigate("/home");

  return (
    <div className='page-text-style'>
      <Header />
      <section className="d-flex justify-content-center align-items-center mt-5">
        <div className="container">
          <div className="d-flex justify-content-evenly align-items-center">
            <h1 className="page-text-style-h1">Details</h1>
            <button onClick={backToHome} className="btn btn-main">
              Back
            </button>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="card p-5 m-5 main-product-card">
                  <div className="d-flex justify-content-between align-items-center product-name-contact">
                    <h1 className="page-text-style-h1">{itemInfo?.product.title}</h1>
                    <a
                      href={`mailto:${itemInfo?.userInfo.email}`}
                      className="fs-3 page-text-style-p"
                    >
                      Contact
                    </a>
                  </div>

                  <div className="card m-5 d-flex justify-content-evenly align-items-center product-card">
                    <img
                      src={itemInfo?.product.imageURL}
                      alt="product item"
                      className="img-fluid card-img-top product-img"
                    />
                    <div className="p-5 product-details">
                      <p className="fs-3 page-text-style-p">Price: ${itemInfo?.product.price}</p>
                      <p className="fs-5 page-text-style-p">
                        {itemInfo?.product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
