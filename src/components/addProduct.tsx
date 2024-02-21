import { useState } from "react";
import axios from "axios";

interface FormData {
  title: string;
  description: string;
  price: number;
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
    <div className="flex max-w-6xl w-full m-auto mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-2/4">
        <div className="bg-slate-200 flex flex-col p-4 rounded-xl">
        <label htmlFor="title" className="text-sm">Title</label>
        <input
          name="title"
          onChange={handlechange}
          type="text"
          placeholder="Short Sleve T-Shirt"
          className="p-2 rounded-md mb-3 mt-2 placeholder:text-sm"
        />
        <label htmlFor="description" className="text-sm">Description</label>
        <textarea
          name="description"
          onChange={handlechange}
          placeholder=""
          className="p-2 rounded-md mb-3 mt-2"
        />
        </div>

        <div className="bg-slate-200 flex flex-col p-4 rounded-xl mt-4">
        <label htmlFor="thumbnail" className="text-sm">Media</label>
        <input
          name="thumbnail"
          onChange={handlechange}
          type="text"
          placeholder="Add Image Url"
          className="p-2 rounded-md mb-3 mt-2"
        />
        </div>
        <div className="bg-slate-200 flex flex-col p-4 rounded-xl mt-4">
        <input
          name="price"
          onChange={handlechange}
          type="text"
          placeholder="price"
          className="p-2 rounded-md mb-3 mt-2"
        />
        </div>
        <div className="bg-slate-200 flex flex-col p-4 rounded-xl mt-4">
        <input
          type="text"
          onChange={handlechange}
          name="brand"
          placeholder="brand"
          className="p-2 rounded-md mb-3 mt-2"
        />
        <input name="category" onChange={handlechange} placeholder="Collection" className="p-2 rounded-md mb-3 mt-2" />
        </div>
        <button className="mt-4 mb-4 px-4 py-2 bg-black text-white rounded-md">submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
