"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Import your logos here (replace paths with actual ones)
import logo1 from "../../../public/images/logos/l1.png";
import logo2 from "../../../public/images/logos/l2.png";
import logo3 from "../../../public/images/logos/l3.png";
import logo4 from "../../../public/images/logos/l4.png";
import logo5 from "../../../public/images/logos/l5.png";
import logo6 from "../../../public/images/logos/l6.png";



const Logo = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  // First row logos (1-6) - moving right to left
  const clientLogoRow1 = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
   
  ];

  useEffect(() => {
    // Setup for first row
    const scrollElement1 = scrollRef1.current;
    if (scrollElement1) {
      const firstChild1 = scrollElement1.firstElementChild;
      if (firstChild1) {
        const scrollWidth1 = firstChild1.scrollWidth;
        scrollElement1.style.setProperty(
          "--scroll-width-1",
          `${scrollWidth1}px`
        );
      }
    }

    // Setup for second row
    const scrollElement2 = scrollRef2.current;
    if (scrollElement2) {
      const firstChild2 = scrollElement2.firstElementChild;
      if (firstChild2) {
        const scrollWidth2 = firstChild2.scrollWidth;
        scrollElement2.style.setProperty(
          "--scroll-width-2",
          `${scrollWidth2}px`
        );
      }
    }
  }, []);

  const LogoRow = ({ logos, isReverse = false }) => (
    <div className="flex shrink-0">
      {logos.map((item, i) => (
        <div
          key={`logo-${i}`}
          className="flex-shrink-0 mx-2 sm:mx-3 md:mx-3 lg:mx-4 flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-44"
        >
          <Image
            src={item}
            className="h-auto w-auto max-w-full object-contain max-h-16 md:max-h-24 filter grayscale hover:grayscale-0 transition-all duration-200"
            alt={`client-logo-${i}`}
            height={100}
            width={120}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-10 relative  bg-[#F2F5FE] border-b-[1px] border-[#D5D7DA80]">
      <div className="section-width">
        <div className="text-center flex items-center justify-center mb-8 font-medium">
           <div className="trust-divider w-full md:w-[80%] lg:w-[70%]">
  <span className="trust-divider__line trust-divider__line--left" />
  <p className="posterama-bold text-lg text-[#2C5CDE] uppercase">
    Trust Signal
  </p>
  <span className="trust-divider__line trust-divider__line--right" />
</div>

          </div>

        {/* First row - scrolling right to left */}
        <div className="w-full overflow-hidden relative ">
          <div ref={scrollRef1} className="flex animate-scroll-right-to-left">
            <LogoRow logos={clientLogoRow1} />
            <LogoRow logos={clientLogoRow1} />
          </div>

          {/* White overlay gradients for smooth fade effect */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#F2F5FE] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-[#F2F5FE] to-transparent pointer-events-none z-10"></div>
        </div>

        {/* <div className="text-center mt-16 font-medium">
          <h5 className="text-gradient ">
            Our work speaks through the partners and clients{" "}
            <br className="hidden lg:inline" /> 
            we’ve empowered.
          </h5>
        </div> */}
      </div>

      <style jsx>{`
        :root {
          --scroll-width-1: 0px;
          --scroll-width-2: 0px;
        }

        /* First row animation - right to left */
        @keyframes scroll-right-to-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(var(--scroll-width-1) * -1));
          }
        }

        /* Second row animation - left to right */
        @keyframes scroll-left-to-right {
          from {
            transform: translateX(calc(var(--scroll-width-2) * -1));
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-right-to-left {
          animation: scroll-right-to-left 45s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 45s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .animate-scroll-right-to-left > div,
        .animate-scroll-left-to-right > div {
          display: flex;
          flex-shrink: 0;
        }

        .animate-scroll-right-to-left img,
        .animate-scroll-left-to-right img {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Logo;
