import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="w-full lg:w-[calc(100%-12.5rem)] h-full relative bg-green-500">
        <Navbar />
        <div className="w-full min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
            <div>fghjkm</div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
