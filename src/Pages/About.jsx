import React, { useContext } from "react";
import { ColorContext } from "../Hoc/Layout/Layout";

const data = [
  {
    project: "20+",
    title: "Projects Completed",
  },
  {
    project: "1+",
    title: "Years of Experience",
  },
  {
    project: "null",
    title: "Happy Clients",
  },
  {
    project: "null",
    title: "Customers Review",
  },
];

const obj = [
  {
    course: "HTML",
    title: "90%",
  },
  {
    course: "CSS",
    title: "60%",
  },
  {
    course: "JavaScript",
    title: "50%",
  },
  {
    course: "React",
    title: "60%",
  },
  {
    course: "MySql",
    title: "50%",
  },
  {
    course: "Node & Express JS",
    title: "40%",
  },
  {
    course: "MongoDB",
    title: "80%",
  },
];

const About = () => {
  const { color } = useContext(ColorContext);
  return (
    <div className="w-10/12 mx-auto min-h-screen ">
      <div className="flex pb-10 justify-center gap-2 mt-20 md:mt-20 text-4xl md:text-6xl">
        <div className="">About</div>
        <div className="text-green-700">Me</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-4">
        <div className="flex flex-col gap-3">
          <div className="text-2xl md:text-3xl capitalize">
            Information About Me
          </div>
          <div className="md:text-lg text-base text-start">
            I'm Jivan Aryal, a passionate web developer who enjoys building
            interactive and user-friendly websites. With a keen eye for design
            and a love for problem-solving, I strive to create memorable online
            experiences through my work.
          </div>
        </div>
        <div className="right">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-4 gap-x-4">
            {data.map((val, i) => {
              return (
                <div
                  key={i}
                  className={`border-[1px] hover:scale-105 duration-700 delay-75 gap-2 transition-all ${
                    color === true ? "border-white" : "border-gray-700"
                  } h-36 flex flex-col items-center justify-center  w-52 lg:w-56`}
                >
                  <div className="text-green-500 text-2xl md:text-3xl font-bold hover:scale-110 duration-700 delay-75 transition-all ">
                    {val.project}
                  </div>
                  <div className="lg:text-lg sm:text-sm">{val.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="mx-auto bg-red-500 my-14" style={{ width: "50%" }} />
      <div className="skills pb-20">
        <div className="heading text-center text-lg md:text-2xl mb-10">
          My Skills{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 ">
          {obj.map((val, i) => {
            return (
              <div key={i}>
                <div>{val.course}</div>
                <div>{val.title}</div>
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="h-2 bg-blue-500"
                    style={{ width: `${val.title}` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
