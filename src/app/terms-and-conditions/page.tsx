import React from 'react'
import Footer from '@/components/Footer'
import Hero from './containers/hero'
import Terms from './containers/terms'



const TechiesForHire = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <Terms/>
        <Footer />
    </main>
  )
}

export default TechiesForHire