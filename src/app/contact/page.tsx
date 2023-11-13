import Top from "@/components/top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {  
  return (
    <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
      <div className="basis-1/12" style={{ position: 'fixed', top: '0', left: '0', width: '100%' }}>
        <Top/>
      </div>
      <div className="basis-10/12 font-normal text-justify flex flex-col items-center justify-center p-16">
        <div className="pb-4">Need a service, expertise or advice. Get in touch.</div>
        <a  href="mailto:joan.mas23@gmail.com"className=" bg-slate-50 flex items-center justify-center border-2 rounded-3xl h-8 w-56 p-1 text-black">
        <FontAwesomeIcon icon={faEnvelope} className="h-6 pr-1"/>joan.mas23@gmail.com
        </a>
      </div>
      <div className="basis-1/12">
      </div>
    </div>
  );
}
