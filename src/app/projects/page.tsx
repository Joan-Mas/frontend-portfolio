import Top from "@/components/top";
import CardProject from "@/components/cardProject";

export default function Projects() {
  return (
    <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
      <div style={{ position: "fixed", top: "0", left: "0", width: "100%" }}>
        <Top />
      </div>
      <div className="basis-4/12"></div>
      <div className="basis-7/12 items-center justify-center">
        <CardProject/>
      </div>
      <div className="basis-1/12">
        
      </div>
    </div>
  );
}
