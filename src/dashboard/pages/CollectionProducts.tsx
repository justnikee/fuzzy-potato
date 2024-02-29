import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Props = {
    thumbnail: string;
    _id: string;
    title: string

}

const CollectionProducts = () => {

    const [products , setProducts] = useState<Props[]>([]);
   
    const { categoryId } = useParams();

    useEffect(() => {
        const getProducts = async () => {
           const res = await axios.get(`http://localhost:5001/category/single/${categoryId}`);
           console.log(res.data)
           setProducts(res.data)
        }
        getProducts();
    },[])

  return (
    <div><h2>Products in the collection</h2>
    <div>
        <ul>
            {products?.map((prod) => (
                <li className=" mb-4" key={prod._id} >
                    <a className="flex gap-4 items-center justify-start" href={`/admin/collection/${categoryId}/${prod._id}`}>
                    <img width={100} height={100} src={prod.thumbnail} alt={prod.title} />
                    <div>
                        <h3>{prod.title}</h3>
                    </div>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default CollectionProducts