"use client"
import Link from 'next/link';
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ContextStore } from "../../components/Context";
import { updatePassword } from '@/appLogic/userFetches';

export default function Page() {
    const contextObj = useContext(ContextStore)
    const router = useRouter()
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        updatePassword(oldPassword, newPassword)
        .then(data => contextObj.setUser(data.user))
        .then(() => router.push('/')) 
    }

    console.log(contextObj)

    return (
        <div className="card shadow-2xl bg-base-100 m-4 p-4">
            <br/>
            <div className="text-xl font-bold mb-4">Profile</div>
            <div >
                <div className='text-lg'> {contextObj.user && contextObj.user.username ? 
                    `Username: ${contextObj.user.username}` : 
                    <Link href="/login" className="underline">Please log in</Link> }
                </div>
                <div className='text-md'> {contextObj.user && contextObj.user.email ? `Email: ${contextObj.user.email}` : " " }</div>
                <hr className='mt-8 mb-8'/>
                <div className="text-md font-bold mb-3">Change Password</div>

                <form className="flex flex-col md:flex-row gap-3" onSubmit={(event) => onSubmit(event)}>
                    <input type="password" placeholder="Current Password" className="input input-bordered w-full " value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} />

                    <input type="password" placeholder="New Password" className="input input-bordered w-full " value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />

                    <button className="btn btn-warning ">Change Password</button>
                </form>
                <hr className='mt-8 mb-8'/>
                <div className="text-md font-bold mb-3">Log out of this device</div>
                <button className='btn btn-outline btn-error w-40' onClick={() => router.push('/logout')}>Log out</button>
            </div>
        </div>
    );
}