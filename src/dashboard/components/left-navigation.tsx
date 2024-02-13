import { Link } from "react-router-dom"


type Props = {}

const leftnavigation = (props: Props) => {
  return (
    <div className="flex flex-col items-left bg-slate-300 p-5 w-1/5 h-[600px]">
        <Link className="bg-white rounded-lg p-3 " to="/admin"> Home </Link>
        <Link className="rounded-lg p-3 " to="/admin">Orders</Link>
        <Link className="rounded-lg p-3 " to="/admin/products">Products</Link>
        <Link className="rounded-lg p-3 " to="/admin/content">Content</Link>
        <Link className="rounded-lg p-3 " to="/">Go to Store</Link>
    </div>
  )
}

export default leftnavigation