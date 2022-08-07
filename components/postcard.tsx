import { Article } from "./types";

export default function Postcard(props : {article: Article}) {
  return (
    <div className="relative rounded-xl py-2 px-3 bg-[#1B1818] mr-3 w-44 h-36">
      <p className="text-white font-medium text-md">{props.article.title}</p>
      <a
        href={"https://blog.maheshthedev.me/" + props.article.slug}
        className="text-[#A1B6EE] flex absolute text-sm rounded-lg font-medium inset-x-0 bottom-0 p-3 hover:transition"
      >
        <span className="hover:pr-1">Read Article</span>
        <img src="/arrow_st.svg" className="pl-1 pt-[2px]" alt="Arrow_icon" />
      </a>
    </div>
  );
}
