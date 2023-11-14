"use client";

import Top from "@/components/top";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slides = [
    {
      url: "/tendance.jpg",
      nameProject: "TendanceApp",
      nameEmployer: "La Capsule",
      link: "https://github.com/Joan-Mas/frontend-tendance-app",
    },
    {
      url: "/portfolio.jpg",
      nameProject: "Site Portfolio",
      nameEmployer: "Joan Mas",
      link: "https://github.com/Joan-Mas/frontend-portfolio",
    },
    { url: "/rdm.jpg", nameProject: "Work In Progress", nameEmployer: "d-_-b",
    link: "/", },
  ];

  const imageStyle = {
    borderRadius: "5%",
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
          <div className="flex flex-row items-center justify-center">
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              onClick={prevSlide}
              className="h-6 w-full m-2"
            />
            <Link href={slides[currentIndex].link}>
              <Image
                src={slides[currentIndex].url}
                sizes="50%"
                alt="project's visual"
                width="700"
                height="700"
                style={imageStyle}
                className="duration-500"
              />
            </Link>
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              onClick={nextSlide}
              className="h-6 w-full m-2"
            />
          </div>

          <div className="p-4">
            {slides[currentIndex].nameProject} |{" "}
            {slides[currentIndex].nameEmployer}
          </div>
        </div>
      </div>
      <div className="basis-1/12"></div>
    </div>
  );
}
