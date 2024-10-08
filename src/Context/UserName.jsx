import { createContext, useState } from "react";

export const userContext = createContext()
export default function UserContextProvider({children}){
    const [userName , setUserName] = useState(localStorage.getItem("userName") ?? "")

    return(
        <userContext.Provider value={{userName , setUserName}}>
            {children}
        </userContext.Provider>
    )
}