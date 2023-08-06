import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
// import Products from '.././src/components/products'

function App() {

  const [products , setProducts] = useState([]);
  console.log(products)

  const getProducts = async() => {
    const res = await axios.get('http://localhost:8080/products');
    setProducts(res.data);
    console.log(res.data);
  }

  useEffect(() => {
       getProducts();
  },[])

  return (
    <>
    <div>
      products
    </div>
      {products.map((product:any, index) => {
        <div key={index}>
          <img src={product.image} alt={product.title} />
          <div>
            <h2>
              {product.title}
            </h2>
            <h3>
              {product.price}
            </h3>
          </div>
        </div>
      })}
    </>
  )
}

export default App
