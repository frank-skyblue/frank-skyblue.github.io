import React from "react";

const ProjectTemplate = (MyImage, HoverName, Content) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${MyImage})`,
        }}
        className="shadow-lg shadow-sky-200 group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Hover effects */}
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-sky-50 tracking-wider">
            {HoverName}
          </span>
          <div className="pt-8 text-center">
            <a
              href="https://cscc01-pawsup.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-200 text-sky-900 font-bold text-lg">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/UTSCCSCC01/projectf21-night-owl-developers"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-200 text-sky-900 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="p-2">{Content}</div>
    </div>
  );
};

export default ProjectTemplate;
