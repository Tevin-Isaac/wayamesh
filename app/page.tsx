import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Story />
        <Capabilities />
        <HowItWorks />
        <FAQ />
        <MobileApp />
      </main>
      <Footer />
    </div>
  );
}
