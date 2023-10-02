"use client"
import Link from 'next/link';
import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ContextStore } from "../../components/Context";
import { logoutFetch } from '@/appLogic/userFetches';

export default function Page() {
    const contextObj = useContext(ContextStore)
    const router = useRouter()
    
    useEffect(()=>{
        logoutFetch()
        .then(data => contextObj.setUser(data.user))
        .then(() => 
            setTimeout(()=>{
                router.push('/')
            }, 3000) 
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <article style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}>
                <h5 className="font-bold">You have been logged out.</h5>
                <small>you will be redirected to the home page</small><br/>
            </article>
        </>
    );
}