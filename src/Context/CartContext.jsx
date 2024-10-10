import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext()
export default function CartContextProvider({children}){
    let headers ={
        token : localStorage.getItem("token")
    }
const [cart , setCart] = useState([])
    const getCartItems = async ()=>{
        const data =await axios.get("https://ecommerce.routemisr.com/api/v1/cart" ,
             {headers}
            )
            console.log(data?.data?.data?.products)
            setCart(data?.data?.data?.products)
    }
    
const addToProduct = async (productId)=>{
    let data =await axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,
        {productId} ,
        {headers}
    )
    console.log(data)

}


return(
    <>
    <CartContext.Provider value={{getCartItems ,addToProduct , cart}}>
        {children}
    </CartContext.Provider>
    </>
)



}