import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";


export default function Top() {
  return (
    <div className="flex flex-row h-full p-4">
      <div className="basis-3/5 flex items-center justify-center">
        <p>
          Joan Mas
          <br />
          FullStack Developer
        </p>
      </div>
      <div className="basis-1/5 flex items-center justify-center">
        <FontAwesomeIcon icon={faToggleOff} style={{color: "#ffffff",}} className="h-8"/>
      </div>
      <div className="basis-1/5 flex items-center justify-center">
        EN
      </div>
    </div>
  );
}
