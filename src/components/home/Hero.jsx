"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import routes from "@/utils/routes";
import dynamic from "next/dynamic";

const WorldMapAnimation = dynamic(
  () => import("@/components/animations/hero/WorldMap"),
  { ssr: false }
);

const Hero = () => {
  const videoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [cardInView, setCardInView] = useState(false);
  const [mapCardInView, setMapCardInView] = useState(false);
  const cardRef = useRef(null);
  const mapCardRef = useRef(null);

  // Detect mobile or reduced motion
  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      return /android/i.test(ua) || /iPad|iPhone|iPod/.test(ua);
    };
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setPrefersReducedMotion(reduceMotion);
    setIsMobile(checkMobile() || reduceMotion);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCardInView(true);
      return;
    }

    const node = cardRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setCardInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCardInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const currentNode = node;
    observer.observe(currentNode);
    return () => {
      observer.unobserve(currentNode);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setMapCardInView(true);
      return;
    }

    const node = mapCardRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setMapCardInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setMapCardInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    const currentNode = node;
    observer.observe(currentNode);
    return () => {
      observer.unobserve(currentNode);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative w-full overflow-hidden md:min-h-[800px] md:max-h-[1000px] hero-section">      {/* Background Poster Image */}
      <Image
        src="/images/home/hero-bg.jpeg"
        alt="Hero Background"
        fill
        priority
        quality={isMobile ? 75 : 85}
        sizes="100vw"
        className="object-cover z-[-2]"
        // placeholder="blur"
      />

      {/* Left to right black gradient overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000] to-[#000000]/30 z-10"></div> */}

      {/* Bottom gradient */}
      <div className="bg-gradient-to-t h-[300px] from-black to-transparent absolute bottom-0 left-0 w-full z-10"></div>

      {/* Content */}
      <div className="section-width relative z-20">
        <div className="h-fit w-fit text-center items-center justify-center sm:justify-start sm:text-start flex flex-col relative pt-36">
          <div className="lg:py-32  md:py-24 py-20">
            {/* Heading - Desktop */}
            <h1 className="2xl:text-[80px] xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl xl:max-w-max  lg:max-w-3xl md:max-w-2xl sm:max-w-lg font-medium text-[#FAFAFA] sm:mb-4 2xl:leading-[120px] xl:leading-tight lg:leading-tight md:leading-tight ">
              Plan.{"  "}
              <span className="bg-gradient-to-b px-1 font-bold from-[#99B5FF] to-[#1A5BFF] bg-clip-text text-transparent">
                Audit. <br /> Optimize.
              </span>{" "}
              Repeat.
            </h1>

            {/* Description */}
            <div className="flex w-full h-full justify-center sm:justify-start items-center mb-3 sm:mb-6  ">
              <p className=" text-[#E6E6E6]  max-w-xs lg:max-w-xl sm:max-w-xl">
                A suite of intelligent agents that monitor, analyze, and
                optimize campaigns continuously, ensuring every dollar delivers.
              </p>
            </div>
            {/* btn */}
            <Link href={routes.Calculator} className="self-start">
              <button className="bg-white  text-[#2C5CDE] font-medium px-6 py-2 rounded-lg self-start  hover:scale-105">
                Get a demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero dashboard card */}
      <div
        ref={cardRef}
        className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-[min(45vw,720px)] justify-center z-10 pointer-events-none transform-gpu transition-all duration-[1500ms] ease-in-out ${
          cardInView
            ? "translate-x-0 opacity-100"
            : "translate-x-[25%] opacity-0"
        }`}
      >
        <div className="relative w-full   ">
          <div className="relative w-full  overflow-hidden">
            <Image
              src="/images/home/main-dashboard.png"
              alt="Auditee platform main dashboard"
              width={1280}
              height={800}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Hero world map card */}
      <div
        ref={mapCardRef}
        className={`hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 w-[min(32vw,360px)] justify-center z-20 pointer-events-none transform-gpu transition-all duration-[1500ms] ease-in-out ${
          mapCardInView
            ? "translate-y-0 opacity-100"
            : "translate-y-[25%] opacity-0"
        }`}
      >
        <div className="relative w-full overflow-hidden aspect-[8/5] rounded-2xl border-[3px] border-white ">
          <WorldMapAnimation
            className="w-full h-full  object-contain"
            shouldPlay={mapCardInView}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
