export default function ProjectCard() {
  return (
    <div className="rounded-xl flex items-center justify-between px-5 py-2 bg-[#1B1818] h-32 w-full mb-3 text-white ">
      <div>
          <p className="font-medium text-md">Azure DevOps Extension for SlapDash</p>
          <p className="text-sm brightness-50">Description</p>
      </div>
      <div className="flex flex-col text-sm text-[#A1B6EE] font-medium">
        <div className="border-[1.5px] rounded-[5px] p-1 px-2 mb-2">
          Know More
        </div>
        <div className="border-[1.5px] rounded-[5px] p-1 px-2 ">
          View on GitHub
        </div>
      </div>
    </div>
  );
}
