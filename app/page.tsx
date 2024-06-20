"use client";

import { Socials, Blogs, About, Header, SkillsRelatedProjects } from "../components/sections";

export default function Home() {
  return (
    <div className="font-Montserrat px-5 md:p-0 max-w-2xl mx-auto">
      <Header />
      <About />
      <Socials />
      <SkillsRelatedProjects />
      <Blogs />
      <script
        defer
        src="https://analytics.maheshthedev.me/script.js"
        data-website-id="586447cb-fd00-4dfd-8a6b-0a23c1492c9f"
      ></script>
    </div>
  );
}
