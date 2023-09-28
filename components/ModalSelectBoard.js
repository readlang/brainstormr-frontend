"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { postPost } from '@/appLogic/postFetches';
// import { postComment } from "@/appLogic/commentFetches";

export default function ModalSelectBoard ({type, commText, commND,commPC, postTitle, postUrl}) {
    const router = useRouter()

    
    async function submitPost(event) {
        event.preventDefault()
        // const data = await postPost(postTitle, postUrl, params.siteId)
        console.log(data)
        const newPosts = [...sitePosts.posts, data ] 
        setSitePosts({...sitePosts, posts: newPosts })
        window.my_modal_2.close()
    }

    async function submitComment(event) {
        event.preventDefault()
        // const data = await postComment(commText, parseInt(commND), parseInt(commPC), parseInt(params.postId) )
        console.log(data)
        const newComments = [...postComments.comments, data]
        setPostComments({...postComments, comments: newComments})
        window.my_modal_2.close()
    }

    const boardArray = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 1x", "Item 2x", "Item 3x", "Item 4x", "Item 5x"
    ]

    const [isModalOpen, setIsModalOpen] = useState(true)
    const isSignedIn = true;

    return( <>
        <dialog id="modalSelectBoard" className={`modal ${isModalOpen ? "modal-open" : null}`}>
            <div className="modal-box w-11/12 max-w-5xl"> 
                <div className="flex flex-col w-full lg:flex-row">

                    <div className="grid flex-grow "> 
                        <h3 className="font-bold text-xl mb-4 ">Select a Board</h3>
                        <div className="overflow-y-auto max-h-72">
                            <ul className="menu w-auto p-0  ">
                                <hr/>
                                {boardArray.length === 0 ?
                                    <div>There no boards yet. Please create a new board below.</div> 
                                    : 
                                    boardArray.map(item => 
                                        <div key={item}>
                                            <li><a className="text-xl" >{item}</a></li>
                                            <hr/>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                        <h3 className="font-bold mt-4 mb-2" >Or create a new board</h3>
                        <div className="flex">    
                            <input type="text" name="new board name" placeholder="new board name" className="input input-bordered w-full"/>
                            <button className="btn ml-3">Create</button>
                        </div>
                    </div> 
                    
                    { isSignedIn ? 
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
                        : null
                    }
                </div>

            </div>
        </dialog>
    </> )
}