import React from "react";
import jivan from "../Assets/jivan.jpg";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-2 h-screen place-content-center">
  <div className="justify-center items-center flex">
    <img
      src={jivan}
      alt=""
      className="h-96 w-full md:w-[25vw] rounded-lg shadow-xl"
    />
  </div>
  <div className="text-xl">
    <div className="text-center">
      <h1 className="text-green-700 mb-4 text-4xl md:text-6xl font-bold">
        Jivan Aryal
      </h1>
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
        Web Developer
      </h1>
      <p className="mt-8 text-lg">
        Welcome to my portfolio! I'm Jivan Aryal, a passionate web developer
        who enjoys building interactive and user-friendly websites. With a keen
        eye for design and a love for problem-solving, I strive to create
        memorable online experiences through my work.
      </p>
      <p className="mt-4 text-lg">
        This portfolio showcases some of the projects I have worked on,
        demonstrating my skills and creativity. Feel free to explore and get in
        touch with me if you have any inquiries or collaboration opportunities.
        Let's bring your ideas to life!
      </p>
      <div className="mt-8">
        <a
          href="https://www.facebook.com/aryal.jeevan.90/"
          className="text-lg font-semibold bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
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
