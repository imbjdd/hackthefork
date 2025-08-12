"use client";

export default function HeroSection() {
  return (
    <div className="relative z-10 bg-white min-h-screen flex">
      <div className="flex-grow grow md:m-18 md:mt-36 overflow-hidden md:rounded-xl" style={{ backgroundImage: `url(/bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex bg-gradient-to-r from-[#000091]/92 via-[#000091]/80 to-[#000091]/70 text-white flex-col pt-24 md:pt-0 px-8 overflow-hidden md:overflow-visible md:px-0 items-center justify-center w-full h-full relative">
        <div className="container h-fit flex flex-col md:justify-center gap-4 px-0 md:px-8 xl:px-12">
          <div className="flex flex-col text-left gap-6">
            <h1 className="text-3xl md:text-6xl font-bold">Hack the Fork</h1>
            <h1 className="text-3xl md:text-6xl font-light italic -mt-6">AI solutions for the Future of Food</h1>
            <p className="text-white font-normal text-xl">Hackathon organized by ICA with <span className="font-bold">150 builders</span> and <span className="font-bold">$6000</span> cash prize.</p>
            <p className="text-white font-normal text-xl -mt-6">Register now to join the best builders in the world.</p>
            <p className="text-xl font-bold text-white">Paris, France / 22-23 November 2025</p>
            <a href="https://lu.ma/6vtlc0y1" target="_blank" className="bg-white text-[#000091] font-bold px-6 py-2 rounded-lg w-fit cursor-pointer">Register Now</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
} 