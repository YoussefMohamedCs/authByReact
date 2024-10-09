import React, { useState } from 'react'
import axios from "axios"
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function () {
    const [userName  , setUserName] = useState("")
    const [email ,  setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [repassword , setRePassword] = useState("")
    const [phone , setPhone] = useState("")
    const [passwordError , setPasswordError] = useState("")
const navigate = useNavigate()
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const dataForm = {
        name : userName ,
        email : email ,
        password : password ,
        rePassword :  repassword,
        phone : phone ,
    }
    const handelSubmit =async(e)=>{
e.preventDefault();

const data =await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , 
    dataForm
).then((response)=>{
    console.log(response)
    // console.log(dataForm)
    if(window.location.pathname == "/signup"){
        navigate("/signin")
        
    }
    
}).catch((err)=>{
    console.log(err?.response?.data?.message)
})



    }







  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}} >
<form className='w-75' onSubmit={handelSubmit}>
    <label htmlFor="userName">name</label>
    <input type="text" className='form-control' id='userName' placeholder='userName' value={userName} onChange={(e)=>setUserName(e.target.value)} />

    <label htmlFor="email" className='mt-3'>email</label>
    <input type="email" className='form-control' id='email' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />



    <label htmlFor="password" className='mt-3'>password</label>
    <input type="password" className='form-control' id='password' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
{passwordError && <p>{passwordError}</p>}
    <label htmlFor="rePassword" className='mt-3'>re password</label>
    <input type="password" className='form-control' id='rePassword' placeholder='rePassword' value={repassword} onChange={(e)=> setRePassword(e.target.value)} />

    <label htmlFor="userNumber" className='mt-3'>phone</label>
    <input type="number" className='form-control' id='userNumber' placeholder='userNumber' value={[phone]} onChange={(e)=> setPhone(e.target.value)} />




<button className='btn btn-info mt-3'>SignUP</button>
<p>if you have an account <Link to={'/signin'}>sign in</Link></p>

</form>
    </div>
  )
}
