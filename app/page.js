import React from "react";
import HomeBanner from "@/components/HomeBanner";
import BrandMarquee from "@/components/BrandMarquee";
import Faq from "@/components/sections/Faq";
import Guarantee from "@/components/sections/Guarantee";
import HowWorks from "@/components/sections/HowWorks";
import PriceList from "@/components/sections/PriceList";
import RatingAndReview from "@/components/sections/RatingAndReview";
import Services from "@/components/sections/Services";
import Divider from "@/components/ui/Divider";
import WhyChoose from "@/components/sections/WhyChoose";
import SeasonReady from "@/components/sections/SeasonReady";
import Slider from "@/components/sections/Slider";
import NearWorkshop from "@/components/sections/NearWorkshop";
import SpareSlider from "@/components/sections/SpareSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream ">
      <HomeBanner />
      <BrandMarquee />
      <Services />
      <Divider />
      <SeasonReady />
      <Divider />
      <Slider />
      <Divider />
      <NearWorkshop />
      <Divider />
      <Guarantee />
      <Divider />
      <HowWorks />
      <Divider />
      <RatingAndReview />
      <Divider />
      <Faq />
      <Divider />
      <SpareSlider />
      <Divider />
      <WhyChoose />
      <Divider />
      <PriceList />
    </main>
  );
}
