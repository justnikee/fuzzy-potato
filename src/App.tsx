import './App.css'
import AddProduct from './components/addProduct'
import Products from './pages/products'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import SingleProduct from './pages/singleProduct'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addproduct' element={<AddProduct/>} />
      <Route path='/products/:id' element={<SingleProduct/>} />
      <Route path='/products' element={<Products/>} />
    </Routes>
    </>
  )
}

export default App
