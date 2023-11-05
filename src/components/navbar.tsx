import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <div className="flex flex-row h-full p-4 pb-8">
      <div className="basis-1/3 flex items-center justify-center">
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className="h-8" />
      </div>
      <div className="basis-1/3 flex items-center justify-center">
        <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} className="h-8" />
      </div>
      <div className="basis-1/3 flex items-center justify-center">
        <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} className="h-8" />
      </div>
    </div>
  );
}
