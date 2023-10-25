"use client"
import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { ContextStore } from "@/components/Context";

export default function BoardDisplay() {
    const pathname = usePathname();
    const contextObj = useContext(ContextStore)
    
    if (pathname.startsWith('/board/') && pathname.length > 7 ) {
        return (
            <span className='text-xs font-bold' >
                { contextObj.activeBoard && contextObj.activeBoard.name ? 
                    `Board: ${contextObj.activeBoard.name}` : "Board not open"
                }
            </span> 
        )
    } else {
        return ( <div>&nbsp;</div> )
    }
}