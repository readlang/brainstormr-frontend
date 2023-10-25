"use client"
import { useState } from "react";
import { dragLogic } from "@/functions/dragLogic";

export default function Draggable () {
    const [dragging, setDragging] = useState(false)
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(200)

    const dragState = {
        dragging: dragging, setDragging: setDragging,
        posX: posX, setPosX: setPosX,
        posY: posY, setPosY: setPosY
    }

    dragLogic(dragState)

    return(
        <div className="bg-red-600 rounded w-32 h-12 " 
            style={{
                transform: `translate(${posX}px, ${posY}px)`, 
                userSelect: 'none', WebkitUserSelect: 'none'
            }}
            onPointerDown={()=>setDragging(true)}
            // is this line needed to stop touch scrolling?
            onTouchStart={e => e.preventDefault()}
        >
            Draggable
        </div>
    )
}