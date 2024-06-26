import React from "react";
import pocketLogo from "../assets/imgs/pocket.png";
import pocket from "../assets/imgs/pockt.png";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="h-8 w-8 mr-2" src={pocketLogo} alt="Pocket Logo" />

          <span className="font-semibold text-xl tracking-tight text-slate-950">
            <img className=" w-20 mr-2" src={pocket} alt="pocket image" />
          </span>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="px-3 text-green-500 py-2 rounded-md font-16 font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black   px-3 py-2 rounded-md font-16 font-medium"
          >
            Flash
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
