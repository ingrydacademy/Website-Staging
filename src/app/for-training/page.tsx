import Footer from '@/components/Footer'
import Hero from './containers/hero'
import Why from './containers/why'
import How from './containers/how'
import Schedule from './containers/schedule'
import Courses from '@/components/ui/courses'
import WhatOurStudentsSay from './containers/whatStudentsSay'
import Flexibility from './containers/flexibility'
import TrainingMethod from './containers/trainingMethod'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Ingryd Academy for Advanced Tech Training and Job placement.' ,
  description: 'Join Ingryd Academy for advanced tech training and real-world job opportunities. Elevate your skills and career with our specialised programs'
}

const TechiesForTraining = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <Why />
        <Courses />
        <How />
        <Schedule />
        <TrainingMethod />
        <Flexibility />
        <WhatOurStudentsSay />
        <Footer />
    </main>
  )
}

export default TechiesForTraining