import React, { useContext } from 'react'
import { AuthContext, authContext } from '../Context/AuthContext'
import Signin from '../Components/Signin'

export default function AllSec({children}) {
    const {token} = useContext(AuthContext)
  return (
    <>
    {
token ? children  : <Signin />
    }
    </>
  )
}
