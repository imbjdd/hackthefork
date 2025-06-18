"use client";
import React from "react";

export default function Navbar({ scrollToSection }: { scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void }) {
  return (
    <nav className="flex w-screen border-b justify-between backdrop-blur-xl bg-white/80 items-center fixed top-0 left-0 right-0 z-40 py-4">
      <div className="container flex flex-row justify-between items-center mx-auto px-4 md:px-8 xl:px-12">
        <div className="flex flex-row items-center gap-4 justify-between w-full">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="cursor-pointer">
            <h1 className="text-base md:text-lg font-bold text-[#000091]">Hack_the_Fork<span className="text-xs md:text-sm font-light italic animate-pulse">_2025</span></h1>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#challenge" onClick={(e) => scrollToSection(e, 'challenge')} className="text-[#000091] hover:text-[#000091]/80 transition-colors">Challenge</a>
            <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} className="text-[#000091] hover:text-[#000091]/80 transition-colors">Speakers</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-[#000091] hover:text-[#000091]/80 transition-colors">FAQ</a>
          </div>
          <div className="text-base md:text-lg bg-[#000091] text-white px-3 md:px-4 py-2 rounded-lg font-bold"><a target="_blank" href="https://lu.ma/6vtlc0y1">Participate</a></div>
        </div>
      </div>
    </nav>
  );
} 