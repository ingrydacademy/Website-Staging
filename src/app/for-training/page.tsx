import Footer from '@/components/Footer'
import Hero from './containers/hero'
import WhoWeAre from '@/components/whoWeAre'
import Gallery from './containers/gallery'
import Why from './containers/why'
import How from './containers/how'
import Schedule from './containers/schedule'
import Courses from '@/components/ui/courses'
import FAQS from '../for-hire/containers/faqs'
import Campaign from './containers/campaign'
import WhatOurStudentsSay from './containers/whatStudentsSay'
import Flexibility from './containers/flexibility'
import TrainingMethod from './containers/trainingMethod'
import Partners from '@/components/partners'

const TechiesForTraining = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <WhoWeAre />
        <Gallery />
        <Why />
        <How />
        <Schedule />
        <Courses />
        <TrainingMethod />
        <Flexibility />
        <WhatOurStudentsSay />
        <Partners />
        <Campaign />
        <FAQS />
        <Footer />
    </main>
  )
}

export default TechiesForTraining