// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AddProduct } from "./pages/AddProduct";
import { Details } from "./pages/Details";
import { UserPosts } from "./pages/UserPosts";
import { LandingPage } from "./pages/LandingPage";
import { EditProduct } from "./pages/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/details" element={<Details />} />
        <Route path="/posts" element={<UserPosts />} />
        <Route path="/edit" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
