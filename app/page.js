import FeatureSection from "./components/featureSection/FeatureSection";
import HeroSection from "./components/heroSection/HeroSection";
import Slider from "./components/slider/Slider";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 2xl:px-48 lg:py-20">
      <HeroSection />
      <Slider />
      <FeatureSection />
    </div>
  );
}
