"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import {axios}from "axios"
export default function LoginPage() {
    const [user,setUser] = React.useState({
        email: "",
        pass: "",
    })
    const onLogin = async () => {

    }
    return(
     <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="bold text-3xl">Login</h1>
        <hr />
        <input 
        className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none
        focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email:e.target.value})}
        placeholder="username"
         />
         <input 
        className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none
        focus:border-gray-600"
        id="password"
        type="password"
        value={user.pass}
        onChange={(e) => setUser({...user, pass:e.target.value})}
        placeholder="password"
         />
         <button
         className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
         onClick={onLogin}
         >Login here</button>
         <Link href="/signup">Visit Signup</Link>
     </div>
    )
}