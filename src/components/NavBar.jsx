import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

 
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "experience" },
    { id: 6, link: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black text-white z-50 shadow-md">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-signature">Kaushik</h1>

      
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-gray-400 hover:text-white duration-200"
            >
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setNav(!nav)}
          className="md:hidden z-50 text-gray-300 focus:outline-none"
          aria-label={nav ? "Close menu" : "Open menu"}
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {nav && (
          <ul className="md:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col justify-center items-center text-2xl space-y-8">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  onClick={() => setNav(false)}
                  smooth
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="capitalize text-gray-300 hover:text-white"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
