"use client";
import Image from "next/image";
import Miniheader from "../../components/mini-header";

const projects = [
  {
    name: "Splitrck",
    description: "Analytics for Splitwise",
    builtWith: ["React", "Next.js", "TailwindCSS"],
    image:
      "https://github.com/MaheshtheDev/Splitrck/blob/main/public/apple-touch-icon.png?raw=true",
  },
  {
    name: "Raise Funds",
    description: "NPO Fundraising Platform",
    builtWith: ["React Native", "Expo", "Node.js", "MongoDB"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e9/ba/27/e9ba277f-1eb8-f2e4-47b2-e427f7ba115c/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp",
  },
  {
    name: "Gymrat AI",
    description: "Reimagine Workout, Meal Plan",
    builtWith: ["React Native", "Expo", "AWS"],
    image:
      "https://github.com/MaheshtheDev/gymrat-ai/blob/main/src/assets/icon.png?raw=true",
  },
  {
    name: "myFRS",
    description: "retail store management system",
    builtWith: ["React", "Next.js", "PWA"],
    image:
      "https://raw.githubusercontent.com/MaheshtheDev/myfrs-pwa/main/public/logo.svg",
  },
];

export default function Building() {
  return (
    <div>
      <Miniheader />
      <h2 className="px-4 text-lg text-blue-400 font-semibold">
        building, lately!
      </h2>
      <section className="mx-2 py-2 gap-4 flex flex-col">
        {projects.map((project, index) => (
          <div
            className="px-3 py-2 bg-[#1B1818] font-medium rounded-md relative overflow-hidden"
            key={index}
          >
            <Image
              src={project.image || ""}
              width={60}
              height={60}
              alt="Splitrck"
              className="absolute -top-3 -right-2 rounded-full brightness-50"
            />
            <p>{project.name}</p>
            <p className="text-[12px] opacity-75">{project.description}</p>
            <div className="flex">
              <p className="text-[10px] opacity-50">BUILT WITH: </p>
              <div className="flex">
                {project.builtWith.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-1 bg-[#1F1717] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
