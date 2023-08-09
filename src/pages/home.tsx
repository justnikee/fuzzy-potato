import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/addproduct'>Add Products</Link>
    <Link to='/products'>Products</Link>         
    </>
  )
}

export default Home
