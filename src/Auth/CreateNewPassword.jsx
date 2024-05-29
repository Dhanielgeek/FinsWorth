import React from "react";
import { useState } from "react";
const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setPassError] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[300px] h-52 shadow-lg flex flex-col gap-4 px-4">
        <h1 className="text-center">Create New Password</h1>
        <div>
          <label className="text-sm text-[#023047]">Password</label>
          <br />
          <div className="flex w-full border-[#121212] items-center">
            <input
              type={reveal ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              onChange={handlePassword}
              value={password}
              required
              className="w-full border border-[#023047]  rounded-md text-sm py-[8px] px-2 outline-none"
            />
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
        <button className="w-full bg-[#023047] text-white text-sm py-2 rounded-sm">Reset password</button>
      </div>
    </div>
  );
};
export default CreateNewPassword;
