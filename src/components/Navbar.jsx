import React from "react";
import { SiSky } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-sky-500 text-sky-50">
      <SiSky size={50} />
    </div>
  );
};

export default Navbar;
