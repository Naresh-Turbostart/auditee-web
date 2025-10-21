import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
// import HeadTag from "@/components/SEO/HeadTag";
// import MixpanelProvider from "@/components/tracking/MixpanelProvider";

// const Inter = localFont({
//   src: "./fonts/Inter-Regular.woff2",
//   variable: "--font-inter",
//   weight: "400",
//   display: "swap",
// });

// export const metadata = {
//   type: "website",
//   images: [
//     {
//       url: "/images/icon.svg",
//       width: 1200,
//       height: 630,
//     },
//   ],
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GY2566ZJQJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GY2566ZJQJ');
            `,
          }}
        />

          {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T73J55CN');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Climatyai",
              url: "https://climaty.ai/",
              logo: "/images/icon.svg",
              image: "/images/icon.svg",
            }),
          }}
        />
        {/* <HeadTag /> */}
      </head>
      <body
        // className={`${Inter.variable} ${Inter.variable} antialiased`}
      >
        {/* google tag manager */}
         <noscript
          dangerouslySetInnerHTML={{
            __html: `
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T73J55CN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        {/* <MixpanelProvider /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}