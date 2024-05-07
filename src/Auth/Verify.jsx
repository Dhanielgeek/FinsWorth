import React from "react";
const Verify = ()=>{
    return(
        <div className="w-full px-4 h-screen flex flex-col justify-center items-center md:px-0">
            <div className="w-full md:w-96 h-[380px] shadow-xl rounded-lg flex flex-col items-center gap-14 px-4 py-6">
                <div className="flex flex-col items-center gap-2">
                    <p className="font-semibold text-sm md:text-xl text-[#023047]">Sign Up</p>
                    <p className="text-sm text-bold">Verify your account</p>
                    <p className="text-sm text-center">We have sent a one time OTP password to ..............@gmail.com</p>
                </div>
                <div>
                <div className="flex flex-col items-center gap-4">
                <div>2:32</div>
                <div className="flex gap-2 items-center justify-center">
                    <p className="w-10 h-10 border-2 border-[#023047] flex items-center justify-center rounded-sm">5</p>
                    <p className="w-10 h-10 border-2 border-[#023047] flex items-center justify-center rounded-sm">5</p>
                    <p className="w-10 h-10 border-2 border-[#023047] flex items-center justify-center rounded-sm">5</p>
                    <p className="w-10 h-10 border-2 border-[#023047] flex items-center justify-center rounded-sm">5</p>
                </div>
                <div className="flex gap-1 text-sm">didnt receive an OTP? <p className="text-[#fb8c10]">RESEND</p></div>
                <button className="w-full bg-[#023047] text-white text-sm py-2 rounded-sm">Verify</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Verify