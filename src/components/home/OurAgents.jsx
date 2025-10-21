"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";

const AuditAgentAnimation = React.lazy(() =>
  import("@/components/animations/agents/AuditAgent")
);
const ComplianceAgentAnimation = React.lazy(() =>
  import("@/components/animations/agents/ComplianceAgent")
);
const InsightsAgentAnimation = React.lazy(() =>
  import("@/components/animations/agents/InsightsAgent")
);
const StudioAgentAnimation = React.lazy(() =>
  import("@/components/animations/agents/StudioAgent")
);
const PacingAgentAnimation = React.lazy(() =>
  import("@/components/animations/agents/PacingAgent")
);
const StrategyAgentAnimation = React.lazy(() =>
  import("@/components/animations/agents/StrategyAgent")
);

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
      { threshold, rootMargin: "100px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
};

const agentCards = [
  {
    title: "Audit Agent",
    description:
      "Turns performance visibility into shared accountability, helping brands and agencies stay aligned on results, spend, and transparency.",
    media: { pattern: "/images/agents/white-bg.png", emphasis: true },
    Animation: AuditAgentAnimation,
  },
  {
    title: "Compliance Agent",
    description:
      "Shields your campaigns from media waste, unsafe placements, and taxonomy breaches to uphold brand and budget integrity.",
    media: { pattern: "/images/agents/white-bg.png", emphasis: true },
    Animation: ComplianceAgentAnimation,
  },
  {
    title: "Insights Agent",
    description:
      "Turns raw data into clarity by delivering cross-platform insights that guide smarter, faster decisions.",
    media: { pattern: "/images/agents/white-bg.png", emphasis: true },
    Animation: InsightsAgentAnimation,
  },
  {
    title: "Studio Agent",
    description:
      "Sharpens creative effectiveness by refining visuals, copy, and formats to keep audiences engaged and results rising.",
    media: {
      pattern: "/images/agents/white-bg.png",
    },
    Animation: StudioAgentAnimation,
  },
  {
    title: "Pacing Agent",
    description:
      "Maximizes outcomes in real time by reallocating spend and fine-tuning pacing to drive better reach, ROI, and growth.",
    media: { pattern: "/images/agents/white-bg.png", emphasis: true },
    Animation: PacingAgentAnimation,
  },
  {
    title: "Strategy Agent",
    description:
      "Launches campaigns at speed with full-funnel builds that are market-ready from day one.",
    media: { pattern: "/images/agents/white-bg.png" },
    Animation: StrategyAgentAnimation,
  },
];

const MediaLayer = ({ media = {}, animation }) => {
  const { pattern, emphasis } = media;

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] border border-[rgba(78,112,210,0.22)] h-[clamp(220px,32vw,360px)] ${
        emphasis ? "shadow-[0_18px_45px_rgba(65,97,193,0.18)]" : ""
      }`}
      style={{
        background:
          "linear-gradient(180deg, rgba(240,246,255,0.92) 0%, rgba(206,223,255,0.7) 100%)",
      }}
    >
      <div
        className="absolute inset-[10px] rounded-[14px]"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          backgroundImage: pattern ? `url(${pattern})` : undefined,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-[10px] rounded-[14px] border border-white/35" />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {animation}
      </div>
    </div>
  );
};


const FeatureCard = React.memo(
  ({ title, description, media, Animation, index }) => {
    const cardRef = useRef(null);
    const isVisible = useIntersectionObserver(cardRef, 0.2);
    const [componentLoaded, setComponentLoaded] = useState(false);

    useEffect(() => {
      if (!isVisible || componentLoaded) return;
      const timer = setTimeout(() => setComponentLoaded(true), index * 100);
      return () => clearTimeout(timer);
    }, [isVisible, componentLoaded, index]);

    const animationContent = useMemo(() => {
      if (!componentLoaded || !Animation) return null;
      const AnimatedCard = Animation;
      return (
        <React.Suspense
          fallback={<div className="h-full w-full bg-transparent" />}
        >
          <AnimatedCard shouldPlay={isVisible} className="h-full w-full" />
        </React.Suspense>
      );
    }, [componentLoaded, Animation, isVisible]);

    return (
      <article
        ref={cardRef}
        className={"flex flex-col gap-6 rounded-[20px] border border-[rgba(58,96,196,0.18)] bg-[linear-gradient(180deg,rgba(235,242,255,0.9)_0%,rgba(213,225,255,0.65)_100%)] p-4  "}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <MediaLayer media={media} animation={animationContent} />
        <div className="text-left">
          <h3 className="mb-2  gradient-text text-base sm:text-lg md:text-xl tracking-normal font-medium">
            {title}
          </h3>
          <p className="text-[#414141]">{description}</p>
        </div>
      </article>
    );
  }
);

const OurAgents = React.memo(() => {
  return (
    <div className="w-full relative ">
      {/* <div className="bg-gradient-to-b h-[80px] from-black to-transparent absolute top-0 left-0 w-full z-10 " /> */}

      <section className="section-width padding-top padding-bottom text-center ">
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
              Autonomous by design{" "}
            </p>
          </div>
          <h2 className="mb-4">
            <span className="bg-gradient-to-l pl-1 from-[#2A57D7] to-[#001D6D] bg-clip-text text-transparent">
              Intelligent Agents, Smarter Audits,
              <br />
              <span className="bg-gradient-to-l pl-1 from-[#2A57D7] to-[#001D6D] bg-clip-text text-transparent">
                Better Media Outcomes.{" "}
              </span>
            </span>
          </h2>
        </div>

        <div className="grid gap-4 lg:gap-6 md:grid-cols-2 ">
          {agentCards.map((card, index) => (
            <FeatureCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
});

export default OurAgents;
