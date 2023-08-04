import React, { useState } from "react";
// axios
import Axios from "axios";
// react cookie
import { useCookies } from "react-cookie";
// navigate
import { useNavigate } from "react-router-dom";
// component
import { Header } from "../components/Header";

export const Login = () => {
  // user data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies("access_token");

  // navigation
  const navigate = useNavigate();

  // to the register page
  const toRegister = () => navigate('/register');

  // on form submit
  const onSubmit = (e) => {
    e.preventDefault();

    // call the login function
    loginAccount(email, password);
  };

  // login to account
  const loginAccount = async (email, password) => {
    try {
      const res = await Axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      setCookies("access_token", res.data.token);
      // store the user id in local storage
      window.localStorage.setItem("userID", res.data.id);
      // login successful
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert('Login was unsuccessful.');
    }
  };

  return (
    <div>
      <Header />

      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1>Login</h1>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <form onSubmit={onSubmit} className="card mt-3 p-5">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
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
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-dark mt-3">
                  Login
                </button>
                <p className="text-center mt-2 sign-in-up-link" onClick={toRegister}>
                  Don't have an account? Register here.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
