"use client";
import { Pointer } from "@/components/magicui/pointer";

export default function HeroSection({ imagepsahtek }: { imagepsahtek: string }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen md:h-screen pt-24 pb-48 md:pt-0 md:pb-0">
      <div className="container h-fit flex flex-col justify-center items-center gap-4 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col text-center">
          <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-bold">Time to</h1>
            <div className="relative">
              <img src={imagepsahtek} alt="build" className="w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 aspect-square -rotate-12 rounded-xl" />
              <Pointer className="z-50">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" className="fill-black" />
                  <circle cx="12" cy="12" r="5" className="fill-white" />
                </svg>
              </Pointer>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-bold">Build</h1>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light italic -mt-2 md:-mt-2">a new way to eat</h1>
        </div>
        <p className="text-base md:text-lg font-bold text-[#000091]">8-9 November 2025</p>
      </div>
      <div className="container justify-center md:justify-end md:absolute md:bottom-6 md:bottom-12 mx-auto flex flex-row gap-2 md:gap-4 mt-12 px-4 md:px-8 xl:px-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold"><span className="text-[#000091]">150</span> Builders</h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold">-</h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold"><span className="text-[#000091]">$3000</span> Cash Prize</h1>
      </div>
    </div>
  );
} 