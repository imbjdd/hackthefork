"use client";
import Image from "next/image";

type Speaker = {
  name: string;
  image: string;
  description: string;
};

export default function SpeakersSection({ speakers }: { speakers: Speaker[] }) {
  return (
    <div id="speakers" className="flex min-h-screen flex-col items-center justify-center gap-12">
      <div className="container flex flex-col gap-4 px-4 md:px-8 xl:px-12">
        <p className="text-xl md:text-2xl font-bold text-[#000091]">Speakers, Mentors & Organizers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <Image 
                  className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                  src={speaker.image} 
                  alt="Speaker" 
                  width={400} 
                  height={400}
                  style={{aspectRatio: "1/1"}}
                />
              </div>
              <p className="text-base md:text-lg font-bold">{speaker.name}</p>
              <p className="text-sm md:text-base text-black/50">{speaker.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 