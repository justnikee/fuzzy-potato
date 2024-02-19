import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Props = {
    title: string;
}

const EditProduct = (props: Props) => {
     const [product ,setProduct] = useState();
     const {productId} = useParams();
     console.log(productId)

    useEffect( () => {
        const getProductData = async () => {
            const res = await axios.get(`http://localhost:5001/products/${productId}`);
            const product = res.data;
            console.log(product)
            setProduct(product);
        }

        getProductData();
    },[])
  return (
    <div><h2>EditProduct</h2>
          <h2>{product?.title}</h2>
    </div>
  )
}

export default EditProduct