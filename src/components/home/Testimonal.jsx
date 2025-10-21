"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const testimonialData = [
  {
    content:
      "Climaty AI’s sustainable marketing frameworks and carbon intelligence tools have seamlessly aligned with our values of ethical growth and responsibility. Their solutions have empowered us to reduce our digital footprint while amplifying campaign performance in a compliant and purpose-driven way.",
    name: "Head of Marketing",
    sector: "Banking & Financial Services",
    image: "/images/home/testimonial/people1.svg",
  },
  {
    content:
      "Partnering with Climaty AI helped us push the boundaries of luxury branding through data-backed creative testing and sustainability-driven media planning. Their unique blend of performance strategy and environmental consciousness enabled us to scale impactful stories without compromising our brand ethos.",
    name: "Brand Lead",
    sector: "Premium Men's Jewelry",
    image: "/images/home/testimonial/people2.svg",
  },
  {
    content:
      "Climaty AI’s carbon measurement and optimization capabilities have been a game-changer in how we deliver performance campaigns for clients. Their sustainability-first infrastructure has allowed us to execute at scale while ensuring every media dollar is responsibly spent.",
    name: "VP, Media Strategy",
    sector: "Full-Service Digital Agency",
    image: "/images/home/testimonial/people3.svg",
  },
  {
    content:
      "Climaty AI has brought in a fresh perspective to our digital marketing - combining precision targeting with carbon-conscious campaign delivery. Their platform helped us optimize media efficiency and storytelling while advancing our sustainability commitments as a luxury brand.",
    name: "Head of Digital Engagement",
    sector: "Luxury Jewellery Retail",
    image: "/images/home/testimonial/people1.svg",
  },
  {
    content:
      "Working with Climaty AI allowed us to integrate performance-focused messaging with sustainability insights, even in high-intensity political campaigns. Their AI-driven solutions provided us with a responsible yet high-performing approach to influence and voter outreach.",
    name: "Lead Strategist",
    sector: "Political Strategy & Advisory",
    image: "/images/home/testimonial/people2.svg",
  },
  {
    content:
      "As a climate-tech innovator, partnering with Climaty AI was a natural fit. Their platform’s ability to measure, reduce, and report on marketing emissions complements our mission to automate sustainability. Together, we’ve set a new benchmark for environmentally responsible digital growth.",
    name: "Co-Founder",
    sector: "GreenTech Automation Solutions",
    image: "/images/home/testimonial/people3.svg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="w-full relative bg-[#F2F6FF] padding-top padding-bottom overflow-hidden">
      <div className="section-width">
        {/* Side dark overlays (above slider, below header) */}
        <div className="absolute hidden md:block top-0 left-0 w-[18%] h-full bg-gradient-to-r from-[#F1F5FF] to-[#F1F5FF] blur-3xl z-30 pointer-events-none" />
        <div className="absolute hidden md:block top-0 right-0 w-[18%] h-full bg-gradient-to-l from-[#F1F5FF] to-[#F1F5FF] blur-2xl z-30 pointer-events-none" />

        {/* Header (above overlays) */}
        <div className="flex flex-col justify-center items-center relative z-40">
          <div className=" text-center">
            <div className="text-center flex flex-col justify-center items-center mb-2">
              <div
                className="relative mb-8 rounded-full w-fit p-[1px]"
                style={{
                  background:
                    "linear-gradient(95.12deg, rgba(78, 126, 255, 0.4) 0%, rgba(218, 228, 255, 0.4) 100%)",
                  boxShadow: "-20px 13px 35px rgba(44, 93, 222, 0.15)",
                }}
              >
                <p
                  className="px-6 py-3 bg-white text-[#2C5CDE] text-lg posterama-semibold rounded-full"
                  style={{
                    background:
                      "url('/images/home/button-bg.png') center cover no-repeat",
                  }}
                >
                  TESTIMONIALS{" "}
                </p>
              </div>
              <h2>
                <span className="bg-gradient-to-l  from-[#2A57D7] to-[#001D6D] bg-clip-text text-transparent">
                  What People Say
                </span>
              </h2>
            </div>
            <p className="font-light text-[#1B1B1B] text-xl max-w-xl">
              Discover what our satisfied customers have to say about their
              experiences with our product.
            </p>
          </div>
        </div>

        {/* Swiper (pause on hover) */}
        <div
          className="pt-10 relative z-20 cursor-pointer"
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            centeredSlides
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setCurrentIndex(swiper.realIndex);
            }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              // If your Swiper version supports it, this auto-pauses on hover too:
              pauseOnMouseEnter: true,
            }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {testimonialData.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`rounded-3xl border-[1px] overflow-hidden border-[#1339A01A] my-3 p-6 relative transition-all duration-500 ease-in-out ${
                    i === currentIndex
                      ? "opacity-100 scale-105 z-10"
                      : " scale-95"
                  }`}
                  style={{
                    background:
                      "linear-gradient(125deg, #DBE4FB 0%, #F2F6FF 50%)",
                  }}
                >
                  <img
                    src="/images/home/coma.png"
                    alt="coma"
                    className="w-12 mb-6 h-auto"
                  />
                  <p className="text-[#414141] text-start mb-8 font-light  sm:text-base text-sm">
                    {item.content}
                  </p>
                  <div className="flex items-start max-w-content justify-start ">
                    {/* <Image className="w-12 h-12" src={item.image} width={48} height={48} alt="client" /> */}
                    <div className="justify-start text-start">
                      <h6 className="text-[#181D27] text-xl mb-1 font-medium">
                        {item.name}
                      </h6>
                      <p className="text-[#2C5CDE] font-light text-base">
                        {item.sector}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
