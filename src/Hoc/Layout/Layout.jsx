import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Navigation/Sidebar/Sidebar";

export const ColorContext = createContext();

const Layout = () => {
  const [color, setColor] = useState(true);
  return (
    <ColorContext.Provider value={{ color, setColor }}>
    <div className={` grid grid-cols-12 transition-all delay-100 duration-700  ${color ? "bg-[#191d2b] text-white" : "bg-[#fff] text-black"}`}>
    <div className="lg:col-span-10 sm:col-span-12 min-h-screen w-11/12 mx-auto">
        <Outlet />
      </div>
      <div className="lg:shadow-xl h-screen fixed right-0 top-0 px-20">
        <Sidebar />
      </div>
    </div>
  </ColorContext.Provider>
  );
};

export default Layout;
