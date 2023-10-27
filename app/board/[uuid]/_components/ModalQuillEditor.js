"use client"
import { useEffect, useState } from "react"
import QuillSnow from "./QuillSnow"

export default function ModalQuillEditor({data, currentText, setCurrentText}) {
    const [modalText, setModalText] = useState(currentText)
    useEffect(()=>{setModalText(currentText)}, [currentText])
    
    return(
        <dialog id={`my_modal_${data.id}`} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog" className="mb-5">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={()=>setCurrentText(modalText)} > ✕
                    </button>
                </form>
                <QuillSnow className="bg-base-100 mt-2" currentText={modalText} setCurrentText={setModalText} />
            </div>
        </dialog>
    )
}