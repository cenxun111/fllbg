import React from 'react'
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom"
import { Context } from '../context/Context';
const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const {  dispatch, isFetching} = useContext(Context)
    const handleSubmit =async(e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login",{
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }catch(err){
            dispatch({ type:"LOGIN_FAILURE"});
        }
    };
    return (
        <div className="relative">
        <div  className="flex flex-col items-center justify-center h-96 mt-20 font-mono">
            <span className="text-blue-700 text-6xl">Login</span>
            <form className="flex flex-col justify-center mt-8" onSubmit={handleSubmit}>
                <label className="text-green-600 text-3xl justify-center flex mt-8">Username</label>
                <input className="w-80 bg-gray-800 rounded-md py-2 pl-2 mt-2"  type="text" placeholder="username..."
                ref={userRef}
                />
                <label className="text-green-600 text-3xl flex justify-center mt-6">Password</label>
                <input className="w-80 bg-gray-800 rounded-md py-2 pl-2 mt-2"  type="password" placeholder="password.."
                ref={passwordRef}
                />
                <button className="p-2 mt-8 bg-green-800 rounded-md w-28    disabled:opacity-50" type="submit" disabled={isFetching}>Login</button>
            </form>
          
            
        </div>
        <button className="  bg-green-800 rounded-md w-28 absolute top-1 right-2 p-2 text-xl text-blue-300"><Link to="/register">Register</Link></button>
        </div>
    )
}

export default Login
