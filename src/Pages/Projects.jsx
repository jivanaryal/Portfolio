import React from "react";
import colorib from "../Assets/colorib.png";
import hubitclone from "../Assets/hubitclone.png";
import emp from "../Assets/emp.png";
import { Link } from "react-router-dom";

const data = [
  {
    img: colorib,
    title:
      " Colorib is an exceptional blog that I am currently cloning for practice purposes. It offers a captivating exploration of colors, delving into the psychology of color choices, uncovering the latest design and fashion trends, and providing valuable tips. With its engaging articles and stunning visuals, Colorib invites readers on a vibrant journey that celebrates the remarkable power and beauty of hues.",
    author: "colorib",
    job: "https://github.com/jivanaryal",
  },
  {
    img: hubitclone,
    title:
      "Hubit is an inspiring blog that I am currently cloning for practice purposes. It serves as a hub of knowledge and motivation, offering insightful articles on personal growth, productivity, and well-being. With its practical tips, thought-provoking ideas, and uplifting content, Hubit empowers readers to unleash their full potential and cultivate a fulfilling life",
    author: "hubit",
    job: "https://github.com/jivanaryal",
  },
  {
    img: emp,
    title:
      " The Employee Management System is a comprehensive software solution designed to streamline and simplify the process of managing employees within an organization. It encompasses various modules and functionalities such as employee information management, attendance tracking, leave management, performance evaluation, payroll processing, and more. The system enables efficient data organization, ensures accurate record-keeping, and facilitates effective communication and collaboration between HR departments and employees. With its user-friendly interface and automation capabilities, the Employee Management System enhances productivity, optimizes resource allocation, and improves overall workforce management within the organization.",
    author: "emp mgmt system",
    job: "https://github.com/jivanaryal",
  },
];

const Projects = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <h1 className="text-4xl md:text-6xl">
          My <span className="text-green-700">Projects</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 pt-10">
        {data.map((val, i) => {
          return (
            <div
              key={i}
              className="hover:scale-110  duration-700 delay-75 transition-all w-full lg:w-[20rem] md:[18rem] shadow-2xl pt-2 border-2"
            >
              <div>
                <img
                  src={val.img}
                  alt=""
                  className="w-full lg:w-[20rem] md:[16rem] rounded-t-lg p-2 h-64"
                />
              </div>
              <div className="pl-2 pr-2 w-full">
                <div className="border-b-2 py-4 text-md line-clamp-5 h-36">
                  {val.title}
                </div>
                <div className="flex justify-between p-4">
                  <div className="capitalize text-lg">{val.author}</div>
                  <Link to={val.job}>
                    <div className="text-mainColor underline text-xl">
                      View Project
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link to="https://github.com/jivanaryal">
        <div className="flex justify-center gap-2 mt-20 text-4xl md:text-6xl underline ">
          <div className="">More</div>
          <div className="text-green-700">Projects</div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
