import React, { useContext, useEffect } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
import { RiProjectorFill } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";
import { IoMdContacts } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { ColorContext } from "../../Hoc/Layout/Layout";

const data = [
  {
    images: <AiFillHome />,
    path: "/",
  },
  {
    images: <BsFillPeopleFill />,
    path: "/about",
  },
  {
    images: <FiCreditCard />,
    path: "/portfolio",
  },
  {
    images: <RiProjectorFill />,
    path: "/projects",
  },

  {
    images: <IoMdContacts />,
    path: "/contact",
  },
];

const Sidebar = () => {
  const { color, setColor,show,setShow } = useContext(ColorContext);
  const location = useLocation();


  
  return (
    <div className="relative">
      <div><AiOutlineMenu className={`lg:hidden block text-3xl absolute top-2 right-[-4rem] `}  onClick={()=>{
      console.log(show)
      setShow(!show);
    }}/></div>
     <button
        onClick={() => {
          console.log(color);
          setColor(!color);
        }}
        className={`border-2  fixed  top-2  left-2   rounded-full  p-2  ${
          color === true && "bg-[#454e56]"
        } border-transparent transition-all delay-100 duration-700`}>
        <VscColorMode className="text-2xl " />
      </button>
    <div className={`  ${show===true?'block':'hidden'}`}>
    <div className="h-[70vh] flex justify-center  flex-col  ">
     
      <div className="flex md:flex-col md:flex w-full justify-center items-center gap-5 fixed top-2 left-0 md:static md:left-auto md:right-auto">
        {data.map((value, i) => {
          return (
            <div
              key={i}
              className={`text-xl border-2 rounded-full p-2 text-gray-500 ${
                location.pathname === value.path &&
                "bg-green-600 text-[#ffffff]"
              }`}>
              <Link to={value.path}>
                {" "}
                <div>{value.images}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Sidebar;
