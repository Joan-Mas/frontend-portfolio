import Image from "next/image";

export default function CardProject() {
  const imageStyle = {
    borderRadius: "20%",
    border: "2px solid #fff",
  };

  return (
    <div className="flex flex-col items-center justify-center text-base font-normal text-center">
      <Image
        src="/rdm.jpg"
        width={200}
        height={200}
        alt="project's visual"
        style={imageStyle}
      />
      <div className="p-4">Name of the project | Name of the Entreprise</div>
      <div className="p-4">Link to GitHub</div>
    </div>
  );
}
