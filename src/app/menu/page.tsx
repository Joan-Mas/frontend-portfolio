import Top from "@/components/top";
import NavBar from "@/components/navbar";

export default function Menu() {
  return (
    <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
      <div className="basis-1/12">
        <Top />
      </div>
      <div className="basis-10/12 font-normal text-justify flex flex-col items-center justify-around p-16 text-3xl">
        <div>Home</div>
        <div>Projects</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="basis-1/12">
        <NavBar />
      </div>
    </div>
  );
}
