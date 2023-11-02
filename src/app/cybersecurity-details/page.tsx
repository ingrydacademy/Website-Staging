import React from "react";

import type { Metadata } from "next";
import Hero from "./containers/hero";
import AboutProgram from "./containers/about";
import Footer from "./containers/footer";
import Faqs from "./containers/faqs";
import HowTo from "./containers/who-should";
import WhyShould from "./containers/whyShould";
import LearningOutcome from "./containers/learningOutcome";
import Payment from "./containers/payment";
import LearnMore from "./containers/learnMore";

export const metadata: Metadata = {
  title:
    "Cybersecurity Course at Ingryd Academy - Advanced Training & Certification",
  description:
    "Explore our Cybersecurity course at Ingryd Academy. Gain advanced training, skills, and certification to excel in the world of cybersecurity. Secure your tech career today.",
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
