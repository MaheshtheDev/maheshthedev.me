import Image from "next/image";

const projects = [
  {
    name: "Splitrck",
    description: "Analytics for Splitwise",
    builtWith: ["React", "Next.js", "TailwindCSS"],
    image:
      "https://github.com/MaheshtheDev/Splitrck/blob/main/public/apple-touch-icon.png?raw=true",
  },
  {
    name: "myFRS",
    description: "retail store management system",
    builtWith: ["React", "Next.js", "PWA"],
    image:
      "https://raw.githubusercontent.com/MaheshtheDev/myfrs-pwa/main/public/logo.svg",
  },
];

export default function Baking() {
  return (
    <div>
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            className="rounded-full"
            src="/me.png"
            width={50}
            height={50}
            objectFit="cover"
            alt="Your Name"
          />
          <div className="mx-3">
            <p className="text-md font-medium">Mahesh Sanikommu</p>
            <div className="opacity-60 text-sm">Full Stack Developer</div>
          </div>
        </div>
        <button className="bg-yellow-400 px-2 py-1 text-black text-lg">
          hire me
        </button>
      </header>
      <h2 className="px-2 text-lg text-blue-400 font-semibold">
        building, lately!
      </h2>
      <section className="mx-2 py-2 gap-4 flex flex-col">
        {projects.map((project, index) => (
          <div
            className="px-3 py-2 bg-[#1B1818] font-medium rounded-md relative overflow-hidden"
            key={index}
          >
            <Image
              src={
                project.image ||""
              }
              width={60}
              height={60}
              alt="Splitrck"
              className="absolute -top-3 -right-2 rounded-full brightness-50"
            />
            <p>{project.name}</p>
            <p className="text-[12px] opacity-75">{project.description}</p>
            <div className="flex">
              <p className="text-[10px] opacity-50">BUILT WITH: </p>
              <div className="flex">
                {project.builtWith.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-1 bg-[#1F1717] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
