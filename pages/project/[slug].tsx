import { useRouter } from "next/router";
import { Header } from "..";

export default function Page() {
  const { slug } = useRouter().query;
  return <>
    <Header />
    <h1>Project: {slug}</h1>
  </>;
}
