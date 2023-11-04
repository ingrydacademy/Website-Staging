import React from 'react'
import Hero from './containers/hero'
import Faqs from '@/components/faqs'
import Footer from '@/components/Footer'



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