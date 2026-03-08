import Hero from "../components/hero/Hero";
import HowItWorks from "../pages/HowItWorks";
import CTA from "./CTA";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CTA />
      <Testimonials />
    </>
  );
}