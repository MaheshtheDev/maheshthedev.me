import Head from "next/head";
import Image from "next/image";

import useSWR from "swr";

import Postcard from "../components/postcard";
import ProjectCard from "../components/projectcard";
import fetcher from "../lib/fetcher";
import { Article } from "../components/types";
import projects from "../data/projects.json";
import recent from "../data/recent.json";
import AboutMe from "../components/about-me";

export default function Home() {
  var { data } = useSWR<any>("/api/articles", fetcher);
  var { data: problemSolved } = useSWR<any>("/api/problem-solved", fetcher);

  if (data) data.response = data.response.slice(0, 2);

  if (!data) return null;

  return (
    <div className="flex flex-col justify-center p-5 md:p-0 max-w-2xl mx-auto font-Montserrat">
      <Head>
        <title>Sv&apos;s Portfolio</title>
      </Head>
      <header className="flex justify-between">
        <Image src="/logo.svg" height={75} width={100} alt="logo" />
        <nav className="flex items-center">
          <a
            href="https://blog.maheshthedev.me/"
            target={"_blank"}
            rel="noreferrer"
            className="font-medium mx-5 flex"
          >
            Blog
            <img src="/45Arrow.svg" className="pl-1"></img>
          </a>
          <a href="#" className="font-medium">
            Projects
          </a>
        </nav>
      </header>
      <p className="justify-center flex font-semibold text-red-700">
        ⚠️ Development is still in Progress ⚠️
      </p>
      <main className="flex justify-between">
        <section className="flex items-center">
          <section>
            <p className="text-2xl md:text-3xl font-semibold">MaheshtheDev</p>
            <p className="text-xl md:text-2xl font-semibold">
              A Dev on Mission
            </p>
            <div className="w-fit">
              <p className="text-sm md:text-md underline">
                Automating Non-Creative Jobs
              </p>
              <p className="text-sm float-right">w/ webtools</p>
            </div>
          </section>
        </section>
        <Image
          src="/profile_pic.svg"
          height={200}
          width={125}
          alt="profile pic"
          className="float-right"
        />
      </main>
      <AboutMe />
      <div className="font-medium text-xl mt-5">Whats New?</div>
      <div className="flex items-center pt-2">
        <p className="text-xs p-1 rounded-[5px]">APR 2022</p>
        <div className="pl-2 font-normal cursor-pointer flex items-center">
          {problemSolved != undefined ? problemSolved.title : "Loading"}
          <p className="text-xs pl-1">(Last Solved Problem!)</p>
        </div>
      </div>
      {recent.map((activity) => (
        <div className="flex items-center">
          <p className="text-xs p-1 rounded-[5px]">APR 2022</p>
          <div className="pl-2 font-normal cursor-pointer flex items-center">
            {activity.title}
            <p className="text-xs pl-1"></p>
          </div>
        </div>
      ))}
      <section className="mt-5">
        <p className="text-xl font-medium">Recent Blog Posts</p>
        <section className="flex mt-2">
          {data.response.map((article: Article, index: number) => (
            <Postcard article={article} key={index} />
          ))}
        </section>
      </section>
      <section className="mt-5">
        <p className="text-xl font-medium">Projects</p>
        <section className="flex mt-2 flex-col">
          {projects.map((project: any, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </section>
      </section>
    </div>
  );
}
