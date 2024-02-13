import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, getProdByCat } from "../../store/slices/allProducts";


type Props = {}

const Products = (props: Props) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const catagory = useSelector((state) => state.catagories.categories)
    const loading = useSelector((state) => state.products.loading);

    useEffect(() => {
            dispatch(getAllProducts());
            dispatch(getProdByCat());
            console.log(getProdByCat())
    },[dispatch])

  return (
    <>
    <div>
     <h2>categrory</h2>
     <div>
      {catagory.map((cat:any) => (
         <ul>
          <li>{cat}</li>
         </ul>
      ))}
     </div>

      {loading === 'pending' && <p>Loading...</p>}
      {loading === 'succeeded' && (
        <ul>
          {products.map((product:any) => (
            <li key={product._id}>{product.title}</li>
          ))}
        </ul>
      )}
      {loading === 'failed' && <p>Error occurred while loading products.</p>}
    </div>
    </>
  )
}


export default Products;