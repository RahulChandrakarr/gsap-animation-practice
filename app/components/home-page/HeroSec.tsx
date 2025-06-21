"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSec() {
  const redBoxRef = useRef<HTMLDivElement>(null);
  const backgroundbox = useRef<HTMLDivElement>(null);
  const textDivBox = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    // Scale animation for red box
    gsap.fromTo(
      redBoxRef.current,
      {
        scale: 1,
        transformOrigin: "top right",
      },
      {
        scale: 0.2,
        transformOrigin: "top right",
        scrollTrigger: {
          trigger: backgroundbox.current,
          start: "top top",
          end: "bottom+=300 top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    // Word-by-word animation for text
    const words = wordRefs.current;
    gsap.set(words, { opacity: 0, y: 20 });

    gsap.to(words, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: backgroundbox.current,
        start: "top+=5% top",
        end: "bottom top+=60%",
        scrub: true,
        
      },
    });
  }, []);

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae architecto fugit excepturi necessitatibus dolore?";

  const splitWords = text.split(" ");

  return (
    <>
      <div
        ref={backgroundbox}
        className="h-[400vh] p-4 relative "
      >
        {/* Sticky container */}
        <div className="sticky  top-0 left-0 w-full h-[calc(100vh-2rem)] overflow-hidden">
          {/* Red Box */}
          <div
            ref={redBoxRef}
            className="w-full h-full rounded-2xl mt-4"
            style={{ transformOrigin: "top right" }}
          >
             <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
              src="/home-page/11904073_3840_2160_30fps.mp4"
            />
          </div>

          {/* Text box inside red box, bottom-left aligned */}
          <div
            ref={textDivBox}
            className="absolute bottom-4 left-4 text-black text-xl max-w-xl font-serif"
          >
            {splitWords.map((word, i) => (
              <span
                key={i}
                ref={(el) => {(wordRefs.current[i] = el!)}}
                className="inline-block mr-2"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-yellow-400 h-[100vh] relative"></div>
    </>
  );
}
