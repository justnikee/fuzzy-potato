import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCollections } from "../store/slices/collections";
import Layout from "../layout/layout";

const Collection = () => {

  const dispatch = useDispatch();

  const collections = useSelector((state:any) => state.collections.collections);
  console.log(collections)
  const loading = useSelector((state:any) => state.collections.loading);

  useEffect(() => {
    dispatch(getCollections());
  },[])
  

    
  return (
    <Layout>
    <div className="h-full">
      <div>
        <h2 className="text-[30px] mb-4">Featured Collections</h2>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {loading === 'pending' ? (
          <p>Loading...</p>
        ) : loading === 'failed' ? (
          <p>Error fetching collections</p>
        ) : (
          collections.map((collection:any) => (
            <a className="block h-[500px]  relative" href={`/collection/${collection.slug}`}>
            <div className="flex flex-col justify-center items-center" key={collection._id}>
              <figure className="">
                <img src={collection.featuredImage} alt={collection.name} />
              </figure>
              <div className="">
                
                  <h1>{collection.name}</h1>
              </div> 
            </div>
            </a>
          ))
        )}
      </div>
    </div>
    </Layout>
  );
};

export default Collection