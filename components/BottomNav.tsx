"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

const BottomNav = () => {
  const [show, setShow] = useState(true);
  const [selectedNav, setSelectedNav] = useState(0);
  let lastScrollY = 0;

  let navItems = useMemo(
    () => [
      {
        title: "me",
        link: "/",
      },
      {
        title: "baking",
        link: "/baking",
      },
      {
        title: "writes",
        link: "/writes",
      },
    ],
    []
  );

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll Down
      setShow(false);
    } else {
      // Scroll Up
      setShow(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 md:w-9/12 bg-[#1F1717] text-white rounded-full shadow-lg transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
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
