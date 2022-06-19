export default function ProjectCard(props : {project: any}) {
  return (
    <div
      key={props.project.title}
      className="rounded-xl flex flex-col md:flex-row md:items-center justify-between md:px-5 px-3 py-2 bg-[#1B1818] h-32 w-full mb-3 text-white "
    >
      <div className="md:w-2/3">
        <p className="font-semibold text-md">{props.project.title}</p>
        <p className="text-xs md:text-sm brightness-50 flex-wrap">
          {props.project.description}
        </p>
      </div>
      <div className="flex md:flex-col pb-2 md:pb-0 text-sm text-[#A1B6EE]  font-medium">
        <div className="border-[1.5px] flex cursor-pointer border-[#A1B6EE] hover:bg-[#A1B6EE] hover:text-black rounded-[5px] p-1 px-2 md:mb-2 mr-2 md:mr-0">
          Know More
        </div>
        <div className="border-[1.5px] cursor-pointer border-[#A1B6EE] hover:bg-[#A1B6EE] hover:text-black rounded-[5px] p-1 px-2 ">
          View on GitHub
        </div>
      </div>
    </div>
  );
}
