import React, { useContext } from "react";
import {
  AiFillLinkedin,
  AiFillMobile,
  AiOutlineGlobal,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebook, FaGithub, FaUserGraduate } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ColorContext } from "../Hoc/Layout/Layout";
const obj = [
  {
    course: "location",
    images: <HiLocationMarker />,
  },
  {
    course: "Email",
    images: <AiOutlineMail />,
  },
  {
    course: "Education",
    images: <FaUserGraduate />,
  },
  {
    course: "Mobile Number",
    images: <AiFillMobile />,
  },
  {
    course: "Languages",
    images: <AiOutlineGlobal />,
  },
];

const data = [
  {
    info: "Butwal,Rupandehi",
  },
  {
    info: "jeevanaryal7947@gmail.com",
  },
  {
    info: "9805288488",
  },
  {
    info: "Butwal Kalika Campus",
  },
  {
    info: "Nepali,English,Hindi,Japanese",
  },
];

const logos = [
  {
    logo: <FaFacebook />,
    path: "https://www.facebook.com/aryal.jeevan.90/",
  },
  {
    logo: <AiOutlineTwitter />,
    path: "https://twitter.com/jivan_aryal16",
  },
  {
    logo: <FaGithub />,
    path: "https://github.com/jivanaryal",
  },
  {
    logo: <AiFillLinkedin />,
    path: "https://www.linkedin.com/in/jivan-aryal/",
  },
];
const Contact = () => {
  const { color } = useContext(ColorContext);
  return (
    <div className="mx-auto w-11/12 pb-10">
      <div className="flex justify-center gap-2 mt-20 text-6xl mb-10">
        <div className="">Contact</div>
        <div className="text-green-700">Me</div>
      </div>

      <div className="grid grid-cols-2">
        <div className="left">
          <div className="text-2xl">Contact Me Here</div>
          <div className="py-10">
            Thank you for visiting my portfolio! If you have any questions,
            inquiries, or opportunities you'd like to discuss, please feel free
            to get in touch with me using the form or contact details below.
          </div>
          <div className="grid grid-cols-2 pr-10 text-base ">
            <div className="">
              {obj.map((val, i) => {
                return (
                  <div key={i}>
                    <div className="flex items-center pb-3 gap-3 ">
                      <div className="logo">{val.images}</div>
                      <div className="name">{val.course}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="">
              {data.map((val, i) => {
                return (
                  <div key={i} className="pb-3">
                    {val.info}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-3 ml-32">
            {logos.map((val, i) => {
              return (
                <Link to={val.path}>
                  {" "}
                  <div className={`border-2  mt-10   rounded-full p-3 bg-  shadow-2xl border-transparent text-2xl ${color===true ? "bg-[#171a24]":"bg-white"}`}>
                    {val.logo}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 mx-auto text-black">
          <div className="flex">
            <input
              type="text"
              className="w-1/2 mr-2  p-2 border border-gray-300"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="w-1/2 ml-2 p-2 border border-gray-300"
              placeholder="Enter Email"
            />
          </div>
          <input
            type="text"
            className="w-full mt-4 p-2 border border-gray-300"
            placeholder="Enter Subject"
          />
          <textarea
            className="w-full mt-4 h-32 p-2 border border-gray-300"
            placeholder="Message Here...."></textarea>
          <a href="contact">
            <button className="text-lg font-semibold bg-green-600 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              Send
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
