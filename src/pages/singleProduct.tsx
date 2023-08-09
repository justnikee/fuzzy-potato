import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const SingleProduct = () => {

    const [product, setProduct ] = useState({});
     const param = useParams();

    const getProduct = async() => {
        console.log(param.id)
        const res = await axios.get(`http://localhost:8080/products/${param.id}`);
        setProduct(res.data);
    }
         
useEffect(() => {
    getProduct();
},[])

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
  )
}

export default SingleProduct
