"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  { value: "40%", description: "Of digital budgets misallocated" },
  { value: "$26.8B", description: "Lost in programmatic inefficiencies" },
  { value: "$84B", description: "Lost to ad fraud" },
];

// 🔹 Card Component
const StatCard = ({ stat }) => (
  <div
    className="rounded-2xl p-8 sm:p-10 lg:p-12 text-center flex flex-col justify-between h-full min-h-[220px]"
    style={{
      background: "linear-gradient(125deg, #0F46DC 0%, #121212 100%)",
      border: "2px solid rgba(165, 189, 253, 0.5)",
      boxShadow: "0px 6px 36px rgba(44, 92, 222, 0.1)",
    }}
  >
    <div className="flex-grow flex items-center justify-center">
      <h3 className="text-5xl sm:text-5xl lg:text-6xl font-semibold text-white">
        {stat.value}
      </h3>
    </div>
    <p className="text-white mt-4">{stat.description}</p>
  </div>
);

const GlobalAdvertising = () => {
  return (
    <div className="bg-gray-50 md:pt-16 pt-14 lg:pt-20">
      <div className="section-width">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="mb-4 px-4">
            <span className="bg-gradient-to-r pl-1 from-[#2A57D7] to-[#001D6D] bg-clip-text text-transparent">
              Global Advertising Spend is Projected to Cross $1.6T -
            </span>
            <br className="hidden sm:inline" />
            <span className="text-black">
              Within that, there's potential to save billions.
            </span>
          </h2>
        </div>

        {/* ===== 💻 Desktop Grid (lg+) ===== */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="h-full">
              <StatCard stat={stat} />
            </div>
          ))}
        </div>

        {/* ===== 📱 Mobile/Tablet Swiper (below lg) ===== */}
        <div className="lg:hidden  w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1023: { slidesPerView: 2.5, spaceBetween: 24 },
            }}
            className="w-full global-advertising-swiper"
          >
            {stats.map((stat, index) => (
              <SwiperSlide
                key={index}
                className="!bg-transparent flex items-stretch pb-12"
              >
                <StatCard stat={stat} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Styling */}
          <style jsx>{`
            .global-advertising-swiper .swiper-pagination {
              bottom: 0px !important;
            }
            .global-advertising-swiper .swiper-pagination-bullet {
              background: #00308f !important;
              opacity: 0.6;
            }
            .global-advertising-swiper .swiper-pagination-bullet-active {
              background: #00308f !important;
              opacity: 1;
            }
          `}</style>
        </div>

        {/* ===== Bottom Text ===== */}
        <div
          className="text-center lg:padding-top lg:padding-bottom md:py-10 py-2"
          style={{
            backgroundImage: 'url("/images/home/text-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-[#414141] mx-auto">
            Because performance gaps go undetected in real time, buried under
            fragmented data, delayed insights, and outdated verification
            methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalAdvertising;
