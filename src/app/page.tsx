import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Hero from "./_sections/Hero";
import WhatIsResponsibleGaming from "./_sections/WhatIsResponsibleGaming";
import WaysToLimitYourself from "./_sections/WaysToLimitYourself";
import Betting101 from "./_sections/Betting101";
import SupportAndHelplines from "./_sections/SupportAndHelplines";
import FAQs from "./_sections/FAQs";
import FairAndSafeGaming from "./_sections/FairAndSafeGaming";
import Footer from "./_sections/Footer";
import IntercomWidget from "@/components/IntercomWidget";


export const metadata: Metadata = {
  title: "HappyBingo - Responsible Gaming",
  description: "Learn about responsible gaming, betting tips, and support resources.",
  keywords : "HappyBingo, Responsible Gaming, Betting Tips, Support Resources, Fair & Safe Gaming",
};


export type SectionType = {
  sectionClass ?: string;
}

export default function Page() {
  const sectionClass = "scroll-mt-16";
  return (
    <main>
      <Hero />
      <WhatIsResponsibleGaming  sectionClass={sectionClass} />
      <WaysToLimitYourself sectionClass={sectionClass} />
      <Betting101 sectionClass={sectionClass} />
      <SupportAndHelplines sectionClass={sectionClass}  />
      <FAQs sectionClass={sectionClass} />
      <FairAndSafeGaming sectionClass={sectionClass} />
      <Footer />
    </main>
  );
}
