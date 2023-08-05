import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// navigate
import { useNavigate } from "react-router-dom";
// react cookie
import { useCookies } from "react-cookie";

export const Header = () => {
  const [cookies, setCookies] = useCookies("access_token");

  // navigation
  const navigate = useNavigate();
  const routeLogin = () => navigate("/");
  const routeHome = () => navigate("/home");
  const routeRegister = () => navigate("/register");
  const routeAdd = () => navigate("/add");
  const routePost = () => navigate('/posts');

  // logout
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="nav-links fs-1 page-text-style-h1">SocialX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-responsive" />
        <Navbar.Collapse id="navbar-responsive">
          {!cookies.access_token ? (
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link className="me-3 fs-4 nav-links page-text-style-h1" onClick={routeLogin}>
                Login
              </Nav.Link>
              <Nav.Link className="me-3 fs-4 nav-links page-text-style-h1" onClick={routeRegister}>
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link className="me-3 fs-4 nav-links page-text-style-h1" onClick={routeHome}>
                Home
              </Nav.Link>
              <Nav.Link className="me-3 fs-4 nav-links page-text-style-h1" onClick={routeAdd}>
                Add
              </Nav.Link>
              <Nav.Link className="me-3 fs-4 nav-links page-text-style-h1" onClick={routePost}>
                Posts
              </Nav.Link>
              <button className="btn btn-main btn-md" onClick={logout}>
                Logout
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
