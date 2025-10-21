"use client";
import { useEffect, useRef } from "react";

// export default function useStickyHeaders() {
//   useEffect(() => {
//     const headers = document.querySelectorAll(".js-sticky-header");

//     const handleScroll = () => {
//       headers.forEach((header, index) => {
//         const headerHeight = header.offsetHeight;
//         const origOffsetY = header.parentElement.offsetTop;

//         const adjustedOffsetY = origOffsetY - headerHeight * index;

//         if (
//           (index === 0 && window.scrollY >= origOffsetY) ||
//           (index > 0 && window.scrollY >= adjustedOffsetY)
//         ) {
//           header.classList.add("is-sticky");
//           header.style.top = `${headerHeight * index}px`;
//         } else {
//           header.classList.remove("is-sticky");
//           header.style.top = "";
//         }
//       });
//     };

//     const handleResize = () => {
//       headers.forEach((header) => header.classList.remove("is-sticky"));
//       handleScroll();
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
// }
export default function useStickyHeaders() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const headers = document.querySelectorAll(".js-sticky-header");
    }
    const handleScroll = () => {
      headers.forEach((header) => {
        const rect = header.getBoundingClientRect();
        const parent = header.parentElement;

        if (rect.top <= 0 && window.scrollY >= parent.offsetTop) {
          header.classList.add("is-sticky");
          header.style.top = "0px"; // Keep it at the top
        } else {
          header.classList.remove("is-sticky");
          header.style.top = "";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
