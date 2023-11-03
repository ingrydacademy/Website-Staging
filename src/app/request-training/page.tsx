import Footer from "@/components/Footer";
import React from "react";
import Hero from "./container/hero";
import Empower from "./container/empower";
import NewsLetter from "@/components/newsLetter";
import Note from "./container/note";
import BreakThrough from "./container/breakthrough";
import WhyChooseUs from "./container/whyChoose";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Request Training Services from Ingryd Academy - Elevate Your Workforce.",
  description:
    "Request training services from Ingryd Academy to elevate your workforce. Shape the future of your business with advanced tech training. Boost your team's skills and performance.",
};

const RequestTraining = () => {
  return (
    <main className="flex h-full flex-col">
      <Hero />
      <Empower />
      <Note />
      <BreakThrough />
      <WhyChooseUs />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default RequestTraining;
