import React from "react";

const UpcomingAgents = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="text-center relative py-10 flex flex-col justify-center items-center bg-[linear-gradient(90.64deg,#D6E1FF_0%,#FFFFFF_50%,#D6E1FF_100%)]">
        <div
          className="relative z-30  mb-8 rounded-full w-fit p-[1px]"
          style={{
            background:
              "linear-gradient(95.12deg, rgba(78, 126, 255, 0.4) 0%, rgba(218, 228, 255, 0.4) 100%)",
            boxShadow: "-20px 13px 35px rgba(44, 93, 222, 0.15)",
          }}
        >
          <p
            className="px-6 py-3 bg-white/70  text-[#2C5CDE] text-lg posterama-semibold rounded-full"
            style={{
              background:
                "url('/images/home/button-bg.png') center  cover no-repeat",
            }}
          >
            Upcoming Agents{" "}
          </p>
        </div>
        <img
          src="/images/home/ellipse.png"
          alt="coma"
          className="w-[25%] absolute z-10 top-10 mb-6 h-auto"
        />

        <p className=" font-medium xl:text-2xl sm:text-xl text-lg text-[#121212]  md:leading-[120%] tracking-normal xl:leading-[120%]">
          Bot Verification, Campaign Design Intelligence, Integrated Media
          Planning.
        </p>
      </div>
    </div>
  );
};

export default UpcomingAgents;
