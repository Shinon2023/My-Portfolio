'use client';

import Header from "@/components/header";
import Skills from "@/components/skills";
import { useState, useEffect } from 'react';
import Codeblock from "@/components/codeblock";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'EN' ? 'TH' : 'EN'));
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <div className="container mx-auto px-4">
        {/* Project Highlights */}
        <div className="p-6">
          <main>
            <section className="mb-4">
              <div className="flex justify-between"><h2 className="text-4xl font-semibold mb-6 ">Project Highlight</h2>
                <h5>Tester will be delay of about 10 seconds</h5></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border h-[60vh] flex items-center justify-center"><iframe
                  //src="https://chat-app-six-pink.vercel.app/Chat/qwertyuiop1"
                  src="http://localhost:3001/Chat/qwertyuiop1"
                  title="Project Preview 1"
                  className="w-full h-full rounded-lg overscroll-auto"
                /></div>
                <div className="border h-[60vh] flex items-center justify-center"><iframe
                  //src="https://chat-app-six-pink.vercel.app/Chat/qwertyuiop2"
                  src="http://localhost:3001/Chat/qwertyuiop2"
                  title="Project Preview 1"
                  className="w-full h-full rounded-lg overscroll-auto"
                /></div>
                <div className="border h-[60vh] flex items-center justify-center"><iframe
                  //src="https://chat-app-six-pink.vercel.app/Chat/qwertyuiop3"
                  src="http://localhost:3001/Chat/qwertyuiop3"
                  title="Project Preview 1"
                  className="w-full h-full rounded-lg overscroll-auto"
                /></div>
                <div className="h-[60vh] flex items-center justify-center">
                  <Codeblock />
                </div>
              </div>
              <div className="border p-4 mt-4">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">Write your description here...</p>
              </div>
            </section>
          </main>
        </div>

        {/* About Me */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-lg">Hi, I'm a developer with experience in web and mobile applications...</p>
        </section>

        {/* Skills */}
        <section className="py-8">
          <Skills />
        </section>

        {/* Available Time to Work */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold">Available Time to Work</h2>
          <table className="table-auto w-full text-center border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Day</th>
                <th className="border px-4 py-2">Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Monday</td>
                <td className="border px-4 py-2">9 AM - 5 PM</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Tuesday</td>
                <td className="border px-4 py-2">9 AM - 5 PM</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>

        {/* My GitHub */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold">My GitHub</h2>
          <ul>
            <li><a href="https://github.com/project1" className="text-blue-500">Project 1</a></li>
            {/* Add more projects as needed */}
          </ul>
        </section>

        {/* Vercel Projects */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold">Vercel Projects</h2>
          <ul>
            <li><a href="https://vercel.com/project1" className="text-blue-500">Vercel Project 1</a></li>
            {/* Add more projects as needed */}
          </ul>
        </section>
      </div>
    </div>
  );
}
