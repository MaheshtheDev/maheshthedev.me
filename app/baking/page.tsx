import Image from "next/image";

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
            <p className="text-md">Mahesh Sanikommu</p>
            <div className="opacity-60 text-sm">Full Stack Developer</div>
          </div>
        </div>
        <button className="bg-yellow-400 px-2 py-1 text-black text-lg">
          hire me
        </button>
      </header>
      <h2 className="px-2 text-lg font-semibold">building, lately!</h2>
    </div>
  );
}
