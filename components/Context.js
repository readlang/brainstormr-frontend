"use client"
// useState requires client component
import { createContext, useState } from "react";
export const ContextStore = createContext({})

export default function Context({ children }) {
    const [myBoards, setMyBoards] = useState([])
    const [activeBoard, setActiveBoard] = useState({})
    const [user, setUser] = useState({})
    const [token, setToken] = useState("")


    const contextObj ={
        myBoards: myBoards,
        setMyBoards: setMyBoards,
        activeBoard: activeBoard,
        setActiveBoard: setActiveBoard,
        token: token, 
        setToken: setToken,
        user: user, 
        setUser: setUser,
    }

    // error object in content?
    // perhaps this is how error modal pops up?
    
    return(
        <ContextStore.Provider value={contextObj}>
            {children}
        </ContextStore.Provider>
    )
}
