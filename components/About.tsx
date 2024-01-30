"use client";
import Image from "next/image";
import React from "react";

const TabsComponent = () => {
  return (
    <>
      <h1 className="text-center">
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  font-semibold text-6xl hover:border-b-2 border-[#be123c] transition duration-500"
          id="about-me"
        >
          About Me
        </span>
      </h1>
      <div className="flex flex-col-reverse lg:flex-row-reverse p-4 lg:p-16">
        {/* Right Side - Tabs */}
        <div className="w-full lg:w-1/2 pl-10">
          {/* Muzammal Rafique Heading */}
          <h2 className="text-3xl text-[#f43f5e] font-bold mb-4">
            Muzammal Rafique
          </h2>

          {/* Summary */}
          <p className="mb-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-900">
            Recently graduated in Information Technology from Government College
            University Faisalabad, I am currently immersed in the world of web
            development, specializing in Next.js and React.js. My passion lies
            in pushing the boundaries of technology, and my future goal is to
            evolve into a skilled Blockchain and Web 3.0 developer, contributing
            to the decentralized and innovative future of the internet.
          </p>
          <p className="text-2xl font-bold text-[#f43f5e] ">Key Points</p>
          <ul className="list-disc text-xl pl-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-900">
            <li className="mb-2">
              Proficient in Next.js and React.js for dynamic web application
              development.
            </li>
            <li className="mb-2">
              Aspiring Blockchain and Web 3.0 developer with a keen interest in
              decentralized systems.
            </li>
            <li className="mb-2">
              Problem-solving skills honed through academic projects and
              practical applications.
            </li>
            <li className="mb-2">
              Adaptable learner, committed to staying updated with emerging
              technologies.
            </li>
            <li className="mb-2 ">
              Collaborative team member, valuing communication and cooperation
              in project development.
            </li>
          </ul>
          {/* Tabs */}
        </div>

        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/About.png"
            alt="Left Side Image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default TabsComponent;
