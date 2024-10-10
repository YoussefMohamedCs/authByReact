import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EnterNewPassword() {
    const [email , setEmail] = useState("")
    const [newPassword , setNewPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        const newValues = {
            email : email ,
            newPassword : newPassword
        }
        e.preventDefault()
        try{
            const res = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" , newValues )
            navigate("/signin")


        }catch(err){
            console.log(err.message)
        }

    }
  return (
    <div  className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
    <form className='w-50' onSubmit={handleSubmit} >
<label htmlFor="emial">email</label>
<input id="emial" type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
<label htmlFor="newpassword" className='mt-3'>new password</label>
<input type="password" placeholder='newPassword' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className='form-control' id='newpassword' />
        <button className='btn btn-info mt-3'>send</button>
    </form>
</div>
  )
}
