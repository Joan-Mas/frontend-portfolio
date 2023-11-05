import Top from "@/components/top";
import NavBar from "@/components/navbar";
import Image from "next/image";

export default function About() {
  const imageStyle = {
    borderRadius: "50%",
    border: "2px solid #fff",
  };

  return (
    <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
      <div className="basis-1/12">
        <Top />
      </div>
      <div className="basis-10/12 font-normal flex flex-col items-center border-2 m-6 rounded-3xl bg-gray-500/20">
        

        <div className="flex flex-col p-4 text-sm text-left">
          <div>Language : JavaScript / TypeScript / Java / HTML / CSS</div>
          <div className="pt-1">Library : React</div>
          <div className="pt-1">
            Framework : Next.js / Express.js / Tailwind.css / React Native /
            Angular
          </div>
          <div className="pt-1">Platform : Node.js / Expo</div>
          <div className="pt-1">Database : MongoDB/NoSQL</div>
          <div className="pt-1">IDE : Visual Studio Code / Eclipse</div>
        </div>

        <div className=" bg-violet-600 flex items-center justify-center border-2 rounded-3xl h-8 w-24 m-2">
          My CV
        </div>

        {/* <div className="flex flex-col items-center p-4">
          <Image
            src="/profil.png"
            width={80}
            height={80}
            alt="project's visual"
            style={imageStyle}
            className="mt-4"
          />
        </div> */}
      </div>
      <div className="basis-1/12">
        <NavBar />
      </div>
    </div>
  );
}
