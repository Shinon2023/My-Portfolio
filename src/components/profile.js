import React from "react";
import Image from "next/image";
import imageprofile from "@/../public/image/profile/profile.jpg";
import { Facebook, Instagram, Github, PhoneIncoming } from "lucide-react";

export default function Profile() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 ">About Me</h2>
      <div className="mx-12 flex flex-col">
        <div className="flex flex-row border h-[40vh]">
          <div className="h-1/2 w-1/3 flex justify-start ml-6 mt-6 flex-col">
            <div className="flex flex-row">
              <Image
                className="bg-center rounded-full w-32 h-32 bg-white"
                alt="profile"
                src={imageprofile}
                width={160}
                height={160}
                unoptimized
              />
              <h1 className="text-3xl font-semibold text-center h-max mx-auto my-auto">
                Siwat Sroisuwan
              </h1>
            </div>
            <div className="w-full h-max">
              <p className="mt-6 " style={{ textIndent: "40px" }}>
                My name is Siwat Soisuwan. I am currently studying at Chiang Mai
                University, Faculty of Engineering, in the Electrical
                Engineering Special Program. I want to gain experience working
                with others, improve various skills, and seek out my career
                goals for the future. I also want to earn an income to support
                myself after graduation.
              </p>
            </div>
          </div>
          <div className="w-2/3 border overflow-hidden">
            <h1 className="text-xl font-semibold mt-8 ml-6">Contact</h1>
            <div className="h-full rounded ml-16 mt-3 flex flex-col">
              <ul className="flex flex-col flex-1 space-y-4">
                <li className="text-lg flex flex-row">
                  <a
                    href="https://www.facebook.com/profile.php?id=100011282403348&viewas=100000686899395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Facebook strokeWidth={1.5} />
                    <span>: Siwat Sroisuwan</span>
                  </a>
                </li>
                <li className="text-lg flex flex-row space-x-1">
                  <a
                    href="https://www.instagram.com/siwat_sroisuwan/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Instagram strokeWidth={1.5} />
                    <span>: Siwat_Sroisuwan</span>
                  </a>
                </li>
                <li className="text-lg flex flex-row space-x-1">
                  <a
                    href="https://github.com/Shinon2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github strokeWidth={1.5} />
                    <span>: Shinon2023</span>
                  </a>
                </li>
                <li className="text-lg flex flex-row space-x-1">
                    <PhoneIncoming strokeWidth={1.5} />
                    <span>: 061-313-9858</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
