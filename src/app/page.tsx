import Footer from "@/components/Footer";
import Benefit from "./containers/benefit";
import Campaign from "./containers/campaign";
import GetTalent from "./containers/getTalent";
import Hero from "./containers/hero";
import Offers from "./containers/offers";
import UnlockTalent from "./containers/unlockTalent";
import WhatWeOffer from "./containers/what-we-offer";
import NewsLetter from "../components/newsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Ingryd Academy, Lagos | Premier Tech Training & Real-World Outsourcing",
  description:
    "Elevate your tech career. Experience advanced tech training and real-world outsourcing opportunities, regardless of location. Request tech talents and staff training to grow your business.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <Hero />
      <UnlockTalent />
      <Offers />
      <GetTalent />
      <Benefit />
      <WhatWeOffer />
      <Campaign />
      <NewsLetter />
      <Footer />
    </main>
  );
}
