"use client";
import Image from "next/image";

export default function PlaceSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-20 md:py-32">
      <div className="container px-4 md:px-8 xl:px-12 flex items-center justify-center">
        <div className="overflow-hidden rounded-lg max-w-5xl w-full transition-transform duration-300">
          <Image
            className="rounded-lg w-full transition-transform duration-300 hover:scale-110"
            src="/albertschool.jpg"
            alt="Place"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <p className="text-2xl max-w-4xl px-4 md:px-8 xl:px-12">
        The event will most likely take place at <span className="font-bold text-[#000091]">Albert School</span> in Paris, France.
      </p>
    </div>
  );
} 