import React from "react";

const ForgetPassword = () => {
  return (
    <section>
      <form className="w-full px-4 h-screen flex justify-center items-center md:px-0">
        <div className="w-full md:w-96 h-[300px] shadow-xl rounded-lg flex flex-col gap-4 px-4 justify-center">
          <div className="text-lg text-[#023047] font-semibold flex justify-center">Forgotten Password?</div>
          <p className="text-xs md:text-sm">Please enter your email address. You will receive a link to create a new password.</p>
          <div>
              <label className="text-sm text-[#023047]">Email</label><br />
              <input type="email" placeholder="Email Address" name="name" className="w-full border border-[#023047] rounded-md text-sm py-[8px] px-2 outline-none"/>
          </div>
          <button type="submit" className="w-full bg-[#023047] text-white text-sm py-2 rounded-sm">Send Reset Link</button>
        </div>
      </form>
    </section>
  );
};

export default ForgetPassword;
