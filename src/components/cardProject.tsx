import Image from "next/image";
import temp from "public/rdm.jpg"

export default function CardProject() {
  const imageStyle = {
    borderRadius: "25%",
    border: "2px solid #fff",
    width: "50%",
    height: "20%",
  };

  return (
    <div className="flex flex-col items-center justify-center text-base font-normal text-center">
      <Image
        src={temp}
        sizes="30%"
        alt="project's visual"
        style={imageStyle}
      />
      <div className="p-4">Name of the project | Name of the Entreprise</div>
      <div className="pt-4">Link to GitHub</div>
    </div>
  );
}
