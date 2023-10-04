"use client"
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { ContextStore } from "./Context";
import { getMyBoards, postBoard } from '@/appLogic/boardFetches';

export default function ModalSelectBoard () {
    const router = useRouter()
    const contextObj = useContext(ContextStore)
    const isSignedIn = contextObj.user && contextObj.user.username
    const [newBoardName, setNewBoardName] = useState("")

    async function submitNewBoard(event) {
        event.preventDefault()
        postBoard(newBoardName)
        .then(data =>{
            console.log(data)
            if (data.error) {
                // throw error
                console.log("Error: ", data)
            } else {
                contextObj.setMyBoards([...contextObj.myBoards, data])
                contextObj.setActiveBoard(data)
                router.push(`/board/${data.uuid}`)
            }
        })
    }

    useEffect(() => {
        getMyBoards()
        .then(data => {
            contextObj.setMyBoards(data)
        })
    }, [])

    return( <>
        <dialog id="modalSelectBoard" className={`modal modal-open`}>
            <div className="modal-box w-11/12 max-w-5xl"> 
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow "> 
                        <h3 className="font-bold text-xl mb-4 ">Select a Board</h3>
                        <div className="overflow-y-auto max-h-72">
                            <ul className="menu w-auto p-0  ">
                                <hr/>
                                {contextObj.myBoards && contextObj.myBoards.length ? 
                                    contextObj.myBoards.map(item => 
                                        <div key={item.name + item.id}>
                                            <li> <Link href={`/board/${item.uuid}`} className="text-base" >{item.name}</Link> </li>
                                            <hr/>
                                        </div>
                                    )
                                    :
                                    <div>There no boards yet. Please create a new board below.</div> 
                                }
                            </ul>
                        </div>
                        <h3 className="font-bold mt-4 mb-2" >Or create a new board</h3>
                        <div className="flex">    
                            <input type="text" name="new board name" placeholder="new board name" className="input input-bordered w-full"
                                value={newBoardName} onChange={e => setNewBoardName(e.target.value)}
                            />
                            <div className={newBoardName.trim().length ? null : "tooltip"} data-tip="provide a name"  >
                                <button className="btn ml-3" onClick={e =>submitNewBoard(e)} disabled={!newBoardName.trim().length}>Create</button>
                            </div>
                        </div>
                    </div> 
                    
                    { isSignedIn ? null :
                        <>
                            <div className="divider lg:divider-horizontal font-bold px-5">OR</div> 
                            <div className="flex flex-col    ">
                                <h3 className="font-bold text-xl mb-4 ">Create an Account!</h3>
                                <button className="btn btn-primary" onClick={() => router.push('/signup')} >Sign up</button>
                                <button className="btn btn-outline btn-primary  my-4" onClick={() => router.push('/login')} >Log in</button>
                                <ul className="list-disc list-inside">
                                    Benefits of an account:
                                    <li>Securely save your boards</li>
                                    <li>Access on other devices</li>
                                    <li>Share with others</li>
                                </ul>
                                <br/>
                                If you choose not to create an account,<br/>
                                you can still use brainstormr.
                            </div>
                        </>
                    }
                </div>
            </div>
        </dialog>
    </> )
}