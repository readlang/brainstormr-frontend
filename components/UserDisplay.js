"use client"
import { useEffect, useContext } from 'react';
import { ContextStore } from "@/components/Context";
import { authenticateFetch } from '@/appLogic/userFetches';

export default function UserDisplay() {
    const contextObj = useContext(ContextStore)
    useEffect(() => { authenticateFetch().then(data => contextObj.setUser(data.user) )}, [])

    return (
        <span className='text-xs font-bold' >
            { contextObj.user && contextObj.user.username ? 
                `Welcome, ${contextObj.user.username}` : "Please sign in"
            }
        </span> 
    )
}