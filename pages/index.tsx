import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Postcard from "../components/postcard";
import ProjectCard from "../components/projectcard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto font-Montserrat">
      <Head>
        <title>Sv's Portfolio</title>
      </Head>
      <header className="flex justify-between">
        <Image src="/logo.svg" height={100} width={100} alt="logo" />
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

      <main className="flex justify-between">
        <section className="flex items-center">
          <section>
            <p className="text-3xl font-semibold">MaheshtheDev</p>
            <p className="text-2xl font-semibold">A Dev on Mission</p>
            <div className="w-fit">
              <p className="text-md underline">Automating Non-Creative Jobs</p>
              <p className="text-sm float-right">w/ webtools</p>
            </div>
          </section>
        </section>
        <Image src="/profile_pic.svg" height={250} width={250} alt="profile pic" />
      </main>
      <div className="font-medium text-xl mt-5">About me</div>
      <div className="font-medium text-xl mt-5">Whats New?</div>
      <section className="mt-5">
        <p className="text-xl font-medium">Recent Blog Posts</p>
        <section className="flex mt-2">
          <Postcard />
          <Postcard />
        </section>
      </section>
      <section className="mt-5">
        <p className="text-xl font-medium">Projects</p>
        <section className="flex mt-2 flex-col">
          <ProjectCard />
          <ProjectCard />
        </section>
      </section>
    </div>
  );
}
