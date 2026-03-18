import { Home } from "@/pageComponent";
import { HomeHeroSection } from "@/pageComponent/HomeHeroSection";
import { HomeSection } from "@/pageComponent/HomeSection";

export default function Homes() {
  return (
    <>
      <HomeHeroSection />
      <Home />
      <HomeSection />
    </>
  );
}
