import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { userContext } from '../Context/UserName'
import { AuthContext } from '../Context/AuthContext'

export default function Home() {
    const {setToken} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = ()=>{
localStorage.removeItem("token");
localStorage.removeItem("userName");
setToken("")
navigate('/signin')
    }
    const {userName} = useContext(userContext)
    const [products , setProducts] = useState([])
useEffect(()=>{
    axios.get("https://ecommerce.routemisr.com/api/v1/products")
    .then((res)=> setProducts(res.data.data))

} , [])
const {addToProduct} = useContext(CartContext)
  return (
    <>
    <div className='w-100 d-flex justify-content-evenly align-items-center'>
        <h2>hello {userName}</h2>
<Link to={"/"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>Home</Link>
<Link to={"cart"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>cart</Link>
<h2 onClick={handleLogout}> log out</h2>

    </div>
    {      console.log(products)}
    <div className="container">
        <div className="row">
    {
 
        products.map((product)=>{
            return(
                <div className='col-lg-3 my-4'>
                <div className='card py-3' >
                    <div className='card-img'>
<img src={product.images[0]} style={{width:"100%"}}  />

                    </div>
                    <div className="card-body">
                        <h2>{product.title.slice(0,15)}</h2>
                       
                        <button className='btn btn-info' onClick={()=> addToProduct(product.id)}>addToCart</button>
                    </div>

                    </div>
                </div>
            )
        })
    }
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
