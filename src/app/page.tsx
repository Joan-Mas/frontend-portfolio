import Top from "@/components/top";

export default function Home() {
  return (
    
      <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
        <div style={{ position: "fixed", top: "0", left: "0", width: "100%" }}>
        <Top />
      </div>
      <div className="basis-1/12"></div>
        <div className="basis-10/12 font-normal text-justify flex items-center justify-center flex-col p-16"><h1>My name is Joan Mas. I am JavaScript Fullstack Developer.</h1> Technical and creative, I design and develop web and mobile applications. I propose innovative and concrete solutions in order to optimize interfaces and solve specific problems.</div>
        <div className="basis-1/12"></div>
      </div>
    
  );
}
