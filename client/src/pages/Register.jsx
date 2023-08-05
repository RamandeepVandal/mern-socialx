import React, { useState } from "react";
// axios
import Axios from "axios";
// components
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // user data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigation
  const navigate = useNavigate();

  // to the login page
  const toLogin = () => navigate("/");

  // on form submit
  const onSubmit = (e) => {
    e.preventDefault();

    registerAccount(name, email, password);
  };

  // register account
  const registerAccount = async (name, email, password) => {
    await Axios.post("http://localhost:5000/register", {
      name,
      email,
      password,
    }).then((response) => {
      // if registration was a success
      if (response.data.message === "Account created!") {
        navigate("/");
      } else {
        alert(response.data.error);
      }
    });
  };

  return (
    <div className='page-text-style'>
      <Header />

      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="page-text-style-h1">Register</h1>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <form className="card mt-3 p-5" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label page-text-style-p">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label page-text-style-p">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label page-text-style-p">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-main mt-3">
                  Register
                </button>
                <p
                  className="text-center mt-2 sign-in-up-link"
                  onClick={toLogin}
                >
                  Already have an account? Login here.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
