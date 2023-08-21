import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

type Product = {
  thumbnail: string;
  title: string;
  price: string;
  description: string;
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

  return (
    <>
      <div>
        <div>
          <img src={product.thumbnail} alt="" />
        </div>
        <div>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
