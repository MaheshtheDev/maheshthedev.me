"use client";

import Head from "next/head";
import Image from "next/image";
import Socials from "../components/socials";
import { useState } from "react";
import Project from "../components/project";
import parse from "rss-to-json";

export type SkillsType =
  | "NextJS"
  | "ReactJS"
  | "React Native"
  | "NodeJS"
  | "PWA"
  | "TailwindCSS"
  | "Expo";

export default function Home() {
  const [selectedSkills, setSelectedSkills] = useState<SkillsType[]>([]);
  const [articles, setArticles] = useState<any[]>([]);

  const skills: SkillsType[] = [
    "NextJS",
    "ReactJS",
    "React Native",
    "NodeJS",
    "PWA",
    "TailwindCSS",
    "Expo",
  ];

  async function fetchArticles() {
    var rss = await parse("https://medium.com/@maheshthedev/feed");
    setArticles(rss.items);
    console.log(JSON.stringify(rss, null, 3));
  }

  if (articles.length === 0) fetchArticles();

  return (
    <div className="flex flex-col justify-center px-5 md:p-0 max-w-2xl mx-auto font-Montserrat mb-16">
      <Head>
        <title>Mahesh Sanikommu | Portfolio</title>
        <meta name="description" content="Mahesh Reddy's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://maheshthedev.me/OG-Image.png"
        />
        <meta property="og:title" content="MaheshtheDev's Portfolio" />
        <meta
          property="description"
          key={"desc"}
          content="Automating Non-Creative Jobs w/ webtools"
        />
      </Head>
      <header className="flex justify-between my-4">
        <Image
          className="rounded-full max-w-full"
          src="/me.png"
          width={75}
          height={75}
          objectFit="cover"
          alt="Mahesh Sanikommu Photo"
        />
      </header>
      <section>
        <h1 className="text-3xl font-bold mt-2">
          Hi, I&apos;m Mahesh Sanikommu
        </h1>
        <p>
          (<span className="text-xs text-gray-400">AKA</span>{" "}
          <span className="text-primary">MaheshtheDev</span>)
        </p>
        <p className="text-md mt-5">
          I&apos;m a Full Stack Developer. I love to build web, mobile
          applications and{" "}
          <span className="decoration-double underline decoration-orange-500">
            automate non-creative jobs with web tools
          </span>
        </p>
      </section>
      <Socials />
      <section>
        <div className="flex justify-between mt-2 items-center">
          <h2 className="text-xl font-bold text-blue-400">skills</h2>
          <span className="opacity-75 text-[10px]">
            (select the skills you like)
          </span>
        </div>
        <ol className="flex gap-2 flex-wrap my-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`bg-[#1B1818] px-2 py-1 rounded-md text-xs  flex gap-1 items-center cursor-pointer ${
                selectedSkills.includes(skill) ? ` bg-[#1F1717]` : ""
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
                  stroke="white"
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
      <section>
        <div className="flex justify-between my-2 items-center">
          <h2 className="text-xl font-bold text-blue-400">writes</h2>
        </div>
        <ol>
          {articles.length > 0 &&
            articles.map((article, index) => (
              <>
                <li className="flex items-center gap-1 w-full" onClick={() => {
                  window.open(article.link, "_blank");
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm6 6H5.43a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.07a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-5.32-3h3.57a.75.75 0 0 1 0 1.5H5.18a.75.75 0 0 1 0-1.5"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="flex justify-between w-full">
                    <p>{article.title}</p>
                    <p>→</p>
                  </div>
                </li>
              </>
            ))}
        </ol>
      </section>
      <script
        defer
        src="https://mtd-analytics.vercel.app/script.js"
        data-website-id="586447cb-fd00-4dfd-8a6b-0a23c1492c9f"
      ></script>
    </div>
  );
}
