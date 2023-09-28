"use client"
// useState requires client component
import { createContext, useState } from "react";
export const ContextStore = createContext({})

export default function Context({ children }) {
    const [valX, setValX] = useState(100)
    const [token, setToken] = useState("")
    const [user, setUser] = useState({})

    const contextObj ={
        valX: valX, setValX: setValX,
        token: token, setToken: setToken,
        user: user, setUser: setUser,
    }
    
    return(
        <ContextStore.Provider value={contextObj}>
            {children}
        </ContextStore.Provider>
    )
}
