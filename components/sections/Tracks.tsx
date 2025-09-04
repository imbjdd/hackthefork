"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);


export default function TracksSection() {
  const h1Ref = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useGSAP(() => {
    gsap.to(h1Ref.current, {
      duration: 2,
      scrambleText: {
        text: "3 Tracks",
        chars: "01"
      },
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });

  return (
    <div id="challenge" className="flex flex-col items-center justify-center gap-0 py-20 md:py-32">
      <div className="container px-4">
        <h1 ref={h1Ref} className="text-2xl font-bold">3 Tracks</h1>
        <div className="flex flex-col md:flex-row justify-between w-full gap-4 pt-6 text-left">
            <div className="flex flex-col gap-4 bg-white rounded-lg">
                <h2  className="text-lg font-bold">Consumer</h2>
                <p>
                    Create a digital tool to support consumers in shifting toward sustainable/plant-based diets: automated recipe, recommendations, gamification of the transition, and more.
                </p>
                <p>
                    Combine language models, recommendation algorithms, open data, and a user experience–driven strategy
                </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg">
                <h2 ref={track1Ref} className="text-lg font-bold">Corporation</h2>
                <p>
                    Develop a strategic roadmap for a major food company, to help its transition toward more plant-based products. Involves analyzing consumption data, plant-based ingredient substitution, innovation partnerships, CSR repositioning etc.
                </p>
                <p>
                    Produce a realistic and quantified action plan, integrating relevant AI tools, for a transition towards more sustainability
                </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg">
                <h2 ref={track2Ref} className="text-lg font-bold">Product</h2>
                <p>
                    Design an innovative food product (algae-based, plant-based or cultivated meat) using AI to optimize ingredients, simulate textures, enhance nutritional value.
                </p>
                <p>
                    Leverage ingredient databases, formulation models, and predictive algorithms to design a viable and distinctive product
                </p>
            </div>
        </div>
      </div>
    </div>
  );
} 