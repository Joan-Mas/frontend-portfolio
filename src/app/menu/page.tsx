import Top from "@/components/top";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
      <div className="basis-1/12">
        <Top />
      </div>
      <div className="basis-10/12 font-normal text-justify flex flex-col items-center justify-around p-16 text-3xl">
        <div><Link href="/">Home</Link></div>
        <div><Link href="/projects">Projects</Link></div>
        <div><Link href="/about">About</Link></div>
        <div><Link href="/contact">Contact</Link></div>
      </div>
      <div className="basis-1/12">
      </div>
    </div>
  );
}
