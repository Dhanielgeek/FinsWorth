import React from "react";
import {useState} from "react"
import axios from "axios"

const ForgetPassword = () => {
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const handleForgotPass =async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.get("https://finsworthpro.onrender.com/api/forgotPassword",{
        params :{
          email:email
        }
      });
      setMessage(response.data.message)
    }
    catch(error){
      console.error("Error:", error);
    }
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }
  return (
    <section>
      <form onSubmit={handleForgotPass} className="w-full px-4 h-screen flex justify-center items-center md:px-0">
        <div className="w-full md:w-96 h-[300px] shadow-xl rounded-lg flex flex-col gap-4 px-4 justify-center">
          <div className="text-lg text-[#023047] font-semibold flex justify-center">Forgotten Password?</div>
          <p className="text-xs md:text-sm">Please enter your email address. You will receive a link to create a new password.</p>
          <div>
              <label className="text-sm text-[#023047]">Email</label><br />
              <input type="email" placeholder="Email Address" name="name" value={email} onChange={handleEmailChange} className="w-full border border-[#023047] rounded-md text-sm py-[8px] px-2 outline-none"/>
          </div>
          <button type="submit" className="w-full bg-[#023047] text-white text-sm py-2 rounded-sm">Send Reset Link</button>
          {message && <p>{message}</p>}
        </div>
        
      </form>
    </section>
  );
};

export default ForgetPassword;
