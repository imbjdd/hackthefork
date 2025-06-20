"use client";
import { Button } from "@/components/ui/button";
import { Pointer } from "@/components/magicui/pointer";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

export default function PartnersSection() {

  const customCommandMap = {
    "hack@hackthefork.com": "hack@hackthefork.com"
  };

  return (
    <div id="partners" className="relative min-h-screen flex flex-col items-center text-white justify-center gap-12 bg-[#000091] z-50">
      <Pointer className="fill-white" />
      <div className="container flex flex-col gap-4 px-4 md:px-8 xl:px-12 relative h-screen py-40 flex flex-col justify-center">
        <div className="relative flex flex-row gap-4 relative w-fit">
          <p className="text-3xl md:text-5xl font-semibold">Let&apos;s create something amazing together      </p>
          <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-r from-transparent to-[#000091]">
          </div>
        </div>
        <div className="flex flex-row gap-4 py-8">
            <Button className="bg-white text-black md:px-12 md:py-8 rounded-none font-bold hover:bg-white/80 cursor-none">Contact Us</Button>
        </div>
        <div className="flex flex-row gap-4 absolute bottom-40 items-center justify-center">
            <ScriptCopyBtn
      showMultiplePackageOptions={false}
      codeLanguage="shell"
      lightTheme="tokyo-night"
      darkTheme="tokyo-night"
      className="text-black"
      commandMap={customCommandMap}
    />
        </div>
      </div>
      <div className="h-18 w-18 aspect-square absolute bottom-0 right-0 bg-white"></div>
      <div className="h-18 w-18 aspect-square absolute bottom-18 right-18 bg-white"></div>
    </div>
  );
} 