import Link from "next/link";

export default function ProjectCard(props: { project: any }) {
  return (
    <a
      key={props.project.title}
      className="rounded-xl flex flex-col justify-between px-3 py-2 bg-[#1B1818] h-42 w-full text-white "
      href={props.project.link}
      target="_blank"
    >
      <div className="mb-2">
        <div className="flex justify-between items-center mb-1">
          <p className="font-semibold text-md">{props.project.title}</p>
          <p className="uppercase text-[10px] text-orange-400">
          </p>
        </div>
        <p className="text-xs brightness-50 flex-wrap">
          {props.project.description}
        </p>
      </div>
      <div className="text-xs mb-2 flex items-center">
        <div className="text-md mr-2">Tech Stack: </div>
        {props.project.techStack.map((tech: string, index: number) => (
          <span
            key={index}
            className="text-[10px] bg-slate-600 rounded-full px-2 mr-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
