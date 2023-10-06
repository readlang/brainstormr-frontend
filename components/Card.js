"use client"
import { useState } from "react"
import { LuMoveDiagonal2 } from "react-icons/lu";
import { dragLogic } from "@/functions/dragLogic";

export default function Card({data}) {
    const pos = {x: data.position.split(",")[0], y: data.position.split(",")[1]}
    
    const [dragging, setDragging] = useState(false)
    const [posX, setPosX] = useState(parseInt(pos.x))
    const [posY, setPosY] = useState(parseInt(pos.y))

    const dragState = {
        dragging: dragging, setDragging: setDragging,
        posX: posX, setPosX: setPosX,
        posY: posY, setPosY: setPosY
    }

    dragLogic(dragState)
    
    return(
        <div className="absolute rounded-md border border-gray-400 shadow-md bg-base-100 m-4 w-96 h-96 overflow-clip" 
            style={{transform: `translate(${posX}px, ${posY}px)`, userSelect: 'none', WebkitUserSelect: 'none'}}>
            <div className="h-8 bg-gray-200 p-1 cursor-move" onPointerDown={()=>setDragging(true)}>
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-square btn-xs btn-ghost p-0">
                        <svg className="swap-off fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                        viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 top-0 absolute">
                        <li><a>Open Detail</a></li>
                        <li><a>Copy</a></li>
                        <li><a>Color</a></li>
                        <li><a className="text-red-700">Delete</a></li>
                    </ul>
                </div>
            </div>

            <div className="m-2 bg-gray-200">
                {data.content}
            </div>
            <div className="absolute bottom-0 right-0 cursor-move text-gray-300">
                <LuMoveDiagonal2 size="1.25em" onClick={() => console.log("click")}/>
            </div>
        </div>
    )
}