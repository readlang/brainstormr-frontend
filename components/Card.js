"use client"
import { useState, useContext } from "react"
import { ContextStore } from "@/components/Context";
import { LuMoveDiagonal2 } from "react-icons/lu";
import { dragLogic } from "@/functions/dragLogic";
import { deleteCard, updateCard } from "@/appLogic/cardFetches";
import QuillBubble from "./QuillBubble";

export default function Card({data}) {
    const contextObj = useContext(ContextStore)
    const pos = {x: data.position.split(",")[0], y: data.position.split(",")[1]};
    const [confirmDelete, setConfirmDelete] = useState(false)

    // resets confirm delete checkbox after 2 seconds
    if (confirmDelete) {
        setTimeout(() => {
            setConfirmDelete(false);
        }, 2000);
    }
    
    const [dragging, setDragging] = useState(false)
    const [posX, setPosX] = useState(parseInt(pos.x))
    const [posY, setPosY] = useState(parseInt(pos.y))

    const dragState = {
        dragging: dragging, setDragging: setDragging,
        posX: posX, setPosX: setPosX,
        posY: posY, setPosY: setPosY
    }

    dragLogic(dragState)

    function submitDelete() {
        deleteCard(data.uuid)
        contextObj.setActiveBoard({...contextObj.activeBoard, 
            Cards: [...contextObj.activeBoard.Cards.filter(card => card.uuid !== data.uuid)]
        })
    }

    // removes special html characters returned from DB
    function decode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    // card "content" state - decode() will remove special html characters from DB
    const [lazyText, setLazyText] = useState( decode(data.content) )
    const [currentText, setCurrentText] = useState( decode(data.content) )
    const [timerActive, setTimerActive] = useState(false)

    // if change in text, autosaves text every 5 seconds
    if (timerActive === false && currentText !== lazyText) {
        setTimerActive(true)
        setTimeout(() => {
            console.log("SAVE TO DB NOW")
            // save to DB
            updateCard(data.uuid, currentText, data.color, data.position, data.size)
            // setLazyText to what was saved
            setLazyText(currentText)
            setTimerActive(false)
        }, 5000);
    }

    return(
        <div className="absolute rounded-md border border-gray-400 shadow-md bg-base-100 m-4 w-96 h-96 flex flex-col pb-3" 
            style={{transform: `translate(${posX}px, ${posY}px)`, userSelect: 'none', WebkitUserSelect: 'none'}}>
            <div className="h-8 bg-gray-200 p-1 cursor-move" onPointerDown={()=>setDragging(true)}>
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-square btn-xs btn-ghost p-0">
                        <svg className="swap-off fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                        viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 top-0 absolute">
                        <li><a onClick={()=>console.log("open detail")}>Open Detail</a></li>
                        <li><a>Copy</a></li>
                        <li><a>Color</a></li>
                        {!confirmDelete ? 
                            <li><a className="text-red-700" onClick={()=>setConfirmDelete(true)}>Delete</a></li> :
                            <div className="text-red-700 font-bold px-4 py-2 flex content-center">Confirm w/ check
                                <input type="checkbox" className="checkbox checkbox-sm ml-4" onClick={submitDelete}/> 
                            </div>
                        }
                    </ul>
                </div>
            </div>

            <div className="m-2 bg-gray-200 flex-grow" style={{overflowY: 'auto', overflowX: 'visible'}}>
                <QuillBubble currentText={currentText} setCurrentText={setCurrentText}/>
            </div>
            <div className="absolute bottom-0 right-0 cursor-move text-gray-300">
                <LuMoveDiagonal2 size="1.25em" onClick={() => console.log("click")}/>
            </div>
        </div>
    )
}

/**
 * NOTES:
 * position left/top vs. transform
 * position: poor performance, better for static placed items
 * transform: much improved performance - good for moving animations
 * 
 * overflow-y-auto overflow-x-visible
 */