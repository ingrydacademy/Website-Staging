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
  title: "Cybersecurity Course at Ingryd Academy - Advanced Training & Certification",
  description: "Explore our Cybersecurity course at Ingryd Academy. Gain advanced training, skills, and certification to excel in the world of cybersecurity. Secure your tech career today",
};


// export const metadata: Metadata = {
//   title: 'About Ingryd Academy - Premier Tech Training & Talent Outsourcing',
//   description: 'Learn about Ingryd Academy, your premier destination for advanced tech training and talent outsourcing. Discover how we can help you elevate your tech career or find top tech talent for your business.',
// };

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
