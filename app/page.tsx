"use client";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
      <section>
        <h2 className="text-xl font-bold mt-5 text-blue-400">
          few highlights
        </h2>
        <section className="my-2">
          <div className="grid-cols-2 grid gap-3">
            <div className="bg-[#271f1f] rounded-md px-2 pt-2 pb-4 relative overflow-hidden">
              <Image
                src="/images/github.png"
                width={40}
                height={40}
                alt="Splitrck"
                className="absolute -bottom-2 -right-0 rounded-full brightness-50"
              />
              <h1 className="font-medium">400+ Contributions</h1>
              <p className="text-[12px] text-gray-400">
                Contributed to more than 400 commits in the past year
              </p>
            </div>
            <div className="bg-[#271f1f] rounded-md px-2 pt-2 pb-4 relative overflow-hidden">
              <Image
                src="/images/lb.png"
                width={60}
                height={60}
                alt="Splitrck"
                className="absolute -bottom-3 -right-2 rounded-full brightness-50"
              />
              <h1 className="font-medium">Graduating 🎓</h1>
              <p className="text-[12px] text-gray-400">
                In Dec 2024, graduating in Computer Science at Cal State Long
                Beach
              </p>
            </div>
          </div>
          <div className="bg-[#271f1f] rounded-md px-2 py-2 my-3 relative overflow-hidden">
            <Image
              src="/images/writing.png"
              width={60}
              height={60}
              alt="Splitrck"
              className="absolute -bottom-3 -right-2 rounded-full brightness-50"
            />
            <h1 className="font-medium">Helped 25k+ Devs Write better code</h1>
            <p className="text-[12px] text-gray-400">
              My Blogs reached more than 25000 developers and helped them write
              better code
            </p>
            <div className="flex justify-start gap-10 pl-2">
              <div className="text-center">
                <p className="opacity-75 text-[13px]">Blogs</p>
                <p>10</p>
              </div>
              <div className="text-center">
                <p className="opacity-75 text-[13px]">Views</p>
                <p>27456</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h2 className="text-xl font-bold text-blue-400">connect with me</h2>
        
      </section>
      <script
        defer
        src="https://mtd-analytics.vercel.app/script.js"
        data-website-id="586447cb-fd00-4dfd-8a6b-0a23c1492c9f"
      ></script>
    </div>
  );
}
