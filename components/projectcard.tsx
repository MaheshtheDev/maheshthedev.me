import Link from "next/link";

export default function ProjectCard(props: { project: any }) {
  return (
    <div
      key={props.project.title}
      className="rounded-xl flex flex-col md:flex-row md:items-center justify-between md:px-5 px-3 py-2 bg-[#1B1818] h-42 w-full mb-3 text-white "
    >
      <div className="md:w-2/3 mb-2">
        <p className="font-semibold text-md">{props.project.title}</p>
        <p className="uppercase text-[10px] text-orange-400">
          {props.project.status}
        </p>
        <p className="text-xs md:text-sm brightness-50 flex-wrap">
          {props.project.description}
        </p>
      </div>
      <div className="text-xs mb-2 flex items-center">
        <div className="text-md mr-2">Tech Stack: </div>
        {props.project.techStack.map((tech: string, index: number) => (
          <span
            key={index}
            className="text-[10px] md:text-sm bg-slate-600 rounded-full px-2 mr-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex md:flex-col pb-2 md:pb-0 text-sm text-[#A1B6EE]  font-medium">
        <Link href={`/project/${props.project.id}`}>
          <div className="border-[1.5px] flex cursor-pointer border-[#A1B6EE] hover:bg-[#A1B6EE] hover:text-black rounded-sm p-1 px-2 md:mb-2 mr-2 md:mr-0">
            Know More
          </div>
        </Link>
        <button
          className={
            props.project.link == undefined
              ? "border-[1.5px] border-[#A1B6EE] rounded-sm p-1 px-2 opacity-50 cursor-not-allowed"
              : "border-[1.5px] cursor-pointer border-[#A1B6EE] hover:bg-[#A1B6EE] hover:text-black rounded-sm p-1 px-2"
          }
          onClick={() => window.open(props.project.link, "_blank")}
          disabled={props.project.link == undefined}
        >
          View
        </button>
      </div>
    </div>
  );
}
