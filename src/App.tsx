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
import Admin from "./dashboard/admin/admin";
import Products2 from "./dashboard/pages/Products";
import Collection from "./dashboard/pages/Collection";
import CollectionProducts from "./dashboard/pages/CollectionProducts";
import EditProduct from "./dashboard/pages/EditProduct";
import CollectionPage from "./pages/Collection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<CollectionPage/>} />
        <Route path="/collection/:categoryId" element={<CollectionProducts/>} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<Products2 />} />
        <Route path="/admin/collection" element={<Collection/>} />
        <Route path="/admin/collection/:categoryId" element={<CollectionProducts/>} />
        <Route path="/admin/collection/:categoryId/:productId" element={<EditProduct/>} />
      </Routes>
    </>
  );
}

export default App;
