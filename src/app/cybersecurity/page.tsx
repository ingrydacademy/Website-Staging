import React from "react";
import type { Metadata } from "next";
import Hero from "./containers/hero";
import AboutProgram from "./containers/about";
import Faqs from "./containers/faqs";
import HowTo from "./containers/who-should";
import WhyShould from "./containers/whyShould";
import LearningOutcome from "./containers/learningOutcome";
import Payment from "./containers/payment";
import LearnMore from "./containers/learnMore";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ingryd | Cybersecurity",
  description: "Acquire Borderless Tech Skills & Get Job Placements",
};

const CyberSecurity = () => {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <Hero />
      <AboutProgram />
      <HowTo />
      <WhyShould />
      <LearningOutcome />
      <Payment />
      <LearnMore />
      <Faqs />
      <Footer />
      
    </main>
  );
};

export default CyberSecurity;
