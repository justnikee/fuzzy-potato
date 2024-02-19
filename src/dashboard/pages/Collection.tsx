import axios from 'axios'
import { useEffect, useState } from 'react'

type Collection = {
    name: string;
    _id: string
}

const Collection = () => {

    const [collection, setCollection] = useState([])

useEffect( () => {
    // get categories
    const getCategories = async () => {
        const res = await axios.get<Collection[]>('http://localhost:5001/category');
        console.log(res.data)
        setCollection(res.data)
    }
    getCategories();
    
},[])

  return (
    <div>
        <h2>Collections</h2>
        <ul>
          {collection.map((item : any) => (
            <li key={item._id}>
                <a href={`/admin/collection/${item.name}`}>{item.name}</a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Collection