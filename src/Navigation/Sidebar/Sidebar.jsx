import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
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
  const { color, setColor } = useContext(ColorContext);
  const location = useLocation();
  return (
    <div className="hidden lg:block">
    <div className="h-[60vh] flex justify-between flex-col lg:block ">
      <button
        onClick={() => {
          console.log(color);
          setColor(!color);
        }}
        className={`border-2 rounded-full mt-6 p-2 ${
          color === true && "bg-[#454e56]"
        } border-transparent transition-all delay-100 duration-700`}>
        <VscColorMode className="text-3xl " />
      </button>
      <div className="flex flex-col w-full justify-center items-center gap-5">
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
  );
};

export default Sidebar;
