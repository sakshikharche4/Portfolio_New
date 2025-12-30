import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop:backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a className="text-3xl font-bold text-white" href="">
            Sakshi
            <span className="text-purple">Kharche</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#home"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 bg-purple-500 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#about"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 bg-purple-500 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#skill"
          >
            <span>Skill</span>
            <span className="absolute left-0 -bottom-1 w-0 bg-purple-500 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#project"
          >
            <span>Project</span>
            <span className="absolute left-0 -bottom-1 w-0 bg-purple-500 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#expreriance"
          >
            <span>Expreriance</span>
            <span className="absolute left-0 -bottom-1 w-0 bg-purple-500 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#contact"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 bg-purple-500 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="md:hidden">
          {showMenu ? (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* mobile menus */}
      {showMenu && (
        <div className="md:hidden mt-4 p-4 bg-dark-300 h-screen rounded-lg flex flex-col space-y-4 text-center justify-center">
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="home"
          >
            <span>Home</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="about"
          >
            <span>About</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#Skill"
          >
            <span>Skill</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#Project"
          >
            <span>Project</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#Expreriance"
          >
            <span>Expreriance</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="relative group  text-white/80 transition duration-300 hover:text-purple"
            href="#Contact"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
