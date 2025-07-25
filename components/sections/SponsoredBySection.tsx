"use client";
import Image from "next/image";

export type Sponsor = {
  name: string;
  image: string;
  description: string;
};

export default function SponsoredBySection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-20 md:py-32 bg-blue-100">
      <div className="container flex flex-col gap-4 px-4 items-left">
        <h1 className="text-2xl font-bold">Organizer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
            <div className="flex flex-col gap-4 items-center">
              <div className="relative overflow-hidden rounded-lg w-fit h-fit p-6 bg-white">
                <Image
                  className="rounded-lg text-black w-full h-full object-contain p-4"
                  src="/logo_ica.png"
                  alt="ICA"
                  width={600}
                  height={400}
                  style={{ aspectRatio: "3/2" }}
                />
              </div>
              <p className="text-base md:text-lg font-semibold text-center">Institut de la Condition Animale</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold md:mt-8">Partners</h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
            {sponsors
              .slice()
              .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
              .map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col gap-4 items-center">
                  <div className="relative overflow-hidden rounded-lg w-fit h-fit p-6 bg-white">
                    <Image
                      className="rounded-lg text-black w-full h-full object-contain p-4"
                      src={sponsor.image}
                      alt={sponsor.name}
                      width={600}
                      height={400}
                      style={{ aspectRatio: "3/2" }}
                    />
                  </div>
                  <p className="text-base md:text-lg font-semibold text-center">{sponsor.name}</p>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
} 