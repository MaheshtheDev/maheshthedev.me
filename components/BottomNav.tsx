"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

const BottomNav = () => {
  const [selectedNav, setSelectedNav] = useState(0);

  let navItems = useMemo(
    () => [
      {
        title: "me",
        link: "/",
      },
      {
        title: "building",
        link: "/baking",
      },
      //{
      //  title: "writes",
      //  link: "/writes",
      //},
    ],
    []
  );

  return (
    <div
      className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 md:w-9/12 bg-[#271f1f] text-white rounded-full transition-transform duration-300`}
    >
      <nav className="flex justify-around">
        {navItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`opacity-50 py-2 border-t-2 border-[#1F1717] ${
              selectedNav === index ? "opacity-100 border-white" : ""
            }`}
            onClick={() => setSelectedNav(index)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BottomNav;
