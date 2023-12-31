import "./App.css";
import AddProduct from "./components/addProduct";
import Products from "./pages/products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SingleProduct from "./pages/singleProduct";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Account from "./pages/Account";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
