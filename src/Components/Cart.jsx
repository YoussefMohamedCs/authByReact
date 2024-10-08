import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { userContext } from '../Context/UserName'

export default function Cart() {
    const {getCartItems , cart} = useContext(CartContext)
    useEffect(()=>{
        getCartItems()
    } , [])
    const {userName} = useContext(userContext)
  return (
    <>
       <div className='w-100 d-flex justify-content-evenly align-items-center'>
        <h2>hello {userName}</h2>
<Link to={"/"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>Home</Link>
<Link to={"/cart"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>cart</Link>
    </div>
    <div className="container">
        <div className="row">
            {
                cart.map((product)=>{
                    return(
                        <div className='col-lg-3 my-4'>
                        <div className='card py-3' >
                            <div className='card-img'>
        <img src={product?.product?.imageCover} style={{width:"100%"}}  />
        
                            </div>
                            <div className="card-body">
                            
                               
                            
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
