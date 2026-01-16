import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skill" },
    { name: "Project", href: "#project" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-100/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-3xl font-bold text-white">
          Sakshi<span className="text-purple">Kharche</span>
          <span className="w-2.5 h-2.5 bg-purple rounded-full mt-3"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-white/80 hover:text-purple transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-6 py-2.5 border border-purple rounded-lg text-white hover:bg-purple hover:text-black transition"
          >
            <IoIosCloudDownload size={20} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-2xl text-white"
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-dark-300 flex flex-col items-center gap-6 py-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMenu(false)}
              className="text-white/80 text-lg hover:text-purple transition"
            >
              {link.name}
            </a>
          ))}

<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-2.5 border border-purple rounded-lg"
>
  <IoIosCloudDownload size={20} />
  Resume
</a>



        </div>
      )}
    </nav>
  );
};

export default Navbar;
