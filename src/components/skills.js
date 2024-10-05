import React from "react";
import codememe from "@/../public/image/codememe.gif";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className="mx-12 w-full">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">Node.js</span>
            <span className="text-lg font-medium">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">Next.js</span>
            <span className="text-lg font-medium">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-4 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">python</span>
            <span className="text-lg font-medium">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">Prisma + SQLite</span>
            <span className="text-lg font-medium">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-yellow-600 h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </div>
      <Image
        src={codememe} // Path to the GIF in your public folder
        alt="GIF example"
        width={300} // Set the width and height accordingly
        height={100}
        unoptimized // Prevents optimization, required for GIFs to work properly
      />
      <div className="mx-12 w-full">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">React</span>
            <span className="text-lg font-medium">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">Github</span>
            <span className="text-lg font-medium">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-4 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">AI</span>
            <span className="text-lg font-medium">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-medium">Flutter</span>
            <span className="text-lg font-medium">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-yellow-600 h-4 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
