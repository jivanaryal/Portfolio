import React from "react";
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
  return (
    <div className="mx-auto w-11/12 pb-10">
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <h1 className="text-4xl md:text-6xl pb-10">
          Contact <span className="text-green-700">Me</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="left">
          <div className="text-2xl md:text-4xl">Contact Me Here</div>
          <div className="py-4 md:py-10">
            Thank you for visiting my portfolio! If you have any questions,
            inquiries, or opportunities you'd like to discuss, please feel free
            to get in touch with me using the form or contact details below.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pr-2 md:pr-10 text-base">
            <div className="pb-4">
              {obj.map((val, i) => {
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="logo">{val.images}</div>
                    <div className="name">{val.course}</div>
                  </div>
                );
              })}
            </div>
            <div className="pb-4">
              {data.map((val, i) => {
                return <div key={i}>{val.info}</div>;
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 md:mt-10 ml-4 md:ml-32">
            {logos.map((val, i) => {
              return (
                <Link to={val.path} key={i}>
                  <div
                    className={`border-2 rounded-full p-3  shadow-2xl border-transparent text-2xl `}
                  >
                    {val.logo}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 mx-auto text-black">
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              className="w-full md:w-1/2 mr-0 md:mr-2 p-2 border border-gray-300 mb-4 md:mb-0"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="w-full md:w-1/2 ml-0 md:ml-2 p-2 border border-gray-300"
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
            placeholder="Message Here...."
          ></textarea>
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
