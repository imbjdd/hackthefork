import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CarouselApi } from "@/components/ui/carousel";

export function useGsapHome({
  api,
  setScrollProgress,
  setScrollYellowProgress
}: {
  api?: CarouselApi,
  setScrollProgress: (progress: number) => void,
  setScrollYellowProgress: (progress: number) => void
}) {
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
    gsap.from(".line-2", {
      scrollTrigger: {
        trigger: ".orange",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "+=100%",
      onUpdate: (self) => {
        setScrollProgress(self.progress);
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
        setScrollYellowProgress(self.progress);
      }
    });

    gsap.from(".meow", {
      scrollTrigger: {
        trigger: ".meow",
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
      trigger: ".meow",
      scrub: true,
      start: "top top",
      end: "+=100%",
      onUpdate: (self) => {
        if (api) {
          api.scrollTo(Math.floor(self.progress * api.containerNode().children.length));
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

    // iOS full-height bug workaround
    function readHeight() {
      if (ScrollTrigger.isScrolling()) {
        ScrollTrigger.addEventListener("scrollEnd", readHeight);
      } else {
        ScrollTrigger.removeEventListener("scrollEnd", readHeight);
        window.removeEventListener("resize", readHeight);
        const scrollFunc = ScrollTrigger.getScrollFunc(window),
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
    };
  }, [api, setScrollProgress, setScrollYellowProgress]);
} 