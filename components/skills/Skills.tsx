"use client";
import React, { useState } from "react";
import Card from "./Card";
import { Langauges, Technologies, Tools } from "@/constants/skills";
import TabButton from "./TabButton";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      <h1 className="text-center">
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  font-semibold text-6xl hover:border-b-2 border-[#be123c] transition duration-500"
          id="skills"
        >
          Skills
        </span>
      </h1>
      <div className="flex items-center justify-center gap-2 mt-8">
        <TabButton
          label="Languages"
          tabIndex={1}
          handleTabClick={handleTabClick}
          activeTab={activeTab}
        />
        <TabButton
          label="Technologies"
          tabIndex={2}
          handleTabClick={handleTabClick}
          activeTab={activeTab}
        />
        <TabButton
          label="Tools"
          tabIndex={3}
          handleTabClick={handleTabClick}
          activeTab={activeTab}
        />
      </div>

      <div>
        {activeTab === 1 && (
          <div className="flex flex-col items-center justify-center gap-8 pt-10 sm:flex-row sm:flex-wrap">
            {Langauges.map((item, index) => {
              return <Card key={index} image={item.image} title={item.title} />;
            })}
          </div>
        )}
        {activeTab === 2 && (
          <div className="flex flex-col items-center justify-center gap-8 pt-10 sm:flex-row sm:flex-wrap">
            {Technologies.map((item, index) => {
              return <Card key={index} image={item.image} title={item.title} />;
            })}
          </div>
        )}
        {activeTab === 3 && (
          <div className="flex flex-col items-center justify-center gap-8 pt-10 sm:flex-row sm:flex-wrap ">
            {Tools.map((item, index) => {
              return <Card key={index} image={item.image} title={item.title} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
