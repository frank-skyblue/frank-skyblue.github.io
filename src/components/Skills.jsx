import React from "react";
import CGI from "../assets/cgi.jpg";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-sky-100 text-sky-900 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div className="pb-6">
            <p className="text-4xl font-bold inline border-b-4 border-sky-400 ">
              Where I've Worked
            </p>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <p className="mt-2">
                <b className="text-2xl">CGI</b> -{" "}
                <span className="text-sm">May 2022 - Dec 2022</span>
                <p>
                  During the summer of 2022, I had the opportunity to work with
                  many talented people at CGI Inc., an information technology
                  consulting company. I was assigned to the Bell team, where I
                  was responsible for improving key products under Bell Canada.
                </p>
                <p className="mt-3 mb-4">
                  My primary responsibility was on the Java Test Automation
                  Project, for which the goal was to improve the efficiency of
                  the Quality Assurance Analysts. I handled aspects such as
                  documentation, development and dockerization of the project.
                </p>
                <Link to="cgi">
                  <button className="text-sm text-sky-900 group border-2 border-sky-400 px-6 py-3 my-2 flex items-center hover:bg-sky-700 hover:border-sky-700 hover:text-sky-50">
                    More Details
                  </button>
                </Link>
              </p>
            </div>
            <div className="px-2 py-4">
              <img
                className="shadow-xl rounded"
                src={CGI}
                alt="profile picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
