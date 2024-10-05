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

export default function Github() {
  return (
    <>
      <h2 className="text-2xl font-semibold">My GitHub</h2>
      <ul className="mx-12 mt-6">
        <li className="border-b border-gray-300 mb-12">
          <h2 className="text-xl font-semibold ml-12">Project 1</h2>
          <div className="border p-4 mt-4 mx-12 mb-12">
            <div className="flex h-[30vh]">
              <p
                className="w-full text-lg text-left text-balance"
                style={{ textIndent: "50px" }}
              >
                For this project, we’re building a stock management web
                application. The basic structure includes a dashboard where
                authorized users can see who’s online. The chat page is for
                communication, where people can discuss what items have been
                requested and share information about stock withdrawals. The
                stock page is for managing inventory, and there are other
                functional tabs to make things more convenient. It took around 7
                days to develop, but the program isn’t fully finished yet.
                Features like history, request, and calendar haven’t been
                started, but everything else is done, including login, account
                registration, authentication, and signing up with a Google
                account.
              </p>
              <Codeblock_1 />
            </div>
          </div>
          <div className="relative w-full flex gap-24 snap-mandatory snap-x overflow-x-auto h-[90vh]">
            <Image
              className="snap-center shrink-0 last:pr-8 w-[90%] h-[90%] bg-cover bg-center rounded-lg shadow-xl ml-36"
              alt="project-1"
              src={image1project1}
              width={160}
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 w-[90%] h-[90%] bg-cover bg-center rounded-lg shadow-xl"
              src={image2project1}
              alt="project-1"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 w-[90%] h-[90%] bg-cover bg-center rounded-lg shadow-xl"
              src={image3project1}
              alt="project-1"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 w-[90%] h-[90%] bg-cover bg-center rounded-lg shadow-xl mr-36"
              src={image4project1}
              alt="project-1"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
          </div>
          <div className="h-[75vh] flex items-center justify-center mt-12 mx-12 mb-12">
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
          <h2 className="text-xl font-semibold ml-12">Project 2</h2>
          <div className="border p-4 mt-4 mx-12 mb-12">
            <div className="flex h-[30vh]">
              <p
                className="w-full text-lg text-left text-balance"
                style={{ textIndent: "50px" }}
              >
                One day, I suddenly felt like making a game, but I had no
                experience with game engines at all, haha. So, I did some
                research and found the Pygame library, and decided to give it a
                shot. This game project was the first serious one I’ve worked on
                since I started programming. The hardest part for me was the
                Logic.py file, which handled calculations for movement, jumping,
                animation control, scoring, and spawning monsters—pretty much
                everything. It took me about 15 days to finish because the
                animation part slowed me down, haha. Reading the code today, I'm
                amazed at how I managed to pull it off back then!
              </p>
              <Codeblock_2 />
            </div>
          </div>
          <div className="h-[75vh] flex items-center justify-center mt-12 mx-12 mb-12">
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
          <h2 className="text-xl font-semibold ml-12">Project 3</h2>
          <div className="border p-4 mt-4 mx-12 mb-12">
            <div className="flex h-[30vh]">
              <p
                className="w-full text-lg text-left text-balance"
                style={{ textIndent: "50px" }}
              >
                This was a project I was hired to do, an app for finding and
                recommending perfumes, and you could also find places to buy the
                perfumes. I completed about 60% of it, but then the client
                suddenly disappeared 😭😭. I’ll just take it as experience.
                Overall, I think I did a pretty good job. It took me about 7-8
                days to do this, and it was also my first Flutter app, so it was
                a bit slow.
              </p>
              <Codeblock_3 />
            </div>
          </div>
          <div className=" w-full flex gap-[50vw] snap-mandatory snap-x overflow-x-auto h-[90vh]">
            <Image
              className="snap-center shrink-0 last:pr-8 w-[25%] h-[90%] bg-cover bg-center rounded-lg shadow-xl ml-[50vw]"
              src={image1project3}
              alt="project-2"
              width={160}
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 w-[25%] h-[90%] bg-cover bg-center rounded-lg shadow-xl"
              src={image2project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 w-[25%] h-[90%] bg-cover bg-center rounded-lg shadow-xl"
              src={image3project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 w-[25%] h-[90%] bg-cover bg-center rounded-lg shadow-xl"
              src={image4project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 w-[25%] h-[90%] bg-cover bg-center rounded-lg shadow-xl"
              src={image6project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 last:pr-8 w-[25%] h-[90%] bg-cover bg-center rounded-lg shadow-xl"
              src={image7project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
            <Image
              className="snap-center shrink-0 first:pl-8 w-[25%] h-[90%] bg-cover bg-center rounded-lg shadow-xl mr-[50vw]"
              src={image8project3}
              alt="project-2"
              width={160} // Set the width and height accordingly
              height={90}
              unoptimized
            />
          </div>
          <div className="h-[75vh] flex items-center justify-center mt-12 mx-12 mb-64">
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
