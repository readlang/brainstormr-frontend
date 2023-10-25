"use client"

import QuillSnow from "./QuillSnow"

export default function ModalEditCard() {

    function saveAndClose(event) {
        console.log("saveAndClose", event.target)

    }

    return(
        <div id="modal-background" className="fixed top-0 left-0 h-screen w-screen flex z-10 bg-black bg-opacity-50" 
            onClick={e => {e.target.id === "modal-background" ? saveAndClose(e) : null} } >
            <div className="rounded-2xl border border-gray-400 shadow-md bg-base-100 w-11/12 m-auto p-4">
                <div className="flex justify-end">
                    <button className="btn btn-xs mb-2" onClick={saveAndClose}>Save & Close</button>
                </div>
                <QuillSnow className="bg-base-100 mt-2"/>
            </div>
        </div>
    )
}