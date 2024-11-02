"use client";
import Image from "next/image";
import { SkillsType } from "./sections/SkillsRelatedProjects";

const projects = [
  {
    name: "Supermemory.ai",
    description:
      "Ultimate hub for organizing saved information with powerful tools like a search engine, canvas.",
    builtWith: ["ReactJS", "NextJS", "TailwindCSS", "PWA", "Cloudflare"],
    image: "https://supermemory.ai/_next/static/media/logo.5b58225a.svg",
    link: "https://supermemory.ai/",
  },
  {
    name: "Splitrck",
    description: "Analytics for Splitwise",
    builtWith: ["ReactJS", "NextJS", "TailwindCSS", "PWA"],
    image:
      "https://github.com/MaheshtheDev/Splitrck/blob/main/public/apple-touch-icon.png?raw=true",
    link: "https://splitrck.mtd.wtf/",
  },
  {
    name: "Fast PWA",
    description: "PWA Boilerplate with NextJS, inbuilt Hooks.",
    builtWith: ["ReactJS", "NextJS", "TailwindCSS", "PWA"],
    image:
      "https://github.com/MaheshtheDev/fast-pwa/blob/main/public/icon-192x192.png?raw=true",
    link: "https://github.com/MaheshtheDev/fast-pwa",
  },
  {
    name: "DCMH Mobile",
    description: "App streamlines DCMH inventory and donations.",
    builtWith: ["React Native", "Expo", "PostgreSQL", "Supabase"],
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/867/831/datas/medium.jpg",
    link: "https://github.com/MaheshtheDev/DCMH-Mobile",
  },
  {
    name: "Raise Funds",
    description: "NPO Fundraising Platform",
    builtWith: ["React Native", "Expo", "NodeJS", "MongoDB", "AWS"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e9/ba/27/e9ba277f-1eb8-f2e4-47b2-e427f7ba115c/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp",
    link: "https://apps.apple.com/us/app/raise-funds/id6449892629",
  },
  {
    name: "MaheshtheDev.me",
    description: "Mahesh Sanikommu Portfolio",
    builtWith: ["ReactJS", "NextJS", "TailwindCSS"],
    image:
      "https://raw.githubusercontent.com/MaheshtheDev/maheshthedev.me/fee98eef9389305113e056c400a5c18e3f234af0/public/logo.svg",
    link: "https://github.com/MaheshtheDev/maheshthedev.me",
  },
  {
    name: "Gymrat AI",
    description: "Reimagine Workout, Meal Plan",
    builtWith: ["React Native", "Expo", "AWS"],
    image:
      "https://github.com/MaheshtheDev/gymrat-ai/blob/main/src/assets/icon.png?raw=true",
    link: "https://github.com/MaheshtheDev/gymrat-ai",
  },
  {
    name: "myFRS",
    description: "retail store management system",
    builtWith: ["ReactJS", "NextJS", "PWA", "TailwindCSS"],
    image:
      "https://raw.githubusercontent.com/MaheshtheDev/myfrs-pwa/main/public/logo.svg",
    link: "https://github.com/MaheshtheDev/myfrs-pwa",
  },
];

export default function Project({
  selectedSkills,
}: {
  selectedSkills: SkillsType[];
}) {
  return (
    <section className="py-2 gap-4 flex flex-col">
      {projects
        .filter((project) => {
          if (selectedSkills.length === 0) return true;
          return selectedSkills.some((skill) =>
            project.builtWith.includes(skill)
          );
        })
        .map((project, index) => (
          <div
            className="px-3 py-2 bg-[#efe1e1] dark:bg-[#1B1818] font-medium rounded-md relative overflow-hidden cursor-pointer"
            key={index}
            onClick={() => window.open(project.link, "_blank")}
          >
            <Image
              src={project.image || ""}
              width={60}
              height={60}
              alt="Splitrck"
              className="absolute -top-3 -right-2 rounded-full dark:brightness-50"
            />
            <p>{project.name}</p>
            <p className="text-[12px] opacity-75">{project.description}</p>
            <div className="flex">
              <p className="text-[10px] opacity-50">BUILT WITH: </p>
              <div className="flex">
                {project.builtWith.map((tech, index) => (
                  <span key={index} className="text-[10px] px-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
