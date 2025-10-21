"use client";
import React, { useMemo, useEffect, useRef, useState } from "react";

const DataSafetyAnimation = React.lazy(() =>
  import("@/components/animations/safety/DataSafety")
);
const BrandSafetyAnimation = React.lazy(() =>
  import("@/components/animations/safety/BrandSafety")
);

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

const SafetyCard = ({ title, description, Animation, index, roundedClass }) => {
  const cardRef = useRef(null);
  const isVisible = useIntersectionObserver(cardRef, 0.15);
  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    if (!isVisible || componentLoaded) return;
    const timer = setTimeout(() => setComponentLoaded(true), index * 120);
    return () => clearTimeout(timer);
  }, [isVisible, componentLoaded, index]);

  const animationContent = useMemo(() => {
    if (!componentLoaded || !Animation) return null;
    const AnimatedSection = Animation;
    return (
      <React.Suspense fallback={<div className="h-full w-full bg-transparent" />}>
        <AnimatedSection shouldPlay={isVisible} className="h-full w-full" />
      </React.Suspense>
    );
  }, [componentLoaded, Animation, isVisible]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden shadow-xl flex flex-col justify-end bg-[#EDEEF7] border-[2px] border-[white] ${roundedClass}`}
      style={{ minHeight: "550px" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(214,222,255,0.75)_55%,rgba(206,215,255,0.65))]" />
      {/* <div className="absolute inset-[16px]  border border-white/40 bg-white/35 backdrop-blur-[1px]" /> */}
      <div className="absolute inset-[0px] rounded-[24px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0">{animationContent}</div>
      </div>
      <div className="relative z-10 p-8 pt-32 bg-gradient-to-t from-[#EDEEF7] via-[#EDEEF7f2] to-transparent">
        <h2 className="font-semibold xl:text-3xl sm:text-3xl text-2xl md:leading-[150%] tracking-normal xl:leading-[150%] text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-[#414141] ">{description}</p>
      </div>
    </div>
  );
};

const BuildOnTrust = () => {
  const cards = useMemo(
    () => [
      {
        id: 1,
        title: "Data Safety",
        description:
          "Auditee is designed with confidentiality at its core. Campaign data stays within the client's environment and is protected through enterprise-grade encryption, controlled access, and compliance-ready safeguards.",
        Animation: DataSafetyAnimation,
      },
      {
        id: 2,
        title: "Brand Safety",
        description:
          "Auditee prioritizes brand integrity by keeping campaigns clear of unsuitable or low-quality environments. Every placement is monitored to ensure alignment with brand values and audience expectations.",
        Animation: BrandSafetyAnimation,
      },
    ],
    []
  );

  return (
    <div className=" bg-gradient-to-b py-16 from-blue-950 via-blue-900 to-blue-950 flex items-center justify-center p-8">
      <div className="section-width">
        {/* Header */}
        <div className="flex justify-center mb-12">
             <p
              className="px-6 py-3 bg-white text-[#2C5CDE] text-lg posterama-semibold rounded-full"
            //   style={{
            //     background:
            //       "url('/images/home/button-bg.png') center / cover no-repeat",
            //   }}
            >
BUILT ON TRUST </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const roundedClass =
              index === 0
                ? "rounded-l-3xl md:rounded-r-none rounded-r-3xl"
                : "rounded-r-3xl md:rounded-l-none rounded-l-3xl";

            return (
              <SafetyCard
                key={card.id}
                {...card}
                index={index}
                roundedClass={roundedClass}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default BuildOnTrust
