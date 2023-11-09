import React from "react";

import type { Metadata } from "next";
import AboutProgram from "./containers/about";
import Hero from "./containers/hero";
import HowTo from "./containers/who-should";
import WhyShould from "./containers/whyShould";
import LearningOutcome from "./containers/learningOutcome";
import Payment from "./containers/payment";
import LearnMore from "./containers/learnMore";
import Faqs from "./containers/faqs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advanced Java and Spring Boot Training - Get Trained and Get Placed.",
  description: "Discover our Java and Spring Boot course at Ingryd Academy. Enhance your tech skills and career opportunities.",
};

const Java = () => {
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

export default Java;
