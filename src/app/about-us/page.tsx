
import Hero from './containers/hero'

import WhoAndHow from './containers/whoAndHow'
import Aim from './containers/aim'
import MeetTeam from './containers/meetTeam'
import Campaign from './containers/campaign'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Gallery from './containers/gallery'
import Directors from './containers/directors'
import Institutions from './containers/institutions'

export const metadata: Metadata = {
  title: 'Ingryd | About-Us',
  description: 'Acquire Borderless Tech Skills & Get Job Placements',
}


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
      <Institutions />
      <Footer />
    </main>
  )
}
