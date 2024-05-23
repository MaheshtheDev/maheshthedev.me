"use client";

import Head from "next/head";
import Image from "next/image";

import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="flex flex-col justify-center px-5 md:p-0 max-w-2xl mx-auto font-Montserrat">
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
          width={50}
          height={50}
          objectFit="cover"
          alt="Mahesh Sanikommu Photo"
        />
        {/*<nav className="flex items-center">
          <a
            href="https://blog.maheshthedev.me/"
            target={"_blank"}
            rel="noreferrer"
            className="font-medium mx-5 flex hover:text-primary"
            data-umami-event="Blog Link Clicked"
          >
            Blog
            <Image
              src="/45Arrow.svg"
              className="ml-1"
              alt="next_link"
              width={10}
              height={10}
            ></Image>
          </a>
          <a
            href="#projects"
            className="font-medium mr-5 hover:text-primary"
            data-umami-event="Projects Link Clicked"
          >
            Projects
          </a>
        </nav>*/}
      </header>
      <section>
        <h1 className="text-3xl font-bold mt-6">
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
      <section>
        <h2 className="text-xl font-bold mt-10">timeline</h2>
      </section>
      <script
        defer
        src="https://mtd-analytics.vercel.app/script.js"
        data-website-id="586447cb-fd00-4dfd-8a6b-0a23c1492c9f"
      ></script>
    </div>
  );
}
