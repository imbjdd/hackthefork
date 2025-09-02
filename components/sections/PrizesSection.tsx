"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator"

export default function TracksSection() {
  const [isHoveringFirst, setIsHoveringFirst] = useState(false);
  const [isHoveringSecond, setIsHoveringSecond] = useState(false);
  const [isHoveringThird, setIsHoveringThird] = useState(false);

  return (
    <div id="challenge" className="flex flex-col items-center justify-center gap-0 py-20 md:py-32">
      <div className="container px-4">
      <h1 className="text-2xl font-bold">Prizes</h1>
        <div className="flex flex-col md:flex-row justify-between w-full gap-12 pt-8 text-left">
            <div className="flex md:w-1/2 flex-row grow gap-4 bg-white rounded-lg justify-center items-center">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col gap-2 ">
                        <p className={`text-3xl md:text-6xl font-semibold transition-opacity duration-300 ${isHoveringSecond || isHoveringThird ? 'opacity-30' : ''}`}>
                          <span className="text-yellow-400 font-bold text-2xl">1st.</span> 3000$
                        </p>
                        <p className={`text-normal transition-opacity duration-300 ${isHoveringSecond || isHoveringThird ? 'opacity-30' : ''}`}>
                          Winners will also have the opportunity to pitch their project to deeptech investors.
                        </p>
                        <Separator className={`mt-4 bg-[#000091] transition-opacity duration-300 ${isHoveringFirst || isHoveringSecond || isHoveringThird ? 'opacity-30' : ''}`} />
                    </div>
                    <div className="flex h-28 items-center space-x-4 text-sm">
                        <p className={`text-3xl md:text-6xl font-semibold transition-opacity duration-300 ${isHoveringFirst || isHoveringThird ? 'opacity-30' : ''}`}>
                          <span className="text-gray-400 font-bold text-2xl">2nd.</span> 2000$
                        </p>
                        <Separator orientation="vertical" className={`bg-[#000091] transition-opacity duration-300 ${isHoveringFirst || isHoveringSecond || isHoveringThird ? 'opacity-30' : ''}`} />
                        <p className={`text-3xl md:text-6xl font-semibold transition-opacity duration-300 ${isHoveringFirst || isHoveringSecond ? 'opacity-30' : ''}`}>
                          <span className="text-orange-400 font-bold text-2xl">3rd.</span> 1000$
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex w-1/2 flex-row grow gap-4 bg-white rounded-lg items-end justify-center">
                <div 
                  className="w-20 h-20 bg-orange-400 rounded flex items-end justify-center text-white font-bold cursor-pointer"
                  onMouseEnter={() => setIsHoveringThird(true)}
                  onMouseLeave={() => setIsHoveringThird(false)}
                >
                    <p className="mb-4">3rd</p>
                </div> 
                <div 
                  className={`w-20 h-40 bg-gray-400 rounded flex items-end justify-center text-white font-bold transition-opacity duration-300 cursor-pointer ${isHoveringFirst || isHoveringThird ? 'opacity-30' : ''}`}
                  onMouseEnter={() => setIsHoveringSecond(true)}
                  onMouseLeave={() => setIsHoveringSecond(false)}
                >
                    <p className="mb-4">2nd</p>
                </div>
                <div 
                  className={`w-20 h-80 bg-yellow-400 rounded flex items-end justify-center text-white font-bold transition-opacity duration-300 cursor-pointer ${isHoveringSecond || isHoveringThird ? 'opacity-30' : ''}`}
                  onMouseEnter={() => setIsHoveringFirst(true)}
                  onMouseLeave={() => setIsHoveringFirst(false)}
                >
                    <p className="mb-4">1st</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
} 