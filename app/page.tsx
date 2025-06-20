"use client";
import { useEffect, useState } from "react";
import { useGsapHome } from "@/lib/useGsapHome";
import {
  type CarouselApi
} from "@/components/ui/carousel"
import { Pointer } from "@/components/magicui/pointer";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ChallengeSection from "@/components/sections/ChallengeSection";
import OrganizedBySection from "@/components/sections/OrganizedBySection";
import SponsoredBySection from "@/components/sections/SponsoredBySection";
import PlaceSection from "@/components/sections/PlaceSection";
import PartnersSection from "@/components/sections/PartnersSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollYellowProgress, setScrollYellowProgress] = useState(0);
  const [imagepsahtek, setImagepsahtek] = useState<string>("/1742235768480.jpeg");

  useGsapHome({
    api,
    setScrollProgress,
    setScrollYellowProgress
  });

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
    })

    console.log('meow')
    console.log(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setImagepsahtek(speakers[i].image)
      i++
      if (i >= speakers.length) {
        i = 0
      }
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  const speakers = [
    {
      name: "Simon Nordmann",
      image: "/FAIRSHOT_-03012025_-_12h24-_A7403709.jpg",
      description: "Director | Institut de la Condition Animale"
    },
    {
      name: "Alice Pjie",
      image: "/Alice.jpg",
      description: "Adjoint director | Institut de la Condition Animale"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "AI @ LinkPact | +7 Hackathon Prize Winner"
    },
    {
      name: "Carole Galissant",
      image: "/Z6XH4AAVUNB4ZMGY4KBNXQQCWA.jpg",
      description: "Presidente Commission Nutrition du SNRC"
    },
    {
      name: "Tom Bry-Chevalier",
      image: "/Bry-Chevalier Tom.jpg",
      description: "PhD candidate | economic and environmental stakes of alternative proteins"
    },
    {
      name: "Guilhem Saïz",
      image: "/Guilhem-Saiz.png",
      description: "Postdoctoral researcher"
    }
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (sectionId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Ajustez cette valeur selon la hauteur de votre navbar
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }} className="scroll-smooth">
      <style>{`
        :root { --full-height: 100vh; }
        section { height: var(--full-height);position: relative; margin-bottom: 2rem; margin-top: 2rem; }
        .red { background: #e63946; color: #fff; }
        .purple { background: #6c47ff; color: #fff; transition: background 0.3s; }
        .blue { background: #000091; color: #fff; }
        .line-1, .line-2, .line-3 { width: 80vw; max-width: 600px; height: 6px; background: #fff; margin: 32px 0; border-radius: 3px; }
      `}</style>

      <Pointer className="z-50">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" className="fill-[#000091]" />
            <circle cx="12" cy="12" r="5" className="fill-white" />
          </svg>
      </Pointer>

      <Navbar scrollToSection={scrollToSection} />
      <HeroSection imagepsahtek={imagepsahtek} />
      <ChallengeSection scrollProgress={scrollProgress} />
      <OrganizedBySection scrollYellowProgress={scrollYellowProgress} />
      <SponsoredBySection setApi={setApi} />
      <PlaceSection />
      <SpeakersSection speakers={speakers} />
      <FAQSection />
      <PartnersSection />
    </div>
  );
}
