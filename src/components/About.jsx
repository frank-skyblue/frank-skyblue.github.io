import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-sky-100 text-sky-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Frank, nice to meet you. Please take a look around</p>
          </div>
          <div>
            I am passionate about computer science, mathematics and building
            software that help improve the lives of those around me. I
            specialize in creating web applications and have various projects
            under my belt. My life's philosophy is to learn continuously,
            improving a little bit each and every day.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
