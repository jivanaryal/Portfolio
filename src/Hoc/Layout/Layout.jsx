import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Navigation/Sidebar/Sidebar";

export const ColorContext = createContext();

const Layout = () => {
  const [color, setColor] = useState(true);
  const [show, setShow] = useState(true);
  // const [mdshow,setMdShow] = useState(false)

  const handleClick = () => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth <= 1024) {
      setShow(false);
    }
  };
  return (
    <ColorContext.Provider value={{ color, setColor, show, setShow }}>
      <div
        className={` grid grid-cols-12 transition-all delay-100 duration-700  ${
          color ? "bg-[#191d2b] text-white" : "bg-[#fff] text-black"
        }`}
      >
        <div
          className=" mt-10 col-span-12 min-h-screen w-10/12 mx-auto"
          onClick={() => handleClick()}
        >
          <Outlet />
        </div>
        <div
          className={`col-span-2 h-screen fixed right-0 top-0 px-10 ${
            show === false ? "shadow-none" : "shadow-xl"
          }`}
        >
          <Sidebar />
        </div>
      </div>
    </ColorContext.Provider>
  );
};

export default Layout;
