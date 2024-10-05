"use client";

import Image from "next/image";
import Header from "@/components/header";
import Skills from "@/components/skills";
import { useState, useEffect } from "react";
import Codeblock from "@/components/codeblock";
import Time from "@/components/time";
import Github from "@/components/github";
import Profile from "@/components/profile";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "TH" : "EN"));
  };

  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <div className=" flex flex-col">
        {/* Project Highlights */}
        <div className="p-6">
          <main>
            <section className="mb-4 mx-12">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-6 ">
                  Project Highlight
                </h2>
                <h5>Tester will be delay of about 2-10 seconds</h5>
              </div>
              <div className="grid grid-cols-2 gap-4 mx-12">
                <div className="border h-[60vh] flex items-center justify-center">
                  <iframe
                    src="http://localhost:3001/Chat/qwertyuiop1"
                    title="Project Preview 1"
                    className="w-full h-full rounded-lg overscroll-auto"
                  />
                </div>
                <div className="border h-[60vh] flex items-center justify-center">
                  <iframe
                    src="http://localhost:3001/Chat/qwertyuiop2"
                    title="Project Preview 1"
                    className="w-full h-full rounded-lg overscroll-auto"
                  />
                </div>
                <div className="border h-[60vh] flex items-center justify-center">
                  <iframe
                    src="http://localhost:3001/Chat/qwertyuiop3"
                    title="Project Preview 1"
                    className="w-full h-full rounded-lg overscroll-auto"
                  />
                </div>
                <div className="h-[60vh] flex items-center justify-center">
                  <Codeblock />
                </div>
              </div>
              <div className="border p-4 mt-4 mx-12">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p>
                  This is a preview of the messaging web app I built, not the
                  real thing. For this project, we’re building a messaging web
                  application, kind of like a facebook messages. The hardest
                  part for me was working with the database, but since I’m not
                  familiar with SQL, I used Prisma ORM to handle the
                  communication with the database. I also wrote an API to check
                  various states. It's one of the projects I’m most proud of,
                  though it’s not quite finished yet because I haven’t added the
                  feature to send pictures! Haha.
                </p>
              </div>
            </section>
          </main>
        </div>

        {/* About Me */}
        <section className="mb-4 mx-12">
          <Profile></Profile>
        </section>

        {/* Skills */}
        <section className="mb-4 mx-12 mt-12">
          <h2 className="text-2xl font-semibold mb-6 ">Skills</h2>
          <div className="flex justify-between">
            <Skills />
          </div>
        </section>

        {/* Available Time to Work */}
        <section className="mb-4 mx-12 mt-12">
          <Time />
        </section>

        {/* My GitHub */}
        <section className="mb-4 mx-12 mt-12">
          <Github></Github>
        </section>
      </div>
    </div>
  );
}
