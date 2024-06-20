import React from 'react'

import Image from "next/image";

import ThemeSwitcher from '../ThemeSwitcher'


function Header() {
  return (
    <header className="flex justify-between items-center my-4">
      <Image
        className="max-w-full rounded-full block"
        src="/me.png"
        width={75}
        height={75}
        alt="Mahesh Sanikommu Photo"
      />
      <ThemeSwitcher />
    </header>
  );
}

export default Header