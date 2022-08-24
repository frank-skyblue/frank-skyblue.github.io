import React from "react";
import ProfilePic from "../assets/profile.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-sky-100 text-sky-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-400">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="mt-2">
              I am passionate about <b>computer science</b>, mathematics and
              building software that help improve the lives of those around me.
              I specialize in creating web applications and have various
              projects under my belt. My life's philosophy is to learn
              continuously, improving a little bit each and every day.
            </p>
            <p className="mt-3">
              Some technologies I have worked with include:
              <div className="px-4 grid md:grid-cols-2">
                <ul className="list-disc">
                  <li className="px-1">Javascript (ES6+)</li>
                  <li className="px-1">HTML/CSS</li>
                </ul>
                <ul className="list-disc">
                  <li className="px-1">ReactJS</li>
                  <li className="px-1">TypeScript</li>
                </ul>
              </div>
            </p>
            <p className="mt-3">
              I am also familar with programming languages such as C/C#, Java
              and Python
            </p>
          </div>
          <div className="px-10 ">
            <img
              className="shadow-xl rounded"
              src={ProfilePic}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
