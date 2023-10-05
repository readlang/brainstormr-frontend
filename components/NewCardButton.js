"use client"
export function NewCardButton() {

    return(
        <button className="btn btn-outline btn-xs rounded-full absolute top-3 -right-1" 
            onClick={()=>console.log("hello")}> New Card
        </button>
    )
}