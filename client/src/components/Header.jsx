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

  // logout 
  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('userID');
    navigate('/');
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="nav-brand fs-1" onClick={routeHome}>
          SocialX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-responsive" />
        <Navbar.Collapse id="navbar-responsive">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link className="me-3 fs-4 nav-links" onClick={routeAdd}>
              Add
            </Nav.Link>
            {!cookies.access_token ? (
              <div className="d-flex">
                <Nav.Link className="me-3 fs-4 nav-links" onClick={routeLogin}>
                  Login
                </Nav.Link>
                <Nav.Link
                  className="me-3 fs-4 nav-links"
                  onClick={routeRegister}
                >
                  Register
                </Nav.Link>
              </div>
            ) : (
              <button className="btn btn-dark" onClick={logout}>Logout</button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
