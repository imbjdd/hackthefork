"use client";

import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SponsoredBySection from "@/components/sections/SponsoredBySection";
import PlaceSection from "@/components/sections/PlaceSection";
import PartnersSection from "@/components/sections/PartnersSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import FAQSection from "@/components/sections/FAQSection";
import TracksSection from "@/components/sections/Tracks";

export default function Home() {
  const speakers = [
    {
      name: "Simon Nordmann",
      image: "/FAIRSHOT_-03012025_-_12h24-_A7403709.jpg",
      description: "Director | Institut de la Condition Animale"
    },
    {
      name: "Alice Pjie",
      image: "/Alice.jpg",
      description: "Deputy Director | Institut de la Condition Animale"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "AI @ LinkPact | 8 Hackathon Prize Winner"
    },
    {
      name: "Louan Bardou",
      image: "/louan.png",
      description: "Mentor & Jury Coordinator | HEC & Polytechnique"
    },
    {
      name: "Tom Bry-Chevalier",
      image: "/Bry-Chevalier Tom.jpg",
      description: "PhD candidate | economic and environmental stakes of alternative proteins"
    },
    {
      name: "Guilhem Saïz",
      image: "/Guilhem-Saiz.png",
      description: "Researcher, ENS graduate, working at CEA"
    },
    {
      name: "Romain El Andaloussi",
      image: "/1667986898642.jpeg",
      description: "Food Science Minor Manager | SupBiotech"
    },
    {
      name: "Andrew Blackhood",
      image: "/1718318749927.jpeg",
      description: "R&D Engineer | Imperial College London"
    },
    {
      name: "Tom Effernelli",
      image: "/Photopro Tom.jpg",
      description: "Partners coordinator"
    },
    {
      name: "Ben Issen",
      image: "/1744379765558.jpeg",
      description: "Cofounder Side School"
    }
    
    
  ]

  const sponsors = [
    {
      name: "Jane Goodall Institute France",
      image: "/JGI_MASTER_COUNTRY_LOGO_WHITE_7_France.svg",
      description: "Institut de la Condition Animale"
    },
    {
      name: "Sciences Po Environnement",
      image: "/sciencepo.png",
      description: "Place partner"
    },
    {
      name: "SupBiotech",
      image: "/supbiotech.png",
      description: "Place partner"
    },
    {
      name: "AgroParisTech",
      image: "/agroparistech.png",
      description: "Place partner"
    }
  ];

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
    <div style={{ fontFamily: 'system-ui, sans-serif' }} className="scroll-smooth bg-white">
      <style>{`
        :root { --full-height: 100vh; }
        section { height: var(--full-height);position: relative; }
        .red { background: #e63946; color: #fff; }
        .purple { color: #fff; transition: background 0.3s; }
        .blue { background: #000091; color: #fff; }
        .line-1, .line-2, .line-3 { width: 80vw; max-width: 600px; height: 6px; background: #fff; margin: 32px 0; border-radius: 3px; }
      `}</style>

      {/*<Pointer className="z-50">
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
      </Pointer>*/}

      <div className="fixed left-8 z-50 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 hidden md:block">
        <p className="text-[#000091] font-bold text-lg">Organized by ICA</p>
      </div>

      <Navbar scrollToSection={scrollToSection} />
      <HeroSection />
      <TracksSection />
      {/*<ChallengeSection scrollProgress={scrollProgress} />*/}
      {/*<OrganizedBySection scrollYellowProgress={scrollYellowProgress} />*/}
      <SponsoredBySection sponsors={sponsors} />
      <PlaceSection />
      <SpeakersSection speakers={speakers} />
      <FAQSection />
      <PartnersSection />
    </div>
  );
}
