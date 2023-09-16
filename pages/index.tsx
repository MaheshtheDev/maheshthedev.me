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
import Script from "next/script";
import { useRouter } from "next/router";

export default function Home() {
  var { data } = useSWR<any>("/api/articles", fetcher);
  var { data: problemSolved } = useSWR<any>("/api/problem-solved", fetcher);
  //var { data: siteUpdatedOn } = useSWR<any>("/api/site-updated-on", fetcher);

  if (data) data.response = data.response.slice(0, 2);

  if (!data) return null;

  return (
    <div className="flex flex-col min-h-screen relative justify-center px-5 md:p-0 max-w-2xl mx-auto font-Montserrat">
      <Head>
        <title>Mahesh Reddy</title>
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
      <Header />
      <main className="flex justify-between">
        <section className="flex items-center">
          <section>
            <p className="text-2xl md:text-3xl font-semibold">MaheshtheDev</p>
            <p className="text-xl md:text-2xl font-semibold text-[#A1B6EE]">
              A Dev on Mission
            </p>
            <div className="w-fit">
              <p className="text-sm md:text-md underline text-primary">
                Automating Non-Creative Jobs
              </p>
              <p className="text-sm float-right">w/ webtools</p>
            </div>
          </section>
        </section>
        <img
          src="/new-me.jpeg"
          height={250}
          width={155}
          alt="profile pic"
          className="float-right rounded-lg"
        />
      </main>
      {/*<AboutMe />*/}
      <section className="mt-5">
        <p className="text-lg font-medium text-primary mb-2">
          Recent Blog Posts
        </p>
        <section className="flex overflow-x-auto">
          {data.response.map((article: Article, index: number) => (
            <Postcard article={article} key={index} />
          ))}
        </section>
      </section>
      <section className="mt-5 pb-4">
        <p className="text-lg font-medium text-primary" id="projects">
          Projects
        </p>
        <section className="flex mt-2 flex-col">
          {projects.map((project: any, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </section>
      </section>
      <footer className="py-2">
        <hr className="h-[2px] border-1 border-solid bg-black" />
        <div className="flex justify-between text-xs py-1">
          <p>© 2023, MaheshtheDev.</p>
          {/*<p className="text-[#9E9494]">Last Updated: { siteUpdatedOn ? siteUpdatedOn.time : "Never"}</p>*/}
        </div>
      </footer>
      <Script
        async
        src="https://my-umami-lovat.vercel.app/script.js"
        data-website-id="aeff7c82-1a11-47e9-9dbd-2097cff8a123"
      ></Script>
    </div>
  );
}

export function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between">
      <Image
        onClick={() => router.basePath}
        src="/logo.svg"
        height={75}
        width={100}
        alt="logo"
      />
      <nav className="flex items-center">
        <a
          href="https://blog.maheshthedev.me/"
          target={"_blank"}
          rel="noreferrer"
          className="font-medium mx-5 flex hover:text-primary"
          data-umami-event="Blog Link Clicked"
        >
          Blog
          <img src="/45Arrow.svg" className="pl-1" alt="next_link"></img>
        </a>
        <a
          href="#projects"
          className="font-medium mr-5 hover:text-primary"
          data-umami-event="Projects Link Clicked"
        >
          Projects
        </a>
        {/*<a
            href="#projects"
            className="font-medium hover:text-primary"
            data-umami-event="Projects Link Clicked"
          >
            Faq
          </a>*/}
      </nav>
    </header>
  );
}
