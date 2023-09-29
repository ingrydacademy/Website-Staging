
import WhyIs from './containers/whyIs'
import Hero from './containers/hero'

import WhoIs from './containers/whoIs'
import Aim from './containers/aim'
import MeetTeam from './containers/meetTeam'
import Campaign from './containers/campaign'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingryd | About-Us',
  description: 'Acquire Borderless Tech Skills & Get Job Placements',
}


export default function AboutUs() {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <Hero />
      <WhoIs />
      <WhyIs />
      <Aim />
      <MeetTeam />
      <Campaign />
      <Footer />
    </main>
  )
}
