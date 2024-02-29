import { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux"
import { getCollections } from "../store/slices/collections"
import { Link } from "react-router-dom";

const FeaturedCollections = (props: Props) => {

    const dispatch = useDispatch();
    const collections = useSelector((state:any) => state.collections.collections)
    const loading = useSelector((state: any) => state.collections.loading)

    console.log(collections)
    useEffect(() => {
        dispatch(getCollections())
    }, [dispatch]) 

  return (
    <div className="pb-16">
     {loading === 'pending' && <div>Loading...</div>}
      {loading === 'failed' && <div>Error fetching collections</div>}
      {loading === 'succeeded' && (
  <div>
    <p className="font-[Helvetica Text] text-3xl mb-6">Icons of Air</p>
    <ul className="flex gap-5">
      {collections && collections.map(collection => (
        <li className="w-1/3" key={collection._id}>
          <Link className="block" to={`/collection/${collection.name}`}> 
          <img className="block h-full w-full" src={collection.featuredImage} alt={collection.name} />
          <p className="pt-4 capitalize text-xl">{collection.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}
    </div>
  )
}

export default FeaturedCollections