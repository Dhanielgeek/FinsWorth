import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
const Login = () => {
    const [reveal,setReveal] = useState(false)
    const handleReveal = (e)=>{
        e.preventDefault();
        setReveal(!reveal)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("form submitted")
    }
  return (
    <form className="w-full px-4 h-screen flex justify-center items-center md:px-0" onSubmit={handleSubmit}>
      <div className="w-full md:w-96 h-[450px] shadow-xl rounded-lg flex flex-col gap-4 px-4 relative justify-center">
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><img src="./public/images/logo.png" alt="" style={{width:"100px", height:"100px"}} /></div>
        <p className="font-semibold text-sm md:text-xl text-[#023047]">Login</p>
        <div className="flex flex-col gap-4">
            <div>
                <label className="text-sm text-[#023047]">Email</label><br />
                <input type="text" placeholder="Email Address" name="name" className="w-full border border-[#023047]  rounded-md text-sm py-[8px] px-2 outline-none"/>
            </div>
            <div>
                <label className="text-sm text-[#023047]">Password</label><br />
                <input type={reveal ? 'text' : 'password'} placeholder="Enter password" name="password" className="w-full border border-[#023047]  rounded-md text-sm py-[8px] px-2 outline-none"/>
                <i class={`bx ${reveal ? 'bxs-show' : 'bxs-hide'} absolute right-10 top-[63%]`} onClick={handleReveal}></i>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <input type="checkbox"/>
                    <label className="text-xs md:text-sm text-[#023047] font-bold">Remember me</label>
                </div>
                <div>
                    <Link to="/forgetpass" className="text-xs md:text-sm text-[#023047] font-bold">Forgot password</Link>
                </div>
            </div>
        </div>
      <button type="submit" className="bg-[#023047] text-white text-sm py-2 rounded-sm">Login</button>
      <div className="flex items-center justify-center">
        <span className="text-sm flex gap-2">Dont have an account? 
        <Link to="/signup" className="text-[#fb8c10] cursor-pointer">Create Account</Link></span>
      </div>
      </div>
    </form>
  );
}
export default Login;
