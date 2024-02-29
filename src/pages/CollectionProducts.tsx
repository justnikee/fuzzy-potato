
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getProdByCat } from "../store/slices/allProducts"


type Props = {}

const CollectionProductss = (props: Props) => {

const dispatch = useDispatch()

const products = useSelector((state:any) => state.products.products);
const loading = useSelector((state:any) => state.products.loading);

useEffect(() => {
     dispatch(getProdByCat());
}, [dispatch])

  return (
    <div>
        <h2>CollectionProducts</h2>
        <div >
           {
            products.map((product) => (
                <div key={product._id}>
                    <h2>{product.name}</h2>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default CollectionProductss