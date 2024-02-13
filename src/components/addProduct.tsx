import React, { useState } from "react";
import axios from "axios";

interface FormData {
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  thumbnail: string;
  category: string;
}

const AddProduct = () => {
  const [formData, setFormData] = useState({});

  const handlechange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setFormData({});
    addProduct(formData);
  };

  const addProduct = async (formData: any) => {
    const res = await axios.post("http://localhost:5001/products", formData);
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-2/4">
        <input
          name="title"
          onChange={handlechange}
          type="text"
          placeholder="title"
        />
        <textarea
          name="description"
          onChange={handlechange}
          placeholder="description"
        />
        <input
          name="price"
          onChange={handlechange}
          type="text"
          placeholder="price"
        />
        <input
          name="discountPercentage"
          onChange={handlechange}
          type="text"
          placeholder="discountPercentage"
        />
        <input
          name="rating"
          onChange={handlechange}
          type="text"
          placeholder="rating"
        />
        <input
          name="thumbnail"
          onChange={handlechange}
          type="text"
          placeholder="thumbnail"
        />
        <input
          type="text"
          onChange={handlechange}
          name="brand"
          placeholder="brand"
        />
        <input name="category" onChange={handlechange} placeholder="category" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
