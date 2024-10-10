import axios from 'axios'
import React, { useState } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'

export default function ForgetPassword() {
    const [email , setEmail] = useState("")
    const navigate = useNavigate()
 
    const handleSubmit = async (e)=>{
        let emailData = {
            email : email
        }
        e.preventDefault()
        // console.log(data)
        try{
const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords" ,emailData)
// console.log(res)
navigate("/resetPassword")

        }catch(err){
            console.log(err)

        }

    }
  return (
    <div className='d-flex justify-content-center align-items-center form-group' style={{height:"100vh"}}  >
        <form  className='w-50' onSubmit={handleSubmit}>
            <label htmlFor="email" className='label-form'>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='set ur email' id='email' className='form-control'  />
            <button className='btn btn-info mt-3'>send</button>
        </form>
    </div>
  )
}
