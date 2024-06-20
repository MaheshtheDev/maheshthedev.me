import React, { useState } from "react";

import blog from "../../data/blogs.json";


function Blogs() {
  const [articles, setArticles] = useState<any[]>(blog);
  
  return (
    <section>
      <div className="flex justify-between my-2 items-center">
        <h2 className="text-xl font-bold text-blue-400">writes</h2>
      </div>
      <ol>
        {articles.length > 0 &&
          articles.map((article, index) => (
            <>
              <li
                className="flex items-center gap-1 w-full py-1 cursor-pointer hover:bg-[#1B1818] rounded-md px-2 my-1 hover:text-white"
                onClick={() => {
                  window.open(article.link, "_blank");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm6 6H5.43a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.07a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-5.32-3h3.57a.75.75 0 0 1 0 1.5H5.18a.75.75 0 0 1 0-1.5"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="flex justify-between w-full">
                  <p className="text-ellipsis">{article.title}</p>
                  <p>→</p>
                </div>
              </li>
            </>
          ))}
      </ol>
    </section>
  );
}

export default Blogs;
