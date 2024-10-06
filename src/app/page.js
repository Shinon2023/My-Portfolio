"use client";

import Image from "next/image";
import Header from "@/components/header";
import Skills from "@/components/skills";
import { useState, useEffect } from "react";
import Codeblock from "@/components/codeblock";
import Time from "@/components/time";
import Github_1 from "@/components/github";
import Profile from "@/components/profile";
import { Facebook, Instagram, Github, PhoneIncoming } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [iframeStyle, setIframeStyle] = useState({});

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 640px)").matches) {
                // สำหรับมือถือ
                setIframeStyle({
                    transform: "scale(0.4)",
                    transformOrigin: "0 0",
                    backfaceVisibility: "hidden",
                    border: "none",
                });
            } else {
                // สำหรับขนาดหน้าจออื่น
                setIframeStyle({
                    transform: "scale(1)", // หรือค่าที่ต้องการ
                    transformOrigin: "0 0",
                    backfaceVisibility: "hidden",
                    border: "none",
                });
            }
        };

        handleResize(); // เรียกใช้ครั้งแรกเพื่อกำหนดค่าเริ่มต้น
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
      <div className="flex flex-col">
        {/* Project Highlights */}
        <div className="p-6">
          <main>
            <section className="mb-4 lg:mx-12" id="project-highlights">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-6">
                  {language === "EN" ? (
                    <span>Project Highlight</span>
                  ) : (
                    <span> โปรเจคที่ผมภูมิใจ</span>
                  )}
                </h2>
                <h5>
                  {language === "EN" ? (
                    <span>Tester will be delay of about 2-10 seconds</span>
                  ) : (
                    <span>ตัว tester จะดีเลย์ประมาณ 2-10 วินาที</span>
                  )}
                </h5>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 mx-12 grid-cols-1">
                <div className="border lg:h-[60vh] flex items-center justify-center h-[20vh] overflow-hidden relative rounded-lg">
                  <iframe
                    src="https://chat-app-six-pink.vercel.app/Chat/qwertyuiop1"
                    title="Project Preview 2"
                    className="absolute top-0 left-0 w-[600px] h-[250%] rounded-lg bg-slate-800"
                    style={iframeStyle}
                  />
                </div>
                <div className="border lg:h-[60vh] flex items-center justify-center h-[20vh] overflow-hidden relative rounded-lg">
                  <iframe
                    src="https://chat-app-six-pink.vercel.app/Chat/qwertyuiop2"
                    title="Project Preview 2"
                    className="absolute top-0 left-0 w-[600px] h-[250%] rounded-lg bg-slate-800"
                    style={iframeStyle}
                  />
                </div>
                <div className="border lg:h-[60vh] flex items-center justify-center h-[20vh] overflow-hidden relative rounded-lg">
                  <iframe
                    src="https://chat-app-six-pink.vercel.app/Chat/qwertyuiop3"
                    title="Project Preview 2"
                    className="absolute top-0 left-0 w-[600px] h-[250%] rounded-lg bg-slate-800"
                    style={iframeStyle}
                  />
                </div>
                <div className="h-[20vh] flex items-center justify-center translate-x-0 lg:h-[60vh]">
                  <Codeblock />
                </div>
              </div>

              <div className="border p-4 mt-4 lg:mx-12">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p>
                  {language === "EN" ? (
                    <span>
                      This is a preview of the messaging web app I built, not
                      the real thing. For this project, we’re building a
                      messaging web application, kind of like a facebook
                      messages. The hardest part for me was working with the
                      database, but since I’m not familiar with SQL, I used
                      Prisma ORM to handle the communication with the database.
                      I also wrote an API to check various states. It's one of
                      the projects I’m most proud of, though it’s not quite
                      finished yet because I haven’t added the feature to send
                      pictures! Haha.
                    </span>
                  ) : (
                    <span>
                      {" "}
                      โดยโปรเจคนี้เราจะทำ web application ส่งข้อความคล้ายๆ
                      message โดยสำหรับผมแล้วส่วนที่ยากที่สุดก็คงเป็นการเขียน
                      Database แต่ด้วยเนื่องจากผมเขียน Sql ไม่เป็น เลยใช้ prisma
                      ORM เป็นตัวสื่อสารกับ database และทำการเขียน API
                      ในการตรวจเช็ค state ต่าง ถือเป็นโปรเจคที่ภูมิใจที่สุด
                      แต่ก็ยังไม่สุดเพราะยังไม่ได้ทำฟังก์ชั่นส่งรูปภาพได้แหละครับ
                      5555" แปลเนื้อหาด้านบนเป็นภาษาอังกฤษโดยไม่ต้องเป็นทางการ
                      เป็นธรรมชาติ เข้าใจง่ายๆ
                    </span>
                  )}
                </p>
              </div>
            </section>
          </main>
        </div>

        {/* About Me */}
        <section className="mb-4 mx-12" id="about-me">
          <Profile language={language}></Profile>
        </section>

        {/* Skills */}
        <section className="mb-4 mx-12 mt-12">
          <h2 className="text-2xl font-semibold mb-6 ">
            {language === "EN" ? <span>Skills</span> : <span>ทักษะ</span>}
          </h2>
          <div className="flex justify-between flex-wrap lg:flex-nowrap">
            <Skills />
          </div>
        </section>

        {/* Available Time to Work */}
        <section className="mb-4 lg:mx-12 mt-12">
          <Time language={language} />
        </section>

        {/* My GitHub */}
        <section className="mb-4 lg:mx-12 mt-12" id="my-github">
          <Github_1 language={language} />
        </section>
        <section className="lg:mx-12 my-12" id="my-github">
          <div className="mx-12 flex flex-col">
            <div className="flex flex-row border h-max">
              <div className="h-1/2 w-1/3 flex justify-start mx-6 mt-6 mb-6 flex-col">
                <div className="w-full h-max">
                  <p className="">
                    {language === "EN" ? (
                      <span>
                        Here is my GitHub where I built this portfolio. If you
                        want to see how I work, how much time I spend, or my
                        coding style, feel free to check it out on this GitHub.
                      </span>
                    ) : (
                      <span>
                        {" "}
                        นี่คือ github ของผมที่ทำ portfolio นี้
                        ถ้าคุณอยากรู้ว่าผมทำงานยังไง ใช้เวลาเท่าไหร่
                        เขียนโค้ดสไตล์ไหน สามารถดูที่ github นี้ได้เลย
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="w-2/3 border overflow-hidden">
                <h1 className="text-xl font-semibold mt-8 ml-6">
                  <li className="text-lg flex flex-row space-x-1">
                    <Github strokeWidth={1.5} />
                    <span>
                      <a href="https://github.com/Shinon2023/my-portfolio">
                        Shinon2023 / my-portfolio
                      </a>
                    </span>
                  </li>
                </h1>
                <div className="h-full rounded ml-16 mt-3 flex flex-col">
                  <ul className="flex flex-col flex-1 space-y-4"></ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
