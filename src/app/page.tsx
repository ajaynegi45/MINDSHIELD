import Image from "next/image";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {HeroHighlightSection} from "@/components/HeroHighlightSection";
import {CardsCarousel} from "@/components/CardsCarousel";
import {OurTeam} from "@/components/OurTeam";

export default function Home() {
  return (
    <>
      <HeroHighlightSection/>
        <CardsCarousel/>
        <OurTeam/>

    </>
  );
}
