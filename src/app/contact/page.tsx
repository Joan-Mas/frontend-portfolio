import Top from "@/components/top";
import NavBar from "@/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
      <div className="basis-1/12">
        <Top />
      </div>
      <div className="basis-10/12 font-normal text-justify flex flex-col items-center justify-center p-16">
        <div className="pb-4">Need a service, expertise or advice. Get in touch.</div>
        <div className=" bg-slate-50 flex items-center justify-center border-2 rounded-3xl h-8 w-56 p-1 text-black">
        <FontAwesomeIcon icon={faEnvelope} className="h-6 pr-1"/>joan.mas23@gmail.com
        </div>
      </div>
      <div className="basis-1/12">
        <NavBar />
      </div>
    </div>
  );
}
