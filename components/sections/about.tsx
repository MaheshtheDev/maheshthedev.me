import React from 'react'

function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold mt-2">Hi, I&apos;m Mahesh Sanikommu</h1>
      <p>
        (<span className="text-xs text-gray-400">AKA</span>{" "}
        <span className="text-[#52a6de] font-semibold">MaheshtheDev</span>)
      </p>
      <p className="opacity-50 text-sm flex items-center gap-1">
        <TdesignLocation /> Long Beach, CA
      </p>
      <p className="text-md mt-3">
        Full Stack Engineer {". "}
        love to build web, mobile applications and{" "}
        <span className="decoration-double underline decoration-orange-500">
          automate non-creative jobs with web tools
        </span>
      </p>
    </section>
  );
}

export default About;

const TdesignLocation = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7Zm0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001l-.568.39ZM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"
    ></path>
  </svg>
);
