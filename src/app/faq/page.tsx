import React from 'react'
import Hero from './containers/hero'
import Faqs from '@/components/faqs'



const TechiesForHire = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <Faqs />
    </main>
  )
}

export default TechiesForHire