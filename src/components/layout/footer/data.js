import routes from "@/utils/routes";

export const footerLinks = [
  {
    title: "Explore",
    links: [
      {
        title: "Home",
        path: `${routes.pricing}`,
      },
      {
        title: "About",
        path: `${routes.about}`,
      },
      {
        title: "Service",
        path: `${routes.services}`,
      },
      {
        title: "Blogs",
        path: `${routes.blog}`,
      },
      // {
      //   title: "DAC Security Centre",
      //   path: "#",
      // },
    ],
  },
];
