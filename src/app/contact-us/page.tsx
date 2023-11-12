import React from "react";
import type { Metadata } from "next";
import Hero from "./containers/hero";
import Footer from "@/components/Footer";
import Map from "./containers/map";
import ContactDetails from "./containers/contactDetails";

export const metadata: Metadata = {
  title: "Contact Ingryd Academy | Get in Touch",
  description:
    "Have questions or need assistance? Contact Ingryd Academy today. Our team is here to help you on your tech career journey.",
};

const ContactUs = () => {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <Hero />
      <Map />
      <ContactDetails />
      <Footer />
    </main>
  );
};

export default ContactUs;
