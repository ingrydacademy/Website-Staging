import Footer from '@/components/Footer'
import React from 'react'
import Hero from './container/hero'
import Empower from './container/empower'
import NewsLetter from '@/components/newsLetter'
import Note from './container/note'
import BreakThrough from './container/breakthrough'
import WhyChooseUs from './container/whyChoose'
import HowItWorks from './container/howIworks'
import Quote from './container/quote'
import Explore from './container/exploreExpertise'
import Institutions from '../about-us/containers/institutions'
import Skills from './container/skills'

const RequestTraining = () => {
    return (
        <main className="flex h-full flex-col">
            <Hero />
            <Empower />
            <Note />
            <BreakThrough />
            <WhyChooseUs />
            <HowItWorks />
            <Quote />
            <Explore />
            <Institutions />
            <Skills />
            <NewsLetter />
            <Footer />
        </main>
    )
}

export default RequestTraining