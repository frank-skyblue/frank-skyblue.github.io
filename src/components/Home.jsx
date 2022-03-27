import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-sky-100">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-sky-700">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-sky-900">
          Frank Kong
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-sky-400">
          I'm a Software Developer
        </h2>
        <p className="text-sky-700 py-4 max-w-[700px]">
          I am a software developer on my last year of university at University
          of Toronto. Currently, I'm focused on building responsive full-stack
          web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-sky-900 group border-2 border-sky-400 px-6 py-3 my-2 flex items-center hover:bg-sky-700 hover:border-sky-700 hover:text-sky-50">
              View Projects
              <span className="group-hover:rotate-90 group-hover:translate-y-[-6px] group-hover:translate-x-1 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
