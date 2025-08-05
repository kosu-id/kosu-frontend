import HeroSection from "./sections/HeroSection";
import TentangSection from "./sections/TentangSection";
import FiturSection from "./sections/FiturSection";
import HargaSection from "./sections/HargaSection";
import FaqSection from "./sections/FaqSection";
import HubungiSection from "./sections/HubungiSection";

export default function LandingPage() {
  return (
    <div className="mx-6 md:mx-11">
      <HeroSection />
      <FiturSection />
      <TentangSection />
      <HargaSection />
      <FaqSection />
      <HubungiSection />
    </div>
  );
}
