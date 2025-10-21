"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./style.css";
import { NavButtons, navLinks } from "./data";
import routes from "@/utils/routes";

// const CLOSE_DELAY_MS = 250;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [openMenu, setOpenMenu] = useState(null);
  // const [openSubmenu, setOpenSubmenu] = useState(null);

  // const closeTimerRef = useRef(null);
  // const cancelClose = () => {
  //   if (closeTimerRef.current) {
  //     clearTimeout(closeTimerRef.current);
  //     closeTimerRef.current = null;
  //   }
  // };
  // const scheduleCloseMenu = () => {
  //   cancelClose();
  //   closeTimerRef.current = setTimeout(() => {
  //     setOpenSubmenu(null);
  //     setOpenMenu(null);
  //     closeTimerRef.current = null;
  //   }, CLOSE_DELAY_MS);
  // };

  // const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  // const [mobileResourceOpen, setMobileResourceOpen] = useState(false);
  // const [mobileOptimiseOpen, setMobileOptimiseOpen] = useState(false);

  const pathname = usePathname();

  // Determine logo based on pathname
  const isLegalPage = pathname === '/privacy-policy' || pathname === '/terms-and-condition';
  const logoSrc = isLegalPage ? '/images/home/logo.blue.png' : '/images/home/logo.blue.png';

  const isPathActive = (targetPath) => {
    if (!targetPath) return false;
    if (targetPath === "/") return pathname === "/";
    return pathname === targetPath || pathname.startsWith(`${targetPath}/`);
  };

  const navPillClasses = (isActive) =>
    `flex items-center gap-2 font-medium text-base px-4 py-2 rounded-full transition-all duration-200 border ${
      isActive
        ? "bg-[#E9EEFF] border-[#C5D5FF] text-[#1F3FD5] shadow-[0_8px_20px_rgba(95,131,255,0.18)]"
        : "border-transparent text-gray-700 hover:text-[#4169E1] hover:border-[#D7E1FF] hover:bg-[#F4F7FF]"
    }`;

  const navBulletClasses = (isActive) =>
    `w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-200 ${
      isActive
        ? "opacity-100 bg-gradient-to-b from-[#80A2FF] to-[#1446CC] shadow-[0_0_0_4px_rgba(80,126,255,0.18)]"
        : "opacity-0 bg-transparent shadow-none"
    }`;

  const closeAll = () => {
    setIsMenuOpen(false);
    // setOpenMenu(null);
    // setOpenSubmenu(null);
    // setMobileServiceOpen(false);
    // setMobileResourceOpen(false);
    // setMobileOptimiseOpen(false);
  };

  useEffect(() => {
    closeAll();
  }, [pathname]);

  // useEffect(() => {
  //   return () => cancelClose();
  // }, []);

  // const renderDropdownItem = (
  //   imageSrc,
  //   title,
  //   href = "#",
  //   isLast = false,
  //   onHover
  // ) => (
  //   <div
  //     className={`py-3 px-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
  //       !isLast ? "border-b border-gray-100" : ""
  //     }`}
  //     onMouseEnter={() => {
  //       cancelClose();
  //       onHover?.();
  //     }}
  //   >
  //     <Link href={href} className="w-full flex gap-2 items-center text-gray-700 hover:text-[#4169E1]" onClick={closeAll}>
  //       <Image
  //         src={imageSrc}
  //         width={20}
  //         height={20}
  //         className="w-5 h-5"
  //         alt="nav icon"
  //         unoptimized
  //       />
  //       {title}
  //     </Link>
  //   </div>
  // );

  // const renderMobileSubmenuItem = (imageSrc, title, href = "#", onClick) => (
  //   <Link
  //     href={href}
  //     className="flex items-center gap-3 py-3 pl-12 pr-4 text-gray-700 hover:text-[#4169E1] transition-colors duration-200 text-base"
  //     onClick={() => {
  //       onClick?.();
  //       closeAll();
  //     }}
  //   >
  //     <Image
  //       src={imageSrc}
  //       width={20}
  //       height={20}
  //       alt="nav icon"
  //       className="w-5 h-5"
  //       unoptimized
  //     />
  //     {title}
  //   </Link>
  // );

  // const toggleMobileServices = () => {
  //   setMobileServiceOpen((v) => !v);
  //   setMobileResourceOpen(false);
  //   setMobileOptimiseOpen(false);
  // };
  // const toggleMobileResources = () => {
  //   setMobileResourceOpen((v) => !v);
  //   setMobileServiceOpen(false);
  //   setMobileOptimiseOpen(false);
  // };
  // const toggleMobileOptimise = () => setMobileOptimiseOpen((v) => !v);

  return (
    <>
      <div className="py-4 fixed top-0 left-0 z-50 w-full bg-transparent">
        <div className=" md:w-[80%] rounded-2xl mx-auto  items-center border-[#353D6D] border-[4px] px-2  bg-white py-2 ">
          <div className="flex items-center justify-between ">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href={routes.home} onClick={closeAll}>
                <Image
                  src={logoSrc}
                  className="h-10"
                  width={120}
                  height={40}
                  alt="climatyai logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="lg:flex hidden items-center">
              <div className="flex gap-8 justify-center items-center">
                {navLinks.map((item, i) => (
                  <div key={i}>
                    <Link
                      className={navPillClasses(isPathActive(item.path))}
                      href={item.path}
                      onClick={closeAll}
                    >
                      <span className={navBulletClasses(isPathActive(item.path))} />
                      <span>{item.title}</span>
                    </Link>
                  </div>
                ))}
                {/*
                  Desktop dropdown nav items (Services, Resources) commented out intentionally.
                  <div>
                    {item.title === "Services" ? (
                      <div
                        className="relative"
                        onMouseEnter={() => {
                          cancelClose();
                          setOpenMenu("services");
                        }}
                        onMouseLeave={scheduleCloseMenu}
                      >
                        <div
                          className={`${navPillClasses(
                            isPathActive(routes.services) || openMenu === "services"
                          )} cursor-pointer`}
                        >
                          <span
                            className={navBulletClasses(
                              isPathActive(routes.services) || openMenu === "services"
                            )}
                          />
                          <span>{item.title}</span>
                          <IoIosArrowDown
                            className={`text-sm text-current transition-transform duration-200 ${
                              openMenu === "services" ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {openMenu === "services" && (
                          <div
                            className="absolute top-10 left-0 bg-white text-gray-700 rounded-lg z-50 border border-gray-200 shadow-lg min-w-max"
                            onMouseEnter={cancelClose}
                            onMouseLeave={scheduleCloseMenu}
                          >
                            {renderDropdownItem(
                              "/images/layout/nav/measure.svg",
                              "Measure",
                              routes.measureengine,
                              false,
                              () => setOpenSubmenu(null)
                            )}
                            {renderDropdownItem(
                              "/images/layout/nav/optimise.svg",
                              "Optimise",
                              "#",
                              false,
                              () => setOpenSubmenu("optimise")
                            )}
                            {renderDropdownItem(
                              "/images/layout/nav/offset.svg",
                              "Offset",
                              routes.offset,
                              true,
                              () => setOpenSubmenu(null)
                            )}
                          </div>
                        )}

                        {openMenu === "services" && openSubmenu === "optimise" && (
                          <div
                            className="absolute top-[100px] left-[135px] bg-white text-gray-700 rounded-lg z-50 border border-gray-200 shadow-lg min-w-max"
                            onMouseEnter={cancelClose}
                            onMouseLeave={scheduleCloseMenu}
                          >
                            {renderDropdownItem(
                              "/images/layout/nav/programmatic.svg",
                              "Programmatic+",
                              routes.programmatic
                            )}
                            {renderDropdownItem(
                              "/images/layout/nav/agenticai.svg",
                              "Agentic AI",
                              routes.agenticai,
                              true
                            )}
                          </div>
                        )}
                      </div>
                    ) : item.title === "Resources" ? (
                      <div
                        className="relative"
                        onMouseEnter={() => {
                          cancelClose();
                          setOpenMenu("resources");
                        }}
                        onMouseLeave={scheduleCloseMenu}
                      >
                        <div
                          className={`${navPillClasses(
                            openMenu === "resources" || pathname.startsWith("/blog")
                          )} cursor-pointer`}
                        >
                          <span
                            className={navBulletClasses(
                              openMenu === "resources" || pathname.startsWith("/blog")
                            )}
                          />
                          <span>{item.title}</span>
                          <IoIosArrowDown
                            className={`text-sm text-current transition-transform duration-200 ${
                              openMenu === "resources" ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {openMenu === "resources" && (
                          <div
                            className="absolute top-10 left-0 bg-white border-gray-200 text-gray-700 rounded-lg z-50 border shadow-lg min-w-max"
                            onMouseEnter={cancelClose}
                            onMouseLeave={scheduleCloseMenu}
                          >
                            {renderDropdownItem(
                              "/images/layout/nav/blog.svg",
                              "Blog",
                              routes.blog
                            )}
                            {renderDropdownItem(
                              "/images/layout/nav/hwm.svg",
                              "How We Measure",
                              routes.howwemeasure,
                              true
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        className={navPillClasses(isPathActive(item.path))}
                        href={item.path}
                        onClick={closeAll}
                      >
                        <span className={navBulletClasses(isPathActive(item.path))} />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </div>
                */}
              </div>
            </div>

            {/* Get Started Button */}
            <div className="hidden lg:block">
              <Link
                href={routes.getStarted}
                className="bg-[linear-gradient(180deg,#80A2FF_-70.83%,#1446CC_100%)]  text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#3557C7] transition-colors inline-block"
                onClick={closeAll}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div
              className="lg:hidden flex items-center cursor-pointer"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span className="absolute block w-6 h-0.5 bg-gray-700 transform rotate-45"></span>
                  <span className="absolute block w-6 h-0.5 bg-gray-700 transform -rotate-45"></span>
                </div>
              ) : (
                <div className="hamburger-icon">
                  <span className="block w-6 h-[3px] rounded bg-gray-700 mb-1.5"></span>
                  <span className="block w-6 h-[3px] rounded bg-gray-700 mb-1.5"></span>
                  <span className="block w-6 h-[3px] rounded bg-gray-700"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Image
              src={logoSrc}
              className="h-10"
              width={100}
              height={32}
              alt="climatyai logo"
            />
            <div className="cursor-pointer p-2" onClick={() => setIsMenuOpen(false)}>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute block w-6 rounded h-[3px] bg-gray-700 transform rotate-45"></span>
                <span className="absolute block w-6 h-[3px] rounded bg-gray-700 transform -rotate-45"></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-4 space-y-1">
                <Link
                  href={routes.home}
                  className="block py-3 text-gray-700 hover:text-[#4169E1] text-lg transition-colors duration-200 font-medium"
                  onClick={closeAll}
                >
                  Home
                </Link>

                <Link
                  href={routes.about}
                  className="block py-3 text-gray-700 hover:text-[#4169E1] text-lg transition-colors duration-200 font-medium"
                  onClick={closeAll}
                >
                  About
                </Link>

                {/*
                  Mobile navlinks (Services, Resources) commented out intentionally.
                  <div>
                    <div
                      className="flex items-center justify-between py-3 text-gray-700 hover:text-[#4169E1] text-lg cursor-pointer transition-colors duration-200 font-medium"
                      onClick={toggleMobileServices}
                    >
                      <span>Services</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-200 ${
                          mobileServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {mobileServiceOpen && (
                      <div className="bg-gray-50">
                        {renderMobileSubmenuItem(
                          "/images/layout/nav/measure.svg",
                          "Measure",
                          routes.measureengine
                        )}

                        <div>
                          <div
                            className="flex items-center justify-between py-3 pl-12 pr-4 text-gray-700 hover:text-[#4169E1] cursor-pointer transition-colors duration-200 text-base"
                            onClick={toggleMobileOptimise}
                          >
                            <div className="flex items-center gap-3">
                              <Image
                                src="/images/layout/nav/optimise.svg"
                                width={20}
                                height={20}
                                alt="nav icon"
                                className="w-5 h-5"
                                unoptimized
                              />
                              <span>Optimize</span>
                            </div>
                            <IoIosArrowDown
                              className={`transition-transform duration-200 ${
                                mobileOptimiseOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          {mobileOptimiseOpen && (
                            <div className="bg-gray-100">
                              <Link
                                href={routes.programmatic}
                                className="flex items-center gap-3 py-3 pl-16 pr-4 text-gray-700 hover:text-[#4169E1] transition-colors duration-200 text-sm"
                                onClick={closeAll}
                              >
                                <Image
                                  src="/images/layout/nav/programmatic.svg"
                                  width={20}
                                  height={20}
                                  alt="nav icon"
                                  className="w-5 h-5"
                                  unoptimized
                                />
                                Programmatic +
                              </Link>
                              <Link
                                href={routes.agenticai}
                                className="flex items-center gap-3 py-3 pl-16 pr-4 text-gray-700 hover:text-[#4169E1] transition-colors duration-200 text-sm"
                                onClick={closeAll}
                              >
                                <Image
                                  src="/images/layout/nav/agenticai.svg"
                                  width={20}
                                  height={20}
                                  alt="nav icon"
                                  className="w-5 h-5"
                                  unoptimized
                                />
                                Agentic AI
                              </Link>
                            </div>
                          )}
                        </div>

                        {renderMobileSubmenuItem(
                          "/images/layout/nav/offset.svg",
                          "Offset",
                          routes.offset
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <div
                      className="flex items-center justify-between py-3 text-gray-700 hover:text-[#4169E1] text-lg cursor-pointer transition-colors duration-200 font-medium"
                      onClick={toggleMobileResources}
                    >
                      <span>Resources</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-200 ${
                          mobileResourceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {mobileResourceOpen && (
                      <div className="bg-gray-50">
                        {renderMobileSubmenuItem(
                          "/images/layout/nav/blog.svg",
                          "Blog",
                          routes.blog
                        )}
                        {renderMobileSubmenuItem(
                          "/images/layout/nav/hwm.svg",
                          "How We Measure",
                          routes.howwemeasure
                        )}
                      </div>
                    )}
                  </div>
                */}
              </div>
            </div>

            <div className="border-t border-gray-200 p-6">
              <Link
                href={routes.getStarted}
                className="block w-full text-center bg-[#4169E1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3557C7] transition-colors"
                onClick={closeAll}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
