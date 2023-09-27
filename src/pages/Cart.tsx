import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";

interface CartItem {
  _id: string;
  title: string;
  image: string;
  price: number;
  total: number;
  quantity: number;
  productId: string;
  itemId: string;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get<CartItem[]>(
        "http://localhost:8080/cart/allItems"
      );
      console.log("Fetched Items", response.data.length);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemove = async (item: CartItem) => {
    const res = await axios.delete(
      `http://localhost:8080/cart/removeItem/${item._id}`
    );
    console.log("Removed Items", res);
    fetchCartItems();
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  console.log("Items State", items);

  return (
    <Layout>
      {items && items.length > 0 ? (
        <div className="py-10">
          <h2 className="text-[34px] uppercase ">Cart Items</h2>
          <div>
            {items?.map((item) => (
              <div
                className="flex bg-slate-300 w-1/3 p-3 gap-3 mb-5"
                key={item._id}
              >
                <img
                  height={100}
                  width={100}
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col w-full gap-10 ">
                  <div className="flex justify-between ">
                    <Link to={`/products/${item.productId}`}>
                      <h2>{item.title}</h2>
                    </Link>
                    <p>Price: INR{item.price}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Quantity: {item.quantity}</p>
                    <p
                      className="bg-black text-white px-7 py-2 cursor-pointer"
                      onClick={() => handleRemove(item)}
                    >
                      {" "}
                      Remove{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          <h2>Your cart is Empty !!</h2>
          <Link to={"/products"}>Add some products</Link>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
