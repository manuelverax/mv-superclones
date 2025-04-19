"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  videoSrc: string;
  thumbnail: string;
}

export default function ModelVideoCard({ name, videoSrc, thumbnail }: Props) {
  const [play, setPlay] = useState(false);

  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
      {play ? (
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-80 object-cover"
        />
      ) : (
        <div className="relative">
          <Image
            src={thumbnail}
            alt={name}
            width={600}
            height={600}
            className="w-full h-80 object-cover"
          />
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white bg-black/60 rounded-full p-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 5v14l11-7z"
              />
            </svg>
          </button>
        </div>
      )}
      <h3 className="text-xl font-medium my-4 text-center">{name}</h3>
      <div className="flex justify-center pb-4">
        <Button>Consultar disponibilidad</Button>
      </div>
    </div>
  );
}
