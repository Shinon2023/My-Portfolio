import React from "react";
import Image from "next/image";
import Codeblock_1 from "@/components/codeblock_1";
import Codeblock_2 from "@/components/codeblock_2";
import Codeblock_3 from "@/components/codeblock_3";

import image1project1 from "@/../public/image/github/project-1/Screenshot 2024-10-05 161601.png";
import image2project1 from "@/../public/image/github/project-1/Screenshot 2024-10-05 161618.png";
import image3project1 from "@/../public/image/github/project-1/Screenshot 2024-10-05 161644.png";
import image4project1 from "@/../public/image/github/project-1/Screenshot 2024-10-05 161708.png";

import image1project3 from "@/../public/image/github/project-3/Screenshot 2024-10-05 194336.png";
import image2project3 from "@/../public/image/github/project-3/Screenshot 2024-10-05 194349.png";
import image3project3 from "@/../public/image/github/project-3/Screenshot 2024-10-05 194356.png";
import image4project3 from "@/../public/image/github/project-3/Screenshot 2024-10-05 194409.png";
import image6project3 from "@/../public/image/github/project-3/Screenshot 2024-10-05 194425.png";
import image7project3 from "@/../public/image/github/project-3/Screenshot 2024-10-05 194502.png";
import image8project3 from "@/../public/image/github/project-3/Screenshot 2024-10-05 194519.png";

export default function Github({ language }) {
  return (
    <>
      <h2 className="text-2xl font-semibold lg:mx-0 mx-6">My GitHub</h2>
      <ul className="lg:mx-12 mt-6">
        <li className="border-b border-gray-300 mb-12">
          <h2 className="text-xl font-semibold ml-12">
            {language === "EN" ? <span>Project 1</span> : <span>โปรเจค 1</span>}
          </h2>
          <div className="border p-4 mt-4 mx-12 mb-12">
            <div className="flex h-max lg:flex-row flex-col">
              <p
                className="w-full text-lg text-left text-balance"
                style={{ textIndent: "50px" }}
              >
                {language === "EN" ? (
                  <span>
                    For this project, we’re building a stock management web
                    application. The basic structure includes a dashboard where
                    authorized users can see who’s online. The chat page is for
                    communication, where people can discuss what items have been
                    requested and share information about stock withdrawals. The
                    stock page is for managing inventory, and there are other
                    functional tabs to make things more convenient. It took
                    around 7 days to develop, but the program isn’t fully
                    finished yet. Features like history, request, and calendar
                    haven’t been started, but everything else is done, including
                    login, account registration, authentication, and signing up
                    with a Google account.
                  </span>
                ) : (
                  <span>
                    โดยโปรเจคนี้เราจะทำ web application stock สินค้า
                    โครงสร้างคร่าวๆก็ จะให้มี dashboard
                    ให้คนที่มีสิทธิ์เข้าถึงดูได้ว่าใครออนไลน์อยู่
                    ในหน้าแชทก็เอาไว้สื่อสารกันว่าใครเบิกของอะไรบ้าง
                    ส่งข้อมูลของที่เบิกให้กันบ้าง ในหน้า stock
                    ก็เอาไว้จัดการสินค้าใน stock ได้ ละก็มีแท็บฟังก์ชั่นอื่นๆ
                    เอาไว้ให้ใช้งานสะดวก ใช้เวลาทำประมาณ 7 วัน
                    ตัวโปรแกรมยังไม่เสร็จสมบูรณ์ ในส่สนของฟังชั่น history
                    request calendar ยังไม่ได้เริ่มทำ ในส่วนอื่นเสร็จหมดแล้ว
                    ทั้งระบบล็อกอิน สมัครบัญชี การยืนยันตัวตน หรือสมัครบัญชีด้วย
                    google account
                  </span>
                )}
              </p>
              <Codeblock_1 />
            </div>
          </div>
          <div className="relative w-full flex gap-24 snap-mandatory snap-x overflow-x-auto lg:h-[90vh] h-[30vh]">
            <Image
              className="snap-center shrink-0 last:pr-8 lg:w-[90%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl ml-36 w-[80%] h-[100%]"
              alt="project-1"
              src={image1project1}
              width={160}
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 lg:w-[90%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl ml-36 w-[80%] h-[100%]"
              src={image2project1}
              alt="project-1"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 lg:w-[90%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl ml-36 w-[80%] h-[100%]"
              src={image3project1}
              alt="project-1"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 lg:w-[90%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl mr-36 w-[80%] h-[100%]"
              src={image4project1}
              alt="project-1"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
          </div>
          <div className="lg:h-[75vh] flex items-center justify-center mt-12 mx-12 mb-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dGmSElvR4vU?si=FLbvGcHkPMRhyoEu"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full rounded-lg overscroll-auto"
            ></iframe>
          </div>
        </li>
        <li className="border-b border-gray-300 mb-12">
          <h2 className="text-xl font-semibold ml-12">
            {language === "EN" ? <span>Project 2</span> : <span>โปรเจค 2</span>}
          </h2>
          <div className="border p-4 mt-4 mx-12 mb-12">
            <div className="flex h-max lg:flex-row flex-col">
              <p
                className="w-full text-lg text-left text-balance"
                style={{ textIndent: "50px" }}
              >
                {language === "EN" ? (
                  <span>
                    One day, I suddenly felt like making a game, but I had no
                    experience with game engines at all, haha. So, I did some
                    research and found the Pygame library, and decided to give
                    it a shot. This game project was the first serious one I’ve
                    worked on since I started programming. The hardest part for
                    me was the Logic.py file, which handled calculations for
                    movement, jumping, animation control, scoring, and spawning
                    monsters—pretty much everything. It took me about 15 days to
                    finish because the animation part slowed me down, haha.
                    Reading the code today, I'm amazed at how I managed to pull
                    it off back then!
                  </span>
                ) : (
                  <span>
                    อยู่ๆนึกคึกอยากทำเกมขึ้นมาแต่ผมไม่มีความสามารถในการใช้ game
                    engine เลย 5555 เลยลองศึกษาดูก็เจอ pygame library
                    ก็เลยลองเขียนดู
                    โปรเจคเขียนเกมนี้เป็นโปรเจคจริงจังโปรเจคแรกเลยที่เริ่มเขียนโปรแกรมมา
                    ความยากสำหรับผมในโปรเจคนี้ก็คือ ตรงไฟลฺ์ Logic.py อ่ะ
                    คือมันเป็นเกี่ยวกับการคำนวณการเดิน กระโดด การควบคุมอนิเมชั่น
                    คำนวณสกอร์ คำนวณการเกิดมอนสเตอร์ คือคำนวณทุกอย่างเลย
                    วันนี้กับมาอ่านโค้ดก็ทึ่งในความสามารถตัวเองในตอนนั้นเหมือนกันว่าทำได้ไง
                  </span>
                )}
              </p>
              <Codeblock_2 />
            </div>
          </div>
          <div className="lg:h-[75vh] flex items-center justify-center mt-12 mx-12 mb-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QpdxJUQXb68?si=KMq02IL5mT0ahvnn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full rounded-lg overscroll-auto"
              allowFullScreen
            ></iframe>
          </div>
        </li>
        <li className="border-b border-gray-300 mb-12">
          <h2 className="text-xl font-semibold ml-12">
            {language === "EN" ? <span>Project 3</span> : <span>โปรเจค 3</span>}
          </h2>
          <div className="border p-4 mt-4 mx-12 mb-12">
            <div className="flex h-max lg:flex-row flex-col">
              <p
                className="w-full text-lg text-left text-balance"
                style={{ textIndent: "50px" }}
              >
                {language === "EN" ? (
                  <span>
                    This was a project I was hired to do, an app for finding and
                    recommending perfumes, and you could also find places to buy
                    the perfumes. I completed about 60% of it, but then the
                    client suddenly disappeared 😭😭. I’ll just take it as
                    experience. Overall, I think I did a pretty good job. It
                    took me about 7-8 days to do this, and it was also my first
                    Flutter app, so it was a bit slow.
                  </span>
                ) : (
                  <span>
                    อันนี้เป็นโปรเจคที่ถูกจ้างมานะ เป็นแอพค้นหาน้ำหอม
                    แนะนำน้ำหอมให้เรา
                    และก็สามารถเข้าไปหาแหล่งซื้อขายของน้ำหอมนั้นได้ ผมทำไปประมาณ
                    60% ละอยู่ๆคนจ้างเขาก็หายตัวไปเลย😭😭 ถือว่าเป็นประสบการณ์ไป
                    โดยรวมแล้วก็ถือว่าทำได้ดีเลย ทั้งหมดนี้ผมทำไปประมาณ 7-8 วัน
                    และนี้เป็นแอพ flutter แรกที่เขียนด้วยเลยช้าหน่อยแหละ
                  </span>
                )}
              </p>
              <Codeblock_3 />
            </div>
          </div>
          <div className=" w-full flex gap-[50vw] snap-mandatory snap-x overflow-x-auto h-[50vh]">
            <Image
              className="snap-center shrink-0 last:pr-8 lg:w-[20%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl ml-[50vw] h-max"
              src={image1project3}
              alt="project-2"
              width={160}
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 lg:w-[20%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl h-max"
              src={image2project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 lg:w-[20%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl h-max"
              src={image3project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 lg:w-[20%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl h-max"
              src={image4project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 lg:w-[20%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl h-max"
              src={image6project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 lg:w-[20%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl h-max"
              src={image7project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 lg:w-[20%] lg:h-[90%] bg-cover bg-center rounded-lg shadow-xl mr-[50vw] h-max"
              src={image8project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
          </div>
          <div className="lg:h-[75vh] flex items-center justify-center mt-12 mx-12 mb-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zqPW3w41U-M?si=2iJlIFDVK-H8k0yj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full rounded-lg overscroll-auto "
              allowFullScreen
            ></iframe>
          </div>
        </li>
      </ul>
    </>
  );
}
