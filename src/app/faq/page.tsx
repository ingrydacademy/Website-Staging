import  { Metadata } from "next";
import React from 'react'
import Hero from './containers/hero'
import Faqs from '@/components/faqs'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Tech Training FAQs | Ingryd Academy Lagos",
  description: "Get quick answers on our tech courses, costs, schedules, and more. Learn today!",
};

const TechiesForHire = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <Faqs />
        <Footer />
    </main>
  )
}

export default TechiesForHire