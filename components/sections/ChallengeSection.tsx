"use client";
import ChartRadialStacked from "@/components/chart";

export default function ChallengeSection({ scrollProgress }: { scrollProgress: number }) {
  return (
    <section id="challenge" className="orange flex flex-col items-center justify-center gap-0 my-24">
      <div className="container text-center px-4 md:px-8 xl:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">A Challenge</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-light italic">for the Future of Food</h1>
      </div>
      <div className="container flex flex-col md:flex-row px-4 md:px-8 xl:px-12">
        <div className="container mt-12 md:mt-24">
          <p className="text-lg md:text-xl xl:text-2xl font-bold text-[#000091]">The Challenge</p>
          <p className="text-base max-w-4xl">Rethink how we feed the planet. Livestock accounts for over 14% of global emissions. Can AI help us create better, cleaner proteins? In this hackathon, you&apos;ll combine Foodtech and artificial intelligence to imagine bold solutions for alt proteins, sustainability, and the future of food itself.</p>
        </div>
        <ChartRadialStacked progress={scrollProgress} />
      </div>
    </section>
  );
} 