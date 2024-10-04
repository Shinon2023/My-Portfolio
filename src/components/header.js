'use client';

import React from 'react';
import Link from 'next/link';

const Header = ({ darkMode, toggleDarkMode, language, toggleLanguage}) => {

    return (
        <header className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} p-4 shadow-md flex flex-col inset-y-0 left-0 sticky top-0`}>
            <div className="container ml-32 flex justify-between items-center">
                {/* Navigation Links */}
                <div className="flex space-x-4">
                    <h1 className="text-2xl font-bold ">Shinon's Portfolio</h1>
                    <button className={`${darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} px-3 py-2 rounded-lg transition duration-750`}>
                        <Link href="/about">About Me</Link>
                    </button>
                    <button className={`${darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} px-3 py-2 rounded-lg transition duration-750`}>
                        <Link href="/projects">Project</Link>
                    </button>
                    <button
                        onClick={() => window.open('https://github.com/shinon2023', '_blank')}
                        className={`${darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} px-3 py-2 rounded-lg transition duration-750`}
                    >
                        GitHub
                    </button>
                    <button
                        onClick={() => window.open('https://vercel.com/shinons-projects', '_blank')}
                        className={`${darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} px-3 py-2 rounded-lg transition duration-750`}
                    >
                        Vercel
                    </button>
                </div>

                {/*  */}

                <div className="flex justify-end space-x-4">
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className={`${darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} px-3 py-2 rounded-lg transition duration-750`}
                    >
                        {language === 'EN' ? 'ภาษาไทย' : 'EN'}
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`${darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} px-3 py-2 rounded-lg transition duration-750`}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
