"use client";
import { Pointer } from "@/components/magicui/pointer";

export default function HeroSection({ imagepsahtek }: { imagepsahtek: string }) {
  return (
    <div className="relative z-10 bg-white min-h-screen flex">
      <div className="flex-grow grow md:m-24 md:mt-42 rounded-xl overflow-hidden" style={{ backgroundImage: `url(/bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex bg-[#000091]/90  text-white flex-col pt-24 md:pt-0 px-8 overflow-hidden md:overflow-visible md:px-0 items-center justify-center w-full h-full rounded-xl relative">
        <div className="container h-fit flex flex-col md:justify-center md:items-center gap-4 px-0 md:px-8 xl:px-12">
          <div className="absolute bottom-0 right-0 h-12 w-12 bg-white rounded-tl-xl"></div>
          <div className="flex flex-col text-center gap-6">
            <div className="flex items-center justify-center gap-12 flex-col md:flex-row">
              <h1 className="text-3xl md:text-6xl font-bold">Hack_the_Fork</h1>
              {/*<div className="relative">
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
              </div>*/}
            </div>
            <h1 className="text-3xl md:text-6xl font-light italic -mt-6">AI solutions for the Future of Food</h1>
            <p className="text-white font-normal text-xl">Hacathon organized by ICA with <span className="font-bold">150 builders</span> and <span className="font-bold">$6000</span> cash prize</p>
          </div>
          <p className="text-xl font-bold text-white">Paris, France / 8-9 November 2025</p>
          <a href="https://lu.ma/6vtlc0y1" target="_blank" className="bg-white text-[#000091] font-bold px-4 py-2 rounded-md">Register Now</a>
        </div>
      </div>
      </div>
    </div>
  );
} 