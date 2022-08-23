import React from "react";
import Instachat from "../projects/Instachat";
import Pawsup from "../projects/Pawsup";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen text-sky-900 bg-sky-100">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-sky-900 border-sky-400">
            Personal Projects
          </p>
          <p className="py-4">// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid item */}
          <Pawsup />
          {/* Grid item */}
          <Instachat />
        </div>
      </div>
    </div>
  );
};

export default Work;
