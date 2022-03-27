import React from "react";
import Pawsup from "../assets/pawsup.png";
import Instachat from "../assets/instachat.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen text-sky-900 bg-sky-100">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-sky-900 border-sky-400">
            Projects
          </p>
          <p className="py-4">// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <div
            style={{
              backgroundImage: `url(${Pawsup})`,
            }}
            className="shadow-lg shadow-sky-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-sky-50 tracking-wider">
                Startup Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://cscc01-pawsup.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-200 text-sky-900 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/UTSCCSCC01/projectf21-night-owl-developers"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-200 text-sky-900 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid item */}
          <div
            style={{
              backgroundImage: `url(${Instachat})`,
            }}
            className="shadow-lg shadow-sky-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-sky-50 tracking-wider">
                Meet & Draw Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://instachatapp.me" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-200 text-sky-900 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/UTSCC09/project-sans-serif"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-200 text-sky-900 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
