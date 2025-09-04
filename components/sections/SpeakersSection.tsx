"use client";
import Image from "next/image";
import TitleAnimation from '../TitleAnimation';

type Speaker = {
  name: string;
  image: string;
  description: string;
};

export default function SpeakersSection({ speakers }: { speakers: Speaker[] }) {
  return (
    <div id="speakers" className="flex py-20 md:py-32 flex-col items-center justify-center gap-12 bg-blue-100">
      <div className="container flex flex-col gap-4 px-4 md:px-8 xl:px-12">
        <TitleAnimation 
            text="Speakers, Mentors & Organizers" 
            className="text-2xl font-bold"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {speakers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map((speaker) => (
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
                <p className="text-sm md:text-base text-black/80">{speaker.description}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
} 