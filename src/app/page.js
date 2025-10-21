import BuildOnTrust from "@/components/home/BuildOnTrust";
import ContactForm from "@/components/home/ContactForm";
import GlobalAdvertising from "@/components/home/GlobalAdvertising";
import Hero from "@/components/home/Hero";
import Logo from "@/components/home/Logo";
import OurAgents from "@/components/home/OurAgents";
import Testimonial from "@/components/home/Testimonal";
import UpcomingAgents from "@/components/home/UpcomingAgents";
import WhyAuditee from "@/components/home/WhyAuditee";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Logo/>
      <GlobalAdvertising/>
      <WhyAuditee/>
      <OurAgents/>
      <UpcomingAgents/>
      <BuildOnTrust/>
      <Testimonial/>
      <ContactForm/>
    </div>
  );
}
