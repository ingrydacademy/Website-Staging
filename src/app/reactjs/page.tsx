import React from "react";
import Hero from "./containers/hero";
import AboutProgram from "./containers/about";
import HowTo from "./containers/who-should";
import WhyShould from "./containers/whyShould";
import LearningOutcome from "./containers/learningOutcome";
import Payment from "./containers/payment";
import LearnMore from "./containers/learnMore";
import Faqs from "./containers/faqs";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ReactJs Course at Ingryd Academy - Advanced Frontend Development Training",
  description:
    "Enroll in our ReactJs course at Ingryd Academy. Gain advanced frontend development skills using React. Stay ahead in the tech industry with ReactJs expertise.",
};

const ReactJs = () => {
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

export default ReactJs;