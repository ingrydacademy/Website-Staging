import React from "react";

import type { Metadata } from "next";
import Hero from "./containers/hero";
import AboutProgram from "./containers/about";
import Footer from "@/components/Footer";
import Faqs from "./containers/faqs";
import HowTo from "./containers/who-should";
import WhyShould from "./containers/whyShould";
import LearningOutcome from "./containers/learningOutcome";
import Payment from "./containers/payment";
import LearnMore from "./containers/learnMore";

export const metadata: Metadata = {
  title: "Node.js Training in Lagos | Ingryd Academy",
  description: "Join our Node.js course to build robust applications. Expert-led, practical training awaits!",
};

const NodeJs = () => {
  return (
    <main className="flex min-h-screen h-full flex-col w-full">
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

export default NodeJs;
