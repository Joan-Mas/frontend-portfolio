import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row h-full p-4 pb-8">
      <div className="basis-1/3 flex items-center justify-center">
      <Link href="/menu"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className="h-8" /></Link>
      </div>
      <div className="basis-1/3 flex items-center justify-center">
      <a href="https://github.com/Joan-Mas"><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} className="h-8" /></a>
      </div>
      <div className="basis-1/3 flex items-center justify-center">
        <a href="https://www.linkedin.com/in/joan-mas-81810913a/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} className="h-8" /></a>
      </div>
    </div>
  );
}
