"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface Props {
    name: string;
    videoSrc: string;
    thumbnail: string;
}

export default function ModelVideoCard({ name, videoSrc, thumbnail }: Props) {
    const [play, setPlay] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 768); // móvil si < 768px (Tailwind md breakpoint)
        }
    }, []);

    return (
        <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg relative">
            {play && isMobile ? (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    <video
                        src={videoSrc}
                        controls
                        autoPlay
                        className="h-screen w-full object-cover"
                    />
                    <Button
                        onClick={() => setPlay(false)}
                        className="absolute top-4 right-4 z-50 bg-white text-black"
                    >
                        ✕
                    </Button>
                </div>
            ) : play && !isMobile ? (
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
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black rounded-full p-4 z-10 transition"
                    >
                        <Play className="w-8 h-8" />
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