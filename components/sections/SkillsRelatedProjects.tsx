import React, { useState } from 'react'

import Project from "../project";

export type SkillsType =
  | "NextJS"
  | "ReactJS"
  | "React Native"
  | "NodeJS"
  | "PWA"
  | "Expo"
  | "MongoDB"
  | "PostgreSQL"
  | "AWS";

function SkillsRelatedProjects() {
    const [selectedSkills, setSelectedSkills] = useState<SkillsType[]>([]);

    const skills: SkillsType[] = [
      "NextJS",
      "ReactJS",
      "React Native",
      "NodeJS",
      "PWA",
      "Expo",
      "MongoDB",
      "PostgreSQL",
      "AWS",
    ];

  return (
    <>
      <section>
        <div className="flex  mt-2 items-baseline gap-1">
          <h2 className="text-xl font-bold text-blue-400">skills</h2>
          <span className="opacity-75 text-[10px]">(select the skills)</span>
        </div>
        <ol className="flex gap-2 flex-wrap my-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`dark:bg-[#1B1818] bg-[#f8eeee] px-2 py-1 rounded-md text-xs flex gap-1 items-center cursor-pointer ${
                selectedSkills.includes(skill) ? ` bg-[#1F1717] text-white` : ""
              }`}
              onClick={() => {
                if (selectedSkills.includes(skill)) {
                  setSelectedSkills(selectedSkills.filter((s) => s !== skill));
                } else {
                  setSelectedSkills([...selectedSkills, skill]);
                }
              }}
            >
              <svg height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                <circle
                  r="3"
                  cx="7"
                  cy="7"
                  fill={selectedSkills.includes(skill) ? "white" : "none"}
                  stroke="currentColor"
                  stroke-width="1"
                />
              </svg>
              {skill}
            </li>
          ))}
        </ol>
      </section>
      <section>
        <div className="flex justify-between mt-2 items-center">
          <h2 className="text-xl font-bold text-blue-400">projects</h2>
          {selectedSkills.length > 0 ? (
            <span className="opacity-75 text-[10px]">
              (built with the selected skills)
            </span>
          ) : null}
        </div>
        <Project selectedSkills={selectedSkills} />
      </section>
    </>
  );
}

export default SkillsRelatedProjects