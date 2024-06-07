import React from "react";
import jivan from "../Assets/jivan.jpg";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2    place-content-center  min-h-screen">
        <div className="justify-center items-center flex mt-14">
          <img
            src={jivan}
            alt=""
            className="h-full  lg:px-0 lg:w-[30vw] md:w-[25vw] w-full rounded-lg shadow-xl blur"
          />
        </div>
        <div className="text-xl">
          <div className="text-center">
            <h1 className="text-green-700 mb-4 text-4xl md:text-6xl mt-6 font-bold">
              Jivan Aryal
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
              Web Developer
            </h1>
            <p className="mt-8 md:text-lg text-sm">
              Welcome to my portfolio! I'm Jivan Aryal, a passionate web
              developer who enjoys building interactive and user-friendly
              websites. With a keen eye for design and a love for
              problem-solving, I strive to create memorable online experiences
              through my work.
            </p>
            <p className="mt-4 md:text-lg text-sm">
              This portfolio showcases some of the projects I have worked on,
              demonstrating my skills and creativity. Feel free to explore and
              get in touch with me if you have any inquiries or collaboration
              opportunities. Let's bring your ideas to life!
            </p>
            <div className="mt-8">
              <a
                href="https://www.facebook.com/aryal.jeevan.90/"
                className="text-base font-semibold bg-green-600 text-white py-3 md:text-lg px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
