"use client"
import Link from 'next/link';
import { useContext } from "react";
import { ContextStore } from "./Context";
import { BsPersonCircle } from "react-icons/bs";

export function ProfileDropdown() {
    const contextObj = useContext(ContextStore)

    return(
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-0 btn px-0 btn-ghost"> <BsPersonCircle size="2em" /> </label>
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-40">
                {contextObj.user && contextObj.user.username ?  
                    <>
                        <li > <Link href='/profile'> Profile </Link> </li>
                        <li > <Link href='/logout'> Log out </Link> </li>
                    </>
                :
                    <>
                        <li > <Link href='/login'> Log in </Link> </li> 
                        <li > <Link href='/signup'> Sign up </Link> </li> 
                    </>
                }
            </ul>
        </div>
    )
}