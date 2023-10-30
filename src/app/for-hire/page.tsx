import React from 'react'
import Hero from './containers/hero'
import Why from './containers/why'
import Footer from '@/components/Footer'
import Advantage from './containers/advantage'
import Gallery from './containers/gallery'
import How from './containers/how'
import Courses from '../../components/ui/courses'
import Launch from './containers/launch'
import FAQS from './containers/faqs'
import Testimony from './containers/testimony'
import Stacks from '@/components/stacks'
import Partners from '@/components/partners'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Techies - Find Job placement in your dream company.',
  description: 'Tech enthusiasts, explore borderless employment opportunities. Elevate your tech career with advanced training and real-world outsourcing opportunities.',
}
const TechiesForHire = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <Why />
        <Advantage />
        <Gallery />
        <How />
        <Stacks />
        {/* <Courses /> */}
        <Launch />
        <Testimony />
        <Partners />
        <FAQS />
        <Footer />
    </main>
  )
}

export default TechiesForHire