import React from "react";
import CGI from "../assets/cgi.jpg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-sky-100 text-sky-900 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-sky-400 ">
            Where I've Worked
          </p>
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
                <p className="mt-3">
                  My primary responsibility was on the Java Test Automation
                  Project, for which the goal was to improve the efficiency of
                  the Quality Assurance Analysts. I handled aspects such as
                  documentation, development and dockerization of the project.
                </p>
                <p className="mt-3">
                  This was and still is a valuable experience for me, as it was
                  the first time I was exposed to the complex inner-workings of
                  a large cooperation where I had to juggle between projects and
                  handle client meetings.
                </p>
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
