import Footer from "@/components/Footer";
import Benefit from "./containers/benefit";
import Experience from "./containers/experience";
import GetTalent from "./containers/getTalent";
import Hero from "./containers/hero";
import NewsLetter from "./containers/newsLetter";
import Offers from "./containers/offers";
import Training from "./containers/training";
import UnlockTalent from "./containers/unlockTalent";
import AboutProgram from "./containers/aboutProgram";
import Campaign from "./containers/campaign";
import Structure from "./containers/structure";
import HowTo from "./containers/howTo";
import Faqs from "./containers/faqs";

import type { Metadata } from "next";
import InstitutionTrust from "./containers/institutionThatTrustUs";

export const metadata: Metadata = {
  title: "Ingryd | Scholarship",
  description: "Acquire Borderless Tech Skills & Get Job Placements",
};

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <Hero />
      <AboutProgram />
      <Structure />
      <UnlockTalent />
      <HowTo />
      <InstitutionTrust />
      <Faqs />
      <Campaign />
      <Footer />
    </main>
  );
}
