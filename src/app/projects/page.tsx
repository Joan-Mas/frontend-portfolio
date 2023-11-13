import Top from "@/components/top";
import Image from "next/image";
import React, { useState } from 'react';



export default function Projects() {
  const slides = [
    {url : "/rdm.jpg"},
    {url : "/profil.png"},
    {url : "/rdm.jpg"},
  ];

  const imageStyle = {
    borderRadius: "15%",
    border: "2px solid #fff",
  };



  return (
    <div className="flex flex-col h-screen text-center bg-[url('/bg.gif')] bg-cover bg-no-repeat text-white">
      <div style={{ position: "fixed", top: "0", left: "0", width: "100%" }}>
        <Top />
      </div>
      <div className="basis-4/12"></div>
      <div className="basis-7/12 items-center justify-center ">
        <div className="flex flex-col items-center justify-center text-base font-normal text-center p-8">
         
          <Image
            src={slides[0].url}
            sizes="50%"
            alt="project's visual"
            width="300"
            height="300"
            style={imageStyle}
            className="duration-500"
          />
          
          <div className="p-4">
            Name of the project | Name of the Entreprise
          </div>
        </div>
      </div>
      <div className="basis-1/12"></div>
    </div>
  );
}
