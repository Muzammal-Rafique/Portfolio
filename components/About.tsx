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
  <div className="w-full lg:w-1/2 pl-10">
    <h2 className="text-3xl text-black font-bold mt-6 mb-4">
      Muzammal Rafique
    </h2>
    <p className="text-2xl font-bold text-[#f43f5e] ">Background</p>
    <p className="mb-6 mt-2 text-xl text-justify">
    Recently graduated in Information Technology from Government College University Faisalabad, I am currently immersed in the world of web development, specializing in Next.js and React.js. This academic journey has equipped me with a solid foundation in IT principles and methodologies, providing me with the necessary tools to excel in the ever-evolving tech landscape.
    </p>
    <p className="text-2xl font-bold text-[#f43f5e] ">Contemporary</p>
    <p className="mb-6 mt-2 text-xl text-justify">
    My passion lies in pushing the boundaries of technology, and I am proficient in Next.js and React.js for dynamic web application development. I am also an adaptable learner, committed to staying updated with emerging technologies. Embracing the challenges of the present, I continuously seek opportunities to expand my knowledge and refine my skills in pursuit of excellence.
    </p>
    <p className="text-2xl font-bold text-[#f43f5e] ">Future Plan</p>
    <p className="mb-6 text-xl mt-2 text-justify">
    My future goal is to evolve into a skilled Blockchain and Web 3.0 developer, contributing to the decentralized and innovative future of the internet. I aspire to become a valuable asset in this rapidly evolving field, leveraging my problem-solving skills and collaborative nature to drive forward projects and initiatives. With a clear vision of where I want to be, I am dedicated to taking the necessary steps to achieve my aspirations and make a meaningful impact in the tech industry.
    </p>
    
  </div>

  <div className="lg:w-1/2 mb-8 lg:mb-0 ml-10">
    <div style={{ width: '100%', height: '80%' }}>
      <Image
        src="/Github.png"
        alt="Left Side Image"
        layout="responsive"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>

    </>
  );
};

export default TabsComponent;
