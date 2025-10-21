"use client";
import { useState } from "react";

const contactCards = [
  {
    title: "Email Us",
    info: "teamauditee@gmail.com",
    iconSrc: "/images/form/mail.svg",
  },
  {
    title: "Call Us",
    info: "XX XXXX XXXX",
    iconSrc: "/images/form/Vector.svg",
  },
  {
    title: "Location",
    info: "Crosby Street, New York, US.",
    iconSrc: "/images/form/location.svg",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-t-[#D5D7DA80] border-t-[1px] padding-top padding-bottom ">
      <div className="section-width">
        <div className="flex flex-col-reverse xl:flex-row w-full gap-12 ">
          {/* Left Side - Form */}
          <div
            className=" xl:w-[45%] rounded-3xl border border-[#F2F5FD] p-8 sm:p-12"
            style={{
              backgroundImage: 'url("/images/home/form-bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-[#1B1B1B] font-normal mb-3 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-6 py-3 bg-[#E6E9F2] font-extralight rounded-lg text-gray-700 placeholder-[#1B1B1B] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[#1B1B1B] font-normal mb-3 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 bg-[#E6E9F2] font-extralight rounded-lg text-[#1B1B1B] placeholder-[#1B1B1B] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-[#1B1B1B] font-normal mb-3 text-lg">
                  Phone
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value="+91"
                    readOnly
                    className="w-20 px-4 py-3 bg-[#E6E9F2] font-extralight rounded-lg text-[#1B1B1B] text-center focus:outline-none"
                  />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="XXXXX XXXXX"
                    className="flex-1 px-6 py-3 bg-[#E6E9F2] font-extralight rounded-lg text-[#1B1B1B] placeholder-[#1B1B1B] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full text-[#FAFAFA] font-light py-4 rounded-xl mt-8"
                style={{
                  background:
                    "linear-gradient(180deg, #80A2FF -70.83%, #1446CC 100%)",
                }}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pt-8 flex flex-col justify-center xl:w-[60%]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-6">
              Let's Talk.
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-normal text-gray-900 mb-8">
              We'd love to hear from you.
            </h2>
            <p className="font-light text-[#414141] xl:text-lg md:text-base text-sm  mb-12">
              Whether you're curious about features, a demo, or even press -
              we're ready to answer any and all questions.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-2 pb-3 border-[#C6D4F6]"
                  style={{
                    background:
                      "linear-gradient(126.27deg, #FAFAFA 29.09%, #C6D6FF 100.26%)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg border border-[#C6D4F6] flex items-center justify-center mb-3"
                    style={{
                      background:
                        "linear-gradient(180deg, #F2F6FF 0%, #CCDAFF 100%)",
                      // border: '1px solid rgba(8, 67, 204, 0.1)',
                      boxShadow: "inset 0px -2px 6px rgba(8, 67, 204, 0.2)",
                    }}
                  >
                    {" "}
                    <img
                      src={card.iconSrc}
                      alt={card.title}
                      className="w-4 h-4"
                    />
                  </div>
                  <h4 className="text-[#1B1B1B] font-normal text-base pb-6">
                    {card.title}
                  </h4>
                  <p className="text-[#414141] mt-auto mb-0 font-light text-sm">
                    {card.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
