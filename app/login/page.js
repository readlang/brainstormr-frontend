"use client"
import Link from 'next/link';
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ContextStore } from "../../components/Context";
import { loginFetch } from '@/appLogic/userFetches';

export default function Page() {
    const contextObj = useContext(ContextStore)
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        loginFetch(username, password)
        .then(data => contextObj.setUser(data.user))
        .then(() => router.push('/')) 
    }

    return (
        <>
            <br/>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="text-left m-4">
                    <h1 className="text-5xl font-bold">Welcome back!</h1>
                    <h1 className="text-5xl font-bold">Please log in</h1>
                    <p className="py-6">Need to sign up? <Link href="/signup" className="underline">Create Account</Link> </p>
                </div>
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-4">
                    <form className="card-body" onSubmit={(event) => onSubmit(event)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Username" className="input input-bordered"
                            value={username} onChange={(e)=>setUsername(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                            value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log in</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
        
    );
}