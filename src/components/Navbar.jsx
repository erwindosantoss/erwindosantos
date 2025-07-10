import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0a192f] text-white font-grotesk fixed w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-sky-300 tracking-wider">
          Erwindosantos_
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm tracking-widest">
          <li>
            <a href="#home" className="hover:text-sky-300 transition duration-200">
              <span className="text-sky-300">01</span> // Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-300 transition duration-200">
              <span className="text-sky-300">02</span> // About
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-sky-300 transition duration-200">
              <span className="text-sky-300">03</span> // Projects
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-[#0a192f] text-sm tracking-widest pb-6">
          <li>
            <a href="#home" onClick={toggleMenu} className="hover:text-sky-300 transition duration-200">
              <span className="text-sky-300">01</span> // Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:text-sky-300 transition duration-200">
              <span className="text-sky-300">02</span> // About
            </a>
          </li>
          <li>
            <a href="#project" onClick={toggleMenu} className="hover:text-sky-300 transition duration-200">
              <span className="text-sky-300">03</span> // Projects
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
