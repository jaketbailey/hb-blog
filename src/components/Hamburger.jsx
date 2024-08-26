import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("hello");

    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-5 m-2">
      <button onClick={toggleMenu}>
        <span className="sr-only">Open main menu</span>
        <svg
          className={`h-6 w-6 ${isOpen ? "hidden" : "block"} pb-0.5`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className={`absolute right-0 mt-2 w-48 bg-[#A6FAFF] border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]  ring-1 ring-black ring-opacity-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="/"
          className="block px-4 py-2 text-sm text-black hover:bg-[#79F7FF] active:bg-[#53f2fc] hover:text-black hover:font-bold border-b-2 border-black"
        >
          Home
        </a>
        <a
          href="/projects"
          className="block px-4 py-2 text-sm text-black hover:bg-[#79F7FF] active:bg-[#53f2fc] hover:text-black hover:font-bold border-b-2 border-black"
        >
          Projects
        </a>
        <a
          href="/blog"
          className="block px-4 py-2 text-sm text-black hover:bg-[#79F7FF] active:bg-[#53f2fc] hover:text-black hover:font-bold border-b-2 border-black"
        >
          Blog
        </a>
        <a
          href="/about"
          className="block px-4 py-2 text-sm text-black hover:bg-[#79F7FF] active:bg-[#53f2fc] hover:text-black hover:font-bold"
        >
          About
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
