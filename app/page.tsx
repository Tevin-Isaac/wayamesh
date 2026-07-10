import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Marquee />
      <Story />
      <Capabilities />
      <HowItWorks />
      <MobileApp />
      <FAQ />
      <Footer />
    </>
  );
}
