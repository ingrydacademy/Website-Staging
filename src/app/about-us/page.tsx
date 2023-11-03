import Hero from "./containers/hero";
import WhoAndHow from "./containers/whoAndHow";
import Aim from "./containers/aim";
import MeetTeam from "./containers/meetTeam";
import Campaign from "./containers/campaign";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Gallery from "./containers/gallery";
import Directors from "./containers/directors";

export const metadata: Metadata = {
  title: 'About Ingryd Academy - Premier Tech Training & Talent Outsourcing',
  description: 'Learn about Ingryd Academy, your premier destination for advanced tech training and talent outsourcing. Discover how we can help you elevate your tech career or find top tech talent for your business.',
};



export default function AboutUs() {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <Hero />
      <WhoAndHow />
      <Gallery />
      <Aim />
      <MeetTeam />
      <Campaign />
      <Directors />
      <Footer />
    </main>
  );
}
