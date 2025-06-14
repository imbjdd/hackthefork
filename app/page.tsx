"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import ChartRadialStacked from "@/components/chart"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Pointer } from "@/components/magicui/pointer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollPinkProgress, setScrollPinkProgress] = useState(0);
  const [scrollYellowProgress, setScrollYellowProgress] = useState(0);
  const orangeRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    console.log('meow')
    console.log(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // --- RED PANEL ---
    gsap.from(".line-1", {
      scrollTrigger: {
        trigger: ".line-1",
        scrub: true,
        start: "top bottom",
        end: "top top"
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none"
    });

    // --- ORANGE PANEL ---
    const orangepanel = gsap.from(".line-2", {
      scrollTrigger: {
        trigger: ".orange",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=200%"
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none"
    });

    ScrollTrigger.create({
        trigger: ".orange",
        scrub: true,
        start: "top top",
        end: "+=200%",
      onUpdate: (self) => {
        console.log(
          'progress:',
          self.progress.toFixed(3),
          setScrollProgress(self.progress),
          'direction:',
          self.direction,
          'velocity',
          self.getVelocity()
        );
      }
    });

  
    gsap.from(".vroom", {
      scrollTrigger: {
        trigger: ".vroom",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      },
      scale: 1,
      transformOrigin: "left center",
      ease: "none"
    });
  
    ScrollTrigger.create({
      trigger: ".vroom",
      scrub: true,
      start: "top top",
      end: "+=100%",
    onUpdate: (self) => {
      setScrollYellowProgress(self.progress)
    }
  });

    gsap.from(".meow", {
      scrollTrigger: {
        trigger: ".meow",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=200%"
      },
      scale: 1,
      transformOrigin: "left center",
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: ".meow",
      scrub: true,
      start: "top top",
      end: "+=200%",
    onUpdate: (self) => {
      setScrollPinkProgress(self.progress)
      
      console.log(api)
      if (api) {
        api.scrollTo(Math.floor(self.progress*api.containerNode().children.length))
        console.log('uwu')
        console.log(api.containerNode().children.length)
        console.log(Math.round(self.progress*10))
      }
    }
  });

    // --- PURPLE/GREEN PANEL ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      }
    });
    tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
      .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
      .to(".purple", { backgroundColor: "#28a92b" }, 0);

    // Fonction pour calculer la progression de scroll dans la section orange
    function handleScroll() {
      if (orangeRef.current) {
        const rect = orangeRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        // Distance parcourue depuis que le haut de la section touche le bas du viewport
        const distance = windowHeight - rect.top;
        const percent = Math.min(1, Math.max(0, distance / sectionHeight));
        setScrollProgress(percent);
      }
    }

    //window.addEventListener("scroll", handleScroll);
    // Appel initial pour avoir la bonne valeur au chargement
    //handleScroll();

    // iOS full-height bug workaround
    function readHeight() {
      if (ScrollTrigger.isScrolling()) {
        ScrollTrigger.addEventListener("scrollEnd", readHeight);
      } else {
        ScrollTrigger.removeEventListener("scrollEnd", readHeight);
        window.removeEventListener("resize", readHeight);
        let scrollFunc = ScrollTrigger.getScrollFunc(window),
          maxScroll = ScrollTrigger.maxScroll(window),
          scrollValue = (scrollFunc(0) as unknown as number) || 0,
          scrollProgress = maxScroll === 0 ? 0 : scrollValue / maxScroll,
          docStyle = document.documentElement.style,
          bodyStyle = document.body.style;
        bodyStyle.overflow = "auto";
        docStyle.setProperty("--full-height", "100%");
        docStyle.setProperty("--full-height", window.innerHeight + "px");
        bodyStyle.overflow = "unset";
        setTimeout(function () {
          window.addEventListener("resize", readHeight);
        }, 500);
        ScrollTrigger.refresh(true);
        scrollFunc(scrollProgress * maxScroll);
      }
    }
    readHeight();
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener("resize", readHeight);
      //chartTrigger && chartTrigger.kill();
    };
  }, [api]);

  const speakers = [
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
    {
      name: "Salim Boujaddi",
      image: "/1742235768480.jpeg",
      description: "7 Hackathons Prize Winner"
    },
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
        section { height: var(--full-height);position: relative; }
        .red { background: #e63946; color: #fff; }
        .purple { background: #6c47ff; color: #fff; transition: background 0.3s; }
        .blue { background: #000091; color: #fff; }
        .line-1, .line-2, .line-3 { width: 80vw; max-width: 600px; height: 6px; background: #fff; margin: 32px 0; border-radius: 3px; }
      `}</style>

      <nav className="flex w-screen justify-between backdrop-blur-xl bg-white/80 items-center fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container flex flex-row justify-between items-center mx-auto px-4 md:px-0">
        <div className="flex flex-row items-center gap-4 justify-between w-full">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="cursor-pointer">
            <h1 className="text-base md:text-lg font-bold text-[#000091]">Hack_the_Fork<span className="text-xs md:text-sm font-light italic animate-pulse">_2025</span></h1>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#challenge" onClick={(e) => scrollToSection(e, 'challenge')} className="text-[#000091] hover:text-[#000091]/80 transition-colors">Challenge</a>
            <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} className="text-[#000091] hover:text-[#000091]/80 transition-colors">Speakers</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-[#000091] hover:text-[#000091]/80 transition-colors">FAQ</a>
          </div>

          <div className="text-base md:text-lg bg-[#000091] text-white px-3 md:px-4 py-2 rounded-lg font-bold"><a target="_blank" href="https://lu.ma/6vtlc0y1">Participate</a></div>
        </div>
        </div>
      </nav>


      <section className="bg-white flex flex-col items-center justify-center">
        <div className="container flex flex-col gap-4 px-4 md:px-0">
          <p className="text-base md:text-lg font-bold text-[#000091]">8-9 November 2025</p>
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-8xl font-bold">Time to build</h1>
            <h1 className="text-5xl md:text-8xl font-light italic -mt-2 md:-mt-4">a new way to eat</h1>
          </div>
        </div>

        <div className="absolute container justify-end w-full flex hidden md:flex"> 
          <svg width="735" height="341" viewBox="0 0 735 341" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="735" height="341" fill="url(#pattern0_8_52)"/>
          <defs>
          <pattern id="pattern0_8_52" patternContentUnits="objectBoundingBox" width="0.0816327" height="0.175953">
          <use xlinkHref="#image0_8_52" transform="scale(0.00136054 0.00293255)"/>
          </pattern>
          <image id="image0_8_52" width="60" height="60" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABeSURBVHgB7dgxEYBAEATBfwyjBcVg4gIYuh1M1Ua717jrXqPOvQYd62cE1wmuE1wnuE5wneA6wXWC6wTX7bd/UNNMuk5wneA6wXWC6wTXCa4TXCe47nfBAAAAAPA1DyQpBE82YFfQAAAAAElFTkSuQmCC"/>
          </defs>
          </svg>
        </div>
        <div className="container justify-end absolute bottom-6 md:bottom-12 mx-auto flex flex-row gap-2 md:gap-4 mt-12 px-4 md:px-0">
          <h1 className="text-2xl md:text-4xl font-bold"><span className="text-[#000091]">150</span> Builders</h1>
          <h1 className="text-2xl md:text-4xl font-bold">-</h1>
          <h1 className="text-2xl md:text-4xl font-bold"><span className="text-[#000091]">$3000</span> Cash Prize</h1>
        </div>
      </section>
      <section ref={orangeRef} id="challenge" className="orange flex flex-col items-center justify-center gap-6 md:gap-12">
        <div className="container text-center px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold">A Challenge</h1>
          <h1 className="text-4xl md:text-6xl font-light italic">for the Future of Food</h1>
        </div>

        <div className="container flex flex-col md:flex-row px-4 md:px-0">
          <div className="container mt-12 md:mt-24">
            <p className="text-xl md:text-2xl font-bold text-[#000091]">The Challenge</p>
            <p className="text-lg md:text-2xl max-w-4xl">Rethink how we feed the planet. Livestock accounts for over 14% of global emissions. Can AI help us create better, cleaner proteins? In this hackathon, you'll combine Foodtech and artificial intelligence to imagine bold solutions for alt proteins, sustainability, and the future of food itself.</p>
          </div>

          <ChartRadialStacked progress={scrollProgress} />
        </div>
      </section>
      <section className="vroom flex flex-col items-center justify-center gap-12">
        <div className="container flex items-center justify-center">
          <div className="flex flex-col gap-8 text-center max-w-4xl">
            <p className="text-2xl font-bold text-[#000091]">Organized by</p>
            <div className="flex flex-row gap-4 justify-center">
              <svg preserveAspectRatio="xMidYMid meet" data-bbox="24.122 11.028 583.878 337.747" viewBox="24.122 11.028 583.878 337.747" height={122*(scrollYellowProgress+1)} width={208*(scrollYellowProgress+1)} xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                  <g>
                      <path d="M58.1 12.1c-6.4 1.2-16.2 6.1-20.9 10.3-16.8 15.2-17.5 42.8-1.6 58.1 9.6 9.1 19.4 12.9 33.9 12.9 17.1 0 30.1-6.3 39.1-18.9 7-9.9 8.4-27.3 3.2-38.7-8.4-18.2-31-28.2-53.7-23.7"></path>
                      <path d="M244 107.1c-15.6 1.8-33.3 8.3-46.2 17-8.1 5.5-21.3 18.6-26.8 26.8-15.1 22.5-21.4 45.1-21.4 77.1 0 26.1 3.7 43.6 13 62.2 7.6 15.2 20.3 30.3 33 39.4 30.4 21.8 76.2 25.4 111.3 8.8 17-8 31.3-20.7 40.9-36.3 4.8-7.9 10.3-22.4 11.7-30.7l.6-4.1-14.3-.7c-7.9-.3-18.1-.9-22.8-1.2l-8.6-.6-1.8 5.8c-6.1 19.6-19.5 32.6-38.3 37-5 1.2-9.7 1.5-17.8 1.1-17.4-.8-27-4.9-38.5-16.6-11.5-11.6-17.4-24.6-20.5-45.1-5.4-35.2 3.7-69.2 23.1-86.9 16.5-15.1 44.8-18.5 66.4-7.9 12 5.8 22.8 19.2 26.1 32.2.6 2.6 1.4 4.8 1.8 5 1 .5 43.9-1.9 44.5-2.5 1.1-1.1-3.6-17.5-7.3-25.5-5-10.5-8.9-16.2-17-24.8-21.9-22.8-55.2-33.6-91.1-29.5"></path>
                      <path d="M493.7 109c-31.2 5.3-61.6 28.2-81 61.1-23.9 40.6-29.6 97-13.4 132.2 13.8 29.8 38.5 45 73.2 44.9 20.7-.1 38.7-5.6 56.2-17.1 16-10.6 30.1-25.8 37.4-40.3 1.7-3.3 3.2-5.8 3.4-5.6s-1.8 13.4-4.4 29.3c-2.7 16-4.7 29.3-4.4 29.7.2.5 2.4.8 4.8.8 3.9 0 4.4-.3 4.9-2.7 1.4-6.4 37.6-226.7 37.6-228.5 0-1.7-.6-1.9-4.7-1.6l-4.8.3-5 30.3c-4.6 26.9-6.5 34.7-6.5 26.1 0-4.6-4.7-18-8.7-24.8-4.6-7.9-16-19.4-23.6-24-7.5-4.4-16.4-7.9-24.5-9.6-7.2-1.6-28.4-1.8-36.5-.5m35.7 10.5c36.2 7.7 56.9 45.2 51.7 94-4.2 38.9-16.7 69.1-38.1 91.8-19.9 21.2-42.9 31.7-69.5 31.9-22.7.1-36.3-5-50.1-18.7-9.2-9.1-13.8-16.7-18.3-30-7.7-23.2-6.4-56 3.4-85.9 14.5-44.5 48.9-77.4 87.5-83.9 6.3-1.1 27-.6 33.4.8"></path>
                      <path d="M26.5 112.2c-.3.7-.4 53-.3 116.3l.3 115 43.3.3 43.2.2V111H70c-33.5 0-43.2.3-43.5 1.2"></path>
                  </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="meow flex flex-col items-center justify-center gap-12">
        <div className="container flex items-center justify-center">
          <div className="flex flex-col gap-8 text-center max-w-4xl items-center justify-center">
            <p className="text-2xl font-bold text-[#000091]">Sponsored by</p>
            <Carousel setApi={setApi}>
              <CarouselContent>
                <CarouselItem className="flex items-center justify-center">
                  <Image src="/google-cloud-logo-1.png" alt="Place" width={400} height={400} />
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center">
                  <Image src="/google-cloud-logo-1.png" alt="Place" width={400} height={400} />
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center">
                  <Image src="/google-cloud-logo-1.png" alt="Place" width={400} height={400} />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-12">
        <div>
          <Pointer className="fill-[#000091]" />
          <Image className="rounded-lg max-w-5xl w-full" src="/albertschool.jpg" alt="Place" width={1000} height={1000} />
        </div>
        <p className="text-2xl max-w-4xl">The event will take place at <span className="font-bold text-[#000091]">Albert School</span> in Paris, France.</p>
      </section>
      <div id="speakers" className="flex min-h-screen flex-col items-center justify-center gap-12 px-4 md:px-0">
        <div className="container flex flex-col gap-4">
          <p className="text-xl md:text-2xl font-bold text-[#000091]">Speakers & Mentors</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-lg">
                  <Image 
                    className="rounded-lg w-full transition-transform duration-300 hover:scale-110" 
                    src={speaker.image} 
                    alt="Speaker" 
                    width={400} 
                    height={400} 
                  />
                </div>
                <p className="text-base md:text-lg font-bold">{speaker.name}</p>
                <p className="text-sm md:text-base text-black/50">{speaker.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section id="faq" className="flex items-center justify-center gap-12 px-4 md:px-0">
        <div className="max-w-5xl w-full flex flex-col gap-12">
        <p className="text-xl md:text-2xl font-bold text-[#000091]">FAQ</p>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">What is the hackathon about?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              The hackathon is about building solutions for the future of food. You can build anything you want, as long as it's related to the future of food.
            </p>
          </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">Is it free to participate?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes, it is free to participate.
            </p>
          </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">Is it open to everyone?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Yes, it is open to everyone.
              </p>
            </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
