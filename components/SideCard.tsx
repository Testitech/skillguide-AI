"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Sliders = {
  id: number;
  img: string;
  text: string;
};

const slides: Sliders[] = [
  {
    id: 1,
    img: "/images/ai-agent.png", // put your illustration path here
    text: "Track your progress easily with smart insights.",
  },
  {
    id: 2,
    img: "/images/chat-with-ai.png",
    text: "Get AI assistance tailored to your needs.",
  },
  {
    id: 3,
    img: "/images/in-progress.png",
    text: "Watch your growth accelerate with our tools.",
  },
  {
    id: 4,
    img: "/images/futuristic-interface.png",
    text: "Build confidence as you achieve milestones.",
  },
  {
    id: 5,
    img: "/images/artificial-intelligence.png",
    text: "Build confidence as you achieve milestones.",
  },
  {
    id: 6,
    img: "/images/group-chat.png",
    text: "Build confidence as you achieve milestones.",
  },
  {
    id: 7,
    img: "/images/futuristic-interface.png",
    text: "Build confidence as you achieve milestones.",
  },
  {
    id: 8,
    img: "/images/choose.png",
    text: "Build confidence as you achieve milestones.",
  },
];

export default function SideCard() {
  // const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen w-full mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slid) => (
            <div
              key={slid.id}
              className="flex-shrink-0 w-full h-auto space-y-5 flex flex-col items-center justify-center"
            >
              <p className="sm:text-4xl text-2xl font-medium text-blue-100 w-[45%] text-center">
                {slid.text}
              </p>
              <Image
                src={slid.img}
                alt={slid.text}
                loading="lazy"
                height={400}
                width={500}
                className="sm:w-[500px] w-[350px] h-[200px] sm:h-[350px] object-cover mt-5 rounded-2xl mb-4 drop-shadow-blue-100 drop-shadow-md"
              />
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="absolute w-full flex justify-center bottom-4 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full border border-white ${
                index === current ? "bg-white" : "bg-blue-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
