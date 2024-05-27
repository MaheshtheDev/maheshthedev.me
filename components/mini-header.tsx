"use client";
import React from 'react'
import Image from "next/image";

export default function Miniheader() {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          className="rounded-full"
          src="/me.png"
          width={50}
          height={50}
          alt="Mahesh Sanikommu Photo"
        />
        <div className="mx-3">
          <p className="text-md font-medium">Mahesh Sanikommu</p>
          <div className="opacity-60 text-sm">Full Stack Developer</div>
        </div>
      </div>
      <button
        className="bg-yellow-400 px-2 py-1 text-black text-lg"
        onClick={() => {
          window.open("mailto:maheshthedev@gmail.com");
        }}
      >
        hire me
      </button>
    </header>
  );
}
