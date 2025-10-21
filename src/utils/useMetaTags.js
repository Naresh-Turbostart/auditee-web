import { usePathname } from "next/navigation";

export const useMetaTags = (defaultMeta) => {
  const pathname = usePathname();

  const metaData = {
    "/": {
      title: "Climatyai",
      description:
        "Climaty AI is a platform designed to help marketers measure, optimize, and offset their carbon footprint across all marketing channels.",
    },
    "/blog/the-death-of-the-cookie-is-nothing-compared-to-the-carbon-crisis-in-programmatic-advertising": {
      title: "Digital Footprints and the Carbon Crisis in Programmatic Advertising",
      description:
        "Explore how digital footprints from programmatic advertising contribute to carbon emissions. Learn how Climaty AI helps measure, optimize, and offset your campaigns for a sustainable future.",
    },
    "/blog/top-5-ai-innovations-revolutionizing-sustainable-advertising-today": {
      title: "AI Innovations: Top AI Trends for Sustainable Advertising | Climaty AI",
      description:
        "Explore AI innovations revolutionizing ad sustainability. Learn how top AI trends like small models & predictive analytics cut carbon footprints, boost ROI, & drive greener advertising.",
    },
    "/blog/top-5-ai-innovations-revolutionizing-sustainable-advertising-today": {
      title: "AI Innovations: Top AI Trends for Sustainable Advertising | Climaty AI",
      description:
        "Explore AI innovations revolutionizing ad sustainability. Learn how top AI trends like small models & predictive analytics cut carbon footprints, boost ROI, & drive greener advertising.",
    },
    "/blog/can-ai-innovation-and-sustainability-coexist":{
      title: "The Environmental Toll of AI: Balancing Innovation with Sustainability",
      description: "AI chatbots like Grok 3, DeepSeek, and ChatGPT are transforming industries, but at what environmental cost? Explore AI’s carbon footprint, energy consumption, and the path to sustainable AI development.",
    },
    "/blog/the-19-8-billion-dilemma-why-mena-s-digital-ad-industry-growth-must-go-green":{
title: "The Carbon Cost of MENA’s $19.8B Ad Market",
description:"As MENA’s digital ad spend rises, so do emissions. Discover how brands and governments are shifting toward low-carbon, high-impact media strategies.",
    },
      "/blog/ai-agents-in-marketing-what-marketers-should-know":{
title: "AI Agents in Marketing: What Every Marketer Should Know",
description:"Read how AI agents are impacting performance marketing in 2025. Explore their role, benefits, and how marketers can adapt for the era of agentic marketing.",
    },
      "/blog/can-you-trust-ai-agents-for-marketing":{
title: "Can You Really Trust AI Agents with Marketing Your Brand?",
description:"Learn how AI marketing agents work, the potential risks and benefits posed to your brand, and how to evaluate if an AI agent is right for you.",
    },
    
  };

  return metaData[pathname] || defaultMeta;
};
