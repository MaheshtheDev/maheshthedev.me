export default function Postcard() {
  return (
    <div className="relative rounded-xl px-3 py-2 bg-[#1B1818] h-32 w-44 mr-3">
      <p className="text-white font-medium text-md">Web Dev's 2021 Rewind</p>
      <a
        href="#"
        className="text-[#A1B6EE] flex absolute text-sm font-medium inset-x-0 bottom-0 p-3"
      >
        Read Article
        <img src="/arrow_st.svg" className="pl-1 pt-[2px] hover:pl-2"/>
      </a>
    </div>
  );
}
