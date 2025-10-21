// components/PagesComponents/intelligence/Methodology.js - Mobile Optimized
"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";

const ContinuousAudit = React.lazy(() =>
  import("@/components/animations/advantage/ContinuousAudit")
);
const OmniChannel = React.lazy(() =>
  import("@/components/animations/advantage/OmniChannel")
);
const AIPoweredInsights = React.lazy(() =>
  import("@/components/animations/advantage/AIPoweredInsights")
);
const CollaborativeLayer = React.lazy(() =>
  import("@/components/animations/advantage/CollaborativeLayer")
);
const RoiValidation = React.lazy(() =>
  import("@/components/animations/advantage/RoiValidation")
);

// Memoized card data - reduced complexity for mobile
const cardsData = [
  {
    title: "Continuous Audit Layer",
    subtitle: "that evaluates campaigns as they run",
    Component: ContinuousAudit,
    size: "lg:w-[50%]",
    cornerClass: "lg:rounded-tl-3xl  ",
    customCardClass: "",
  },
  {
    title: "Omni Channel Visibility",
        subtitle: "across every platform and market",

    Component: OmniChannel,
    size: "lg:w-[50%]",
    background: "/images/services/intelligence/map-bg.png",
    cornerClass: "lg:rounded-tr-3xl",
    customCardClass: "",
  },
  {
    title: "AI-Powered Insights",
        subtitle: "that guide smarter decisions in real time",

    Component: AIPoweredInsights,
    size: "lg:w-[33.33%]",
    cornerClass: "lg:rounded-bl-3xl",
    customCardClass: "",
  },
  {
    title: "Collaborative Layer",
        subtitle: "to bridge brand priorities & agency execution",

    Component: CollaborativeLayer,
    size: "lg:w-[33.33%]",
    customCardClass: "",
  },
  {
    title: "ROI Validation",
        subtitle: "mid-flight with measurable outcomes",

    Component: RoiValidation,
    size: "lg:w-[33.33%]",
    cornerClass: "lg:rounded-br-3xl",
    customCardClass: "",
  },
];

// Optimized background style
const bgStyle = {
  background: `
    url('/images/whyAuditee/bg-pattern.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

// Intersection Observer hook for performance
const useIntersectionObserver = (elementRef, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
};

// Optimized card component with intersection observer
const MethodologyCard = React.memo(({ item, bgStyle, index }) => {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const cardRef = useRef(null);

  const isVisible = useIntersectionObserver(cardRef, 0.1);

  // Load component only when visible
  const ComponentToRender = useMemo(() => {
    if (!componentLoaded || !item.Component) return null;
    const AnimatedCard = item.Component;
    return (
      <React.Suspense fallback={<div className="w-full h-32 bg-transparent" />}>
        <AnimatedCard shouldPlay={isVisible} className="w-full h-full" />
      </React.Suspense>
    );
  }, [componentLoaded, item.Component, isVisible]);

  useEffect(() => {
    if (!isVisible || componentLoaded) return;
    const timer = setTimeout(() => setComponentLoaded(true), index * 100);
    return () => clearTimeout(timer);
  }, [isVisible, index, componentLoaded]);

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-lg p-3 sm:p-4 md:p-4 h-[350px] sm:h-[380px] md:h-[400px] lg:h-[400px] border-[F5F5F5] border-[3px] xl:h-[440px] w-full ${item.size} overflow-hidden flex flex-col border-[0.5px] border-[#FFFFFF4A] relative cursor-pointer ${item.cornerClass || ""}`}
      style={{
        boxSizing: "border-box",
        contain: "layout style paint",
        willChange: "transform",
      }}
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0"
        style={bgStyle}
      />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`w-full h-full ${
            item.background ? "bg-cover bg-center" : ""
          } ${item.customCardClass || ""}`}
          style={
            item.background
              ? { backgroundImage: `url(${item.background})` }
              : undefined
          }
        >
          {ComponentToRender}
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full">
        <div className="pt-6">
          <h3 className="text-black text-base sm:text-lg md:text-xl tracking-normal font-medium ">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-black text-sm sm:text-base md:text-[17px] font-normal mt-1">
              {item.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

const WhyAuditee = React.memo(() => {
  return (
    <div className="w-full padding-top padding-bottom bg-[#EAEFFE] relative ">
      {/* <div className="bg-gradient-to-b h-[80px] from-black to-transparent absolute top-0 left-0 w-full z-10" /> */}
      <div className="section-width text-black relative">
        <div className="">
          {/* Header Section */}
          <div className="text-center flex flex-col justify-center items-center mb-12">
            <div
              className="relative mb-8 rounded-full w-fit p-[1px]"
              style={{
                background:
                  "linear-gradient(95.12deg, rgba(78, 126, 255, 0.4) 0%, rgba(218, 228, 255, 0.4) 100%)",
                boxShadow: "-20px 13px 35px rgba(44, 93, 222, 0.15)",
              }}
            >
              <p
                className="px-6 py-3 text-[#2C5CDE] text-lg posterama-semibold rounded-full"
                style={{
                  background:
                    "url('/images/home/button-bg.png') center / cover no-repeat",
                }}
              >
                the agentic ai advantage
              </p>
            </div>
            <h2 className="mb-4">
              <span className="inline-block ">
                Every Dollar Accountable. Every <br /> Campaign Optimized.
                <span className="bg-gradient-to-r pl-1 from-[#2A57D7] to-[#001D6D] bg-clip-text text-transparent">
                  With Auditee AI.
                </span>
              </span>
            </h2>
          </div>

          {/* Dynamic Card Layout with staggered loading */}
          <div className="space-y-6 max-w-7xl mx-auto px-2 sm:px-4 md:px-0">
            {[0, 2].map((rowIndex, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-6">
                {cardsData
                  .slice(rowIndex, rowIndex + (i === 0 ? 2 : 3))
                  .map((item, idx) => (
                    <MethodologyCard
                      key={`${rowIndex}-${idx}`}
                      item={item}
                      bgStyle={bgStyle}
                      index={rowIndex + idx}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default WhyAuditee;
