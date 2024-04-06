import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
function Login() {
    const [reveal,setReveal] = useState(false)
    const handleReveal = (e)=>{
        e.preventDefault();
        setReveal(!reveal)
    }
  return (
    <form className="w-full h-screen flex justify-center items-center">
      <div className="w-96 h-[400px] shadow-xl rounded-lg flex flex-col gap-4 px-4 relative justify-center">
        <p className="flex justify-center">Login</p>
        <div className="flex flex-col gap-4">
            <div>
                <label className="text-sm">Name</label><br />
                <input type="text" placeholder="Enter name" name="name" className="w-full border-2 border-b-4 rounded-sm text-sm py-1 px-2 outline-none"/>
            </div>
            <div>
                <label className="text-sm">Password</label><br />
                <input type={reveal ? 'text' : 'password'} placeholder="Enter password" name="password" className="w-full border-2 border-b-4 rounded-sm text-sm py-1 px-2 outline-none"/>
                <i class={`bx ${reveal ? 'bxs-show' : 'bxs-hide'} absolute right-8 top-[195px]`} onClick={handleReveal}></i>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <input type="checkbox"/>
                    <label className="text-sm">Remember me</label>
                </div>
                <div>
                    <button className="text-sm">Forgot password</button>
                </div>
            </div>
        </div>
      <button type="submit" className="bg-[#023047] text-white text-sm py-2 rounded-sm">Login</button>
      <div className="flex items-center justify-center">
        <span className="text-sm">Dont have an account? 
        <Link to="signup" className="text-[#fb8c10] cursor-pointer">Create Account</Link></span>
      </div>
      </div>
    </form>
  );
}
export default Login;
