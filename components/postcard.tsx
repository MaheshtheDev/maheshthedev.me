import { Article } from "./types";

export default function Postcard(props : {article: Article}) {
  return (
    <div className="relative rounded-xl px-3 py-2 bg-[#1B1818] h-32 w-44 mr-3">
      <p className="text-white font-medium text-md">{props.article.title}</p>
      <a
        href={"https://blog.maheshthedev.me/" + props.article.slug}
        className="text-[#A1B6EE] flex absolute text-sm font-medium inset-x-0 bottom-0 p-3 hover:transiti"
      >
        <span className="hover:pr-1">Read Article</span>
        <img src="/arrow_st.svg" className="pl-1 pt-[2px]" />
      </a>
    </div>
  );
}
