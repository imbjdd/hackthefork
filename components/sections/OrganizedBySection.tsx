"use client";

export default function OrganizedBySection({ scrollYellowProgress }: { scrollYellowProgress: number }) {
  return (
    <section className="vroom flex flex-col items-center justify-center gap-12 bg-white">
      <div className="container flex items-center justify-center px-4 md:px-8 xl:px-12">
        <div className="flex flex-col gap-8 text-center max-w-4xl">
          <p className="text-2xl font-bold text-[#000091]">Organized by</p>
          <div className="flex flex-row gap-4 justify-center">
            <a href="https://www.institut-condition-animale.fr/" target="_blank">
              <img 
                src="/logo_ica.png" 
                alt="ICA Logo"
                height={122*(scrollYellowProgress+0.8)} 
                width={208*(scrollYellowProgress+0.8)}
              />
            
          </div>
        </div>
      </div>
    </section>
  );
} 