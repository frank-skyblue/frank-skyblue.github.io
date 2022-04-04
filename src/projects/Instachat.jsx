import React from "react";
import InstachatImg from "../assets/instachat.png";

const Instachat = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${InstachatImg})`,
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
      <div className="p-3">
        This project utilized the MERNG stack and was deployed on a Digital
        Ocean VM. I was responsible for implementing the intricate drawing
        features and a lot of the UI elements including the homepage, sign-up
        and sign-in pages.
      </div>
    </div>
  );
};

export default Instachat;
