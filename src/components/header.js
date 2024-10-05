"use client";

import React from "react";
import Link from "next/link";

const Header = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  return (
    <header
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } p-4 shadow-md flex flex-col inset-y-0 left-0 sticky top-0 z-10`}
    >
      <div className=" ml-6 flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="#project-highlights">
            <h1 className="text-2xl font-bold ">{language === "TH" ? "ผลงานของ shinon(ชื่อเล่นผมนี่แหละ)" : "Shinon's Portfolio"}</h1>
          </a>
          <button
            className={`${
              darkMode
                ? "bg-black text-white hover:bg-white hover:text-black"
                : "bg-white text-black hover:bg-black hover:text-white"
            } px-3 py-2 rounded-lg transition duration-750`}
          >
            <Link href="#about-me">{language === "TH" ? "เกี่ยวกับผม" : "About Me"}</Link>
          </button>
          <button
            className={`${
              darkMode
                ? "bg-black text-white hover:bg-white hover:text-black"
                : "bg-white text-black hover:bg-black hover:text-white"
            } px-3 py-2 rounded-lg transition duration-750`}
          >
            <Link href="#my-github">{language === "TH" ? "โปรเจค" : "Project"}</Link>
          </button>
        </div>

        {/*  */}

        <div className="flex justify-end space-x-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`${
              darkMode
                ? "bg-black text-white hover:bg-white hover:text-black"
                : "bg-white text-black hover:bg-black hover:text-white"
            } px-3 py-2 rounded-lg transition duration-750`}
          >
            {language === "EN" ? "ภาษาไทย" : "EN"}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`${
              darkMode
                ? "bg-black text-white hover:bg-white hover:text-black"
                : "bg-white text-black hover:bg-black hover:text-white"
            } px-3 py-2 rounded-lg transition duration-750`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
