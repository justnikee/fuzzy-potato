import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/layout";

type Product = {
  _id: string;
  title: string;
  thumbnail: string;
  price: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(products);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Layout>
        {loading ? (
          <p> loading...</p>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl">Products</h2>
            <div className="grid grid-cols-4">
              {products?.map((product: Product, index: number) => (
                <Link to={`/products/${product._id}`}>
                  <div
                    className="flex justify-start items-center flex-col gap-3"
                    key={index}
                  >
                    <img src={product.thumbnail} alt={product.title} />
                    <div>
                      <h2 className="text-l">{product.title}</h2>
                      <h3 className="text-m">{product.price}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Products;
