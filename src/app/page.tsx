import Top from "@/components/top";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    
      <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
        <div className="basis-1/12"><Top/></div>
        <div className="basis-10/12 font-normal text-justify flex items-center justify-center p-16">Technical and creative, I design and develop web and mobile applications. I propose innovative and concrete solutions in order to optimize interfaces and solve specific problems.</div>
        <div className="basis-1/12"><NavBar/></div>
      </div>
    
  );
}
