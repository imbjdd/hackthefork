"use client";
import { Pointer } from "@/components/magicui/pointer";
import Image from "next/image";

export default function PlaceSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <div className="container px-4 md:px-8 xl:px-12 flex items-center justify-center">
        <Pointer className="z-50">
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" className="fill-[#ffffff]" />
              <circle cx="12" cy="12" r="5" className="fill-white" />
            </svg>
        </Pointer>
        <Image className="rounded-lg max-w-5xl w-full" src="/albertschool.jpg" alt="Place" width={1000} height={1000} />
      </div>
      <p className="text-2xl max-w-4xl px-4 md:px-8 xl:px-12">The event will (probably) take place at <span className="font-bold text-[#000091]">Albert School</span> in Paris, France.</p>
    </section>
  );
} 