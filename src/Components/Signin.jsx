import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from "axios"
import { AuthContext } from '../Context/AuthContext';
import { userContext } from '../Context/UserName';
export default function Signin() {
    const [email , setEmail] = useState("")
    const {setUserName} = useContext(userContext)
    const [password , setPassword] = useState("")
const formData = {
  email : email ,
  password :  password 
}
const {setToken} = useContext(AuthContext)
    const handleSubmit =async (e)=>{
e.preventDefault()
try{
    const data = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , formData)
// console.log(data.data.token)
localStorage.setItem("userName" ,data?.data?.user?.name )
setUserName(data.data.user.name)
localStorage.setItem("token" , data?.data?.token)
setToken(data?.data?.token)
if(window.location.pathname == "/signin"){
    Navigate("/")
}
}catch(err){
    console.log(err?.response?.data?.message)
}
    }
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ ;

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
    <form className='w-75' onSubmit={handleSubmit} >
        <label htmlFor="email" className='form-check-label'>email </label>
        <input type="email" id='email' className='form-control ' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />


        <label htmlFor="password" className='form-check-label mt-4'>password </label>
        <input type="password" id='password' className='form-control ' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />

<button className='btn btn-info mt-3' >LOGIN</button>

<p>if you do not have any accoutn <Link to={"/signup"}>Sign Up</Link></p>
<p>if you forget the password  <Link to={"/fogetPassword"}>Forget password</Link></p>
    </form>
    </div>
  )
}
