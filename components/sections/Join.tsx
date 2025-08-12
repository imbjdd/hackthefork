"use client";

export default function SpeakersSection() {
  return (
    <div
      id="speakers"
      className="flex py-20 md:py-32 flex-col items-center justify-center gap-12 bg-gradient-to-r from-[#000091] via-[#2323b8] to-red-800 text-white"
    >
      <div className="container flex flex-col gap-4 px-4 md:px-8 xl:px-12">
        <h1 className="text-2xl font-bold">Join the Hackathon, now!</h1>
        <p className="text-lg md:text-xl max-w-5xl">
          Join us for an exciting hackathon where you can collaborate with like-minded individuals, learn from industry experts, and create innovative solutions. Whether it&apos;s your first hackathon or you&apos;re an experienced developer, we welcome you to be a part of this amazing adventure.
        </p>
        <div className="text-base md:text-lg bg-white text-[#000091] w-fit px-3 md:px-4 py-2 rounded-lg font-bold"><a target="_blank" href="https://lu.ma/6vtlc0y1">Join Now</a></div>
      </div>
    </div>
  );
} 