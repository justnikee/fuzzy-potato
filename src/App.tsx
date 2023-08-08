
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
// import Products from '.././src/components/products'
import AddProduct from './components/addProduct'


interface Product {
  product: string;
  index: string;
}

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
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-xl'>Products</h2>
      <div className='grid grid-cols-4'>
      {products?.map((product: Product, index: number) => (
        <div className='flex justify-start items-center flex-col gap-3' key={index}>
          <img src={product.thumbnail} alt={product.title} />
        <div>
      <h2 className='text-l'>{product.title}</h2>
      <h3 className='text-m'>{product.price}</h3>
    </div>
  </div>
))}
      </div>

    </div>
    <AddProduct/>
    </>
  )
}

export default App
