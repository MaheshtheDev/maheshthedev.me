import { useRouter } from "next/router";
import { Header } from "..";
import projects from "../../data/projects.json";

export default function Page() {
  const { slug } = useRouter().query;
  const project = projects.find((project) => project.id === slug);
  return (
    <section className="px-5 font-Montserrat">
      <Header />
      <section className="">
        <h1 className="font-semibold text-2xl">{project?.title}</h1>
        <div className="text-xs my-1 flex items-center">
          <div className="text-md mr-2">Tech Stack: </div>
          {project?.techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="text-[10px] md:text-sm rounded-full mr-1"
            >
              {tech} {index !== project.techStack.length - 1 ? "•" : ""}
            </span>
          ))}
        </div>
        <p className="text-sm text-[#A1B6EE]">{project?.description}</p>
      </section>
    </section>
  );
}
