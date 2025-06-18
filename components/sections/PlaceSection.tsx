"use client";
import { Pointer } from "@/components/magicui/pointer";
import Image from "next/image";

export default function PlaceSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <div className="container px-4 md:px-8 xl:px-12 flex items-center justify-center">
        <Pointer className="fill-[#000091]" />
        <Image className="rounded-lg max-w-5xl w-full" src="/albertschool.jpg" alt="Place" width={1000} height={1000} />
      </div>
      <p className="text-2xl max-w-4xl px-4 md:px-8 xl:px-12">The event will take place at <span className="font-bold text-[#000091]">Albert School</span> in Paris, France.</p>
    </section>
  );
} 