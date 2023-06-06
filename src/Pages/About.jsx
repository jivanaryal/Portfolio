import React from "react";

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
    project: "5",
    title: "Happy Clients",
  },
  {
    project: "0",
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
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-center gap-2 mt-20 text-6xl">
        <div className="">About</div>
        <div className="text-green-700">Me</div>
      </div>

      <div className="grid grid-cols-2 gap-9 mt-10">
        <div className="flex flex-col gap-3">
          <div className="text-3xl capitalize">Information About Me</div>
          <div className="describtion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            itaque aut magni deserunt illo saepe numquam blanditiis corrupti eum
            beatae, totam libero inventore non iusto atque laudantium voluptatum
            expedita quaerat perspiciatis vel architecto illum unde vero?
            Veritatis quasi labore optio nostrum esse voluptatibus libero?
          </div>
        </div>
        <div className="right">
          <div className="grid grid-cols-2 place-items-center gap-y-8">
            {data.map((val, i) => {
              return (
                <div
                  key={i}
                  className="border-[1px] hover:scale-105 duration-700 delay-75 transition-all border-white h-36 flex flex-col items-center justify-center w-56">
                  <div className="text-green-500 text-3xl font-bold hover:scale-110 duration-700 delay-75 transition-all ">
                    {val.project}
                  </div>
                  <div className="text-lg">{val.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="mx-auto bg-red-500 my-14" style={{ width: "50%" }} />
      <div className="skills pb-20">
        <div className="heading text-center text-2xl mb-10">My Skills </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 ">
          {obj.map((val, i) => {
            return (
              <div key={i}>
                <div>{val.course}</div>
                <div>{val.title}</div>
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="h-2 bg-blue-500"
                    style={{ width: `${val.title}` }}></div>
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
