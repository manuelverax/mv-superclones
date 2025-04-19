'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  thumbnail: string;
  videoSrc: string;
}

export function ModelVideoCard({ title, thumbnail, videoSrc }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
      {!showVideo ? (
        <div className="relative">
          <Image
            src={thumbnail}
            alt={title}
            width={600}
            height={600}
            className="w-full h-80 object-cover"
          />
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition text-white text-3xl font-bold"
          >
            ▶
          </button>
        </div>
      ) : (
        <video
          src={videoSrc}
          autoPlay
          controls
          preload="none"
          className="w-full h-80 object-cover"
        />
      )}
      <h3 className="text-xl font-medium my-4 text-white">{title}</h3>
      <Button className="mb-4">Consultar disponibilidad</Button>
    </div>
  );
}
