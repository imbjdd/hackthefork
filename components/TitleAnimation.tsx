"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

interface TitleAnimationProps {
  text: string;
  className?: string;
  chars?: string;
  duration?: number;
}

export default function TitleAnimation({ 
  text, 
  className = "", 
  chars = "01", 
  duration = 1 
}: TitleAnimationProps) {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.to(titleRef.current, {
      duration,
      scrambleText: {
        text,
        chars
      },
      scrollTrigger: titleRef.current,
    });
  });

  return (
    <h1 ref={titleRef} className={className}>
      {text}
    </h1>
  );
}