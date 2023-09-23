import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import toast, { Toaster } from "react-hot-toast";

type Product = {
  thumbnail: string;
  title: string;
  price: string;
  description: string;
  category: string;
};

const SingleProduct = () => {
  const [product, setProduct] = useState<Product>({
    thumbnail: "",
    title: "",
    price: "",
    description: "",
  });
  const param = useParams<{ id: string }>();

  const getProduct = async () => {
    const res = await axios.get(`http://localhost:8080/products/${param.id}`);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, [param.id]);

  const handleCart = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/cart/addtocart`, {
        productId: param.id,
        quantity: 1,
      });

      if (res.data) {
        return toast.success("Product Added to the cart!!");
      } else {
        return toast.error("ooop!! something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex gap-14">
          <Toaster />
          <div className="w-[60%] ml-36">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className="w-[50%]">
            <h2 className="text-[24px]">{product.title}</h2>
            <h3 className="mb-6">{product.category}</h3>
            <p className="">MRP : ₹{product.price}</p>
            <p>
              incl. of taxes <br />
              (Also includes all applicable duties)
            </p>
            <a
              onClick={handleCart}
              className="mt-6 mb-6 inline-block text-white text-xl uppercase bg-black px-14 py-4 rounded"
              href="#"
            >
              Add to Cart
            </a>
            <p>{product.description}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleProduct;
