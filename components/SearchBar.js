"use client"
import { useEffect, useState } from "react";

export function SearchBar() {
    const [searchText, setSearchText] = useState("")
    const defaultWidth = "140px"
    const [componentWidth, setComponentWidth] = useState(defaultWidth)

    useEffect(() => {
        if (window.innerWidth > 600) {
            if (searchText !== "") setComponentWidth("250px")
            else setComponentWidth(defaultWidth)
        }
        if (window.innerWidth < 450) {
            if (searchText !== "") setComponentWidth("140px")
            else setComponentWidth("110px")
        }
    },[searchText])
    
    return(
        <input className="rounded-full border h-9 p-4"
            type="search" id="search" name="search" placeholder="search" 
            style={{width: componentWidth, marginBottom: "0"}}
            value={searchText} onChange={(e) => setSearchText(e.target.value)} 
        />
    )
}