import React from "react";

export default function Socials() {
  const socials = [
    {
      name: "Resume",
      link: "https://go.mtd.wtf/resume",
      icon: <Resume />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/MaheshtheDev",
      icon: <XIcon />,
    },
    {
      name: "GitHub",
      link: "https://github.com/MaheshtheDev",
      icon: <GitHubIcon />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/maheshthedev/",
      icon: <LinkedInIcon />,
    },

    {
      name: "Email",
      link: "mailto:maheshthedev@gmail.com",
      icon: <GmailIcon />,
    },
  ];

  return (
    <section className="my-2">
      <div className="flex gap-2">
        {socials.map((social, index) => (
          <a
            key={index}
            className="flex gap-1 items-center bg-[#271f1f] py-1 px-1 rounded-md w-fit transition-transform duration-300 transform hover:scale-105 hover:text-white "
            href={social.link}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="p-1 rounded-sm"
        width={24}
        height={24}
      >
        <title>Read.cv</title>
        <path
          fill="currentColor"
          d="M20.8315 3.36707L8.66861 0.10804C6.98928 -0.34192 5.26312 0.65467 4.81314 2.334L0.94304 16.7773C0.49306 18.4568 1.48966 20.1829 3.16899 20.6328L15.3319 23.892C17.0112 24.3419 18.7373 23.3453 19.1874 21.666L23.0574 7.22254C23.5073 5.54321 22.5108 3.81705 20.8315 3.36707ZM6.33349 2.74138C6.55849 1.90171 7.42156 1.40341 8.26123 1.62841L20.4241 4.88744C21.2637 5.11242 21.762 5.9755 21.537 6.81516L17.6669 21.2586C17.4421 22.0983 16.5789 22.5966 15.7393 22.3715L3.57639 19.1125C2.73671 18.8875 2.23842 18.0245 2.4634 17.1849L6.33349 2.74138ZM8.9669 5.07654C8.54705 4.96404 8.11552 5.2132 8.00302 5.63302C7.89054 6.05285 8.13968 6.4844 8.55952 6.59689L17.6817 9.04116C18.1015 9.15366 18.5331 8.90451 18.6455 8.48468C18.7581 8.06483 18.5089 7.6333 18.0891 7.52081L8.9669 5.07654ZM6.98458 9.43392C7.09708 9.01409 7.52862 8.76493 7.94844 8.87743L17.0706 11.3217C17.4904 11.4342 17.7395 11.8657 17.6271 12.2856C17.5146 12.7054 17.0831 12.9546 16.6632 12.8421L7.54107 10.3978C7.12124 10.2853 6.87208 9.85375 6.98458 9.43392ZM6.93 12.6783C6.51017 12.5658 6.07862 12.815 5.96614 13.2348C5.85364 13.6546 6.1028 14.0861 6.52263 14.1987L11.8439 15.6246C12.2637 15.737 12.6952 15.4879 12.8077 15.0679C12.9202 14.6481 12.6711 14.2167 12.2513 14.1041L6.93 12.6783Z"
        />
      </svg>
      <p>Resume</p>
    </>
  );
}

function XIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="p-1 rounded-sm"
      width={24}
      height={24}
    >
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="p-1 rounded-sm"
      width={24}
      height={24}
    >
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="p-1 rounded-sm"
      width={24}
      height={24}
    >
      <title>GitHub</title>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="p-1 rounded-sm"
      width={24}
      height={24}
    >
      <title>Gmail</title>
      <path
        fill="currentColor"
        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
      />
    </svg>
  );
}
