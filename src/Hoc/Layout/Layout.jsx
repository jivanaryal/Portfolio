import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Sidebar from "../../Navigation/Sidebar/Sidebar";

export const ColorContext = createContext();

const Layout = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const [color, setColor] = useState(true);
  const [show, setShow] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  // const [mdshow,setMdShow] = useState(false)

  const handleClick = () => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth <= 1024) {
      setShow(false);
    }
  };
  useEffect(() => {
    if (initialLoad) {
      setShow(!isMediumScreen);
      setInitialLoad(false);
    }
  }, [initialLoad, isMediumScreen]);
  return (
    <ColorContext.Provider value={{ color, setColor, show, setShow }}>
      <div
        className={` grid grid-cols-12 transition-all delay-100 duration-700  ${
          color ? "bg-[#191d2b] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#040914]"
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
