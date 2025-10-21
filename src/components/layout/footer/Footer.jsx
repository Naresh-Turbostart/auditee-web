"use client";
// import CtaSecond from "@/components/PagesComponents/homePage/CtaSecond";
import routes from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/calculator") {
    return;
  }
  return (
    <>
<div
  className="w-full footer-gradient "
  style={{
    backgroundImage: 'url("/images/home/Footer.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>        {/* <div className="section-width   border-b border-[#ffffff10]"></div> */}
    <div className="section-width border-x pb-6 border-[#ffffff10]">


        <div className="pt-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
            {/* Left side - Logo, text and button */}
            <div className="basis-2/5 ">
              <div className="max-w-64 ml-[-20px] pl-8 sm:flex flex-col sm:justify-center sm:items-center">
                <Image
                  src={"/images/home/logo.white.png"}
                  className="xl:h-12 md:h-12 h-10 w-auto "
                  width={150}
                  height={100}
                  alt="logo"
                />
                {/* <p className="text-[#FAFAFA] mb-3 text-sm xl:text-base leading-6">
                  Make Ads, Not Emissions
                </p>
                <Link
                  href={routes.getStarted}
                  className="relative inline-block px-8 py-2 rounded-full font-semibold text-[#FAFAFA] bg-[#46F245] shadow-[0_3px_20px_rgba(70,242,69,0.4)]"
                  style={{ textShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)" }}
                >
                  <span className="relative z-10">Get Started</span>
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                    }}
                  />
                </Link> */}
              </div>
            </div>

            {/* Right side - Navigation links */}
            <div className="pl-4 grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16 xl:gap-20 lg:justify-end">
              <div>
                <p className="mb-6 text-[#E6E6E6] text-sm font-normal">
                  Product
                </p>
                <div className="space-y-4">
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.home}
                      className="hover:text-green-400 transition-colors"
                    >
                      Overview
                    </Link>
                  </p>
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.about}
                      className="hover:text-green-400 transition-colors"
                    >
                  Features                    </Link>
                  </p>
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.blog}
                      className="hover:text-green-400 transition-colors"
                    >
                      Releases
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-6 text-[#E6E6E6] text-sm font-normal">
                  Company
                </p>
                <div className="space-y-4">
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.measureengine}
                      className="hover:text-green-400 transition-colors"
                    >
                      About us
                    </Link>
                  </p>
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.programmatic}
                      className="hover:text-green-400 transition-colors"
                    >
                      News
                    </Link>
                  </p>
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.agenticai}
                      className="hover:text-green-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </p>
                  {/* <p className="text-base font-normal text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.offset}
                      className="hover:text-green-400 transition-colors"
                    >
                      Offset
                    </Link>
                  </p> */}
                </div>
              </div>

              <div>
                <p className="mb-6 text-[#E6E6E6] text-sm font-normal">
                  Resources
                </p>
                <div className="space-y-4">
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.faq}
                      className="hover:text-green-400 transition-colors"
                    >
                      Blog
                    </Link>
                  </p>
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.getStarted}
                      className="hover:text-green-400 transition-colors"
                    >
                      Help centre
                    </Link>
                  </p>
                  <p className="text-base font-light text-[#FAFAFA] leading-6">
                    <Link
                      href={routes.getStarted}
                      className="hover:text-green-400 transition-colors"
                    >
                      Support
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8 pb-4 w-[103%] ml-[-17px] border-t border-[#ffffff10]"></div>
        <div className="section-width flex flex-col gap-8 md:gap-0 md:flex-row justify-center items-center p-4 text-sm text-[#A1A1AA]">
          <div className="flex gap-4">
            <span className="text-center">© 2025 ClimatyAI</span>
            <a
              href={routes.privacypolicy}
              className="hover:text-[#FAFAFA] transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* <div className="flex gap-4 items-center">
            <span className="text-[#FAFAFA] align-middle">Follow Us</span>

            <a
              href="https://www.linkedin.com/company/climaty-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/footer/linkedin.svg"
                width={30}
                height={30}
                alt="LinkedIn"
                unoptimized
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCuHP3Cfq9DSoAf-vJ9A_uPw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/footer/youtube.svg"
                width={30}
                height={30}
                alt="YouTube"
                unoptimized
              />
            </a>

            <a
              href="https://x.com/ClimatyAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/footer/twitter.svg"
                width={30}
                height={30}
                alt="Twitter"
                unoptimized
              />
            </a>
          </div> */}
        </div>
            </div>

      </div>
    </>
  );
};

export default Footer;
