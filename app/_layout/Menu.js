"use client"
import Link from "next/link"
import { useState } from "react";
import { BsList } from "react-icons/bs";

export function Menu() {
    const [showSideMenu, setShowSideMenu] = useState(false)

    return(
        <div className="drawer w-14">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={showSideMenu} onChange={(e)=>setShowSideMenu(e.target.checked)}/>
            <div className="drawer-content">
                {/* Page (non-side menu) content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button p-0" ><BsList size="2.5em"/></label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <br/><br/>
                    <li> <Link className="font-bold" href="/" onClick={()=>setShowSideMenu(false)}> Home </Link> </li>
                    <li> <Link className="font-bold" href="/profile" onClick={()=>setShowSideMenu(false)}> Profile </Link> </li>
                    <hr className="my-2" />
                    <li> <Link className="font-bold" href="/addsite" onClick={()=>setShowSideMenu(false)}> Add Site </Link> </li>
                </ul>
            </div>
        </div>
    )
}