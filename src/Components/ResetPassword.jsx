import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const [resetcode , setReset] = useState("")
    const navigate = useNavigate()
    const handleSubmit =async (e)=>{
        const resCode ={
            resetCode : resetcode
        }
        e.preventDefault();
        try{
            const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode" , resCode )
            console.log(res)
            navigate("/enterNewPassword")

        }catch(err){
            console.log(err.message)
        }

    }
  return (
    <div  className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <form className='w-50' onSubmit={handleSubmit}>
            <label htmlFor="resetCode">resetCode</label>
            <input type="text" id='resetCode' placeholder='resetCode' value={resetcode} onChange={(e)=>setReset(e.target.value)} className='form-control'  />
            <button className='btn btn-info mt-3'>send</button>
        </form>
    </div>
  )
}
