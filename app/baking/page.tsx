"use client"
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Baking() {
  return (
    <div>
      <header>
        <Image
          onClick={() => redirect("/")}
          src="/logo.svg"
          height={75}
          width={100}
          alt="logo"
        />
      </header>
      <h2>projects i am baking, lately!</h2>
    </div>
  );
}
