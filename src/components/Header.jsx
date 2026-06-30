import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">@the_diva_coder</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
            
          <li className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition duration-300">
            <a href="#about">About</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition duration-300">
            <a href="#experience">Experience</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition duration-300">
            <a href="#skills">Skills</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition duration-300">
            <a href="#projects">Projects</a>
          </li>

          <li className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            <li className="hover:text-cyan-400">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li className="hover:text-cyan-400">
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>

            <li className="hover:text-cyan-400">
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li className="hover:text-cyan-400">
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li className="hover:text-cyan-400">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
