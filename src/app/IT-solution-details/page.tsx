import React from "react";

import type { Metadata } from "next";
import Hero from "./containers/hero";
import AboutProgram from "./containers/about";
import HowTo from "./containers/who-should";
import WhyShould from "./containers/whyShould";
import LearningOutcome from "./containers/learningOutcome";
import Payment from "./containers/payment";
import LearnMore from "./containers/learnMore";
import Faqs from "./containers/faqs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enroll in IT Solution Sales Course at INGRYD - Advanced Training",
  description:
    "Explore our IT Solution Sales course at Ingryd Academy. Acquire advanced skills in IT sales and unlock career opportunities in tech sales and business growth.",
};

const ItSolution = () => {
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

export default ItSolution;
