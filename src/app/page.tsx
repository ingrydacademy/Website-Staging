import Footer from '@/components/Footer'
import Benefit from './containers/benefit'
import Campaign from './containers/campaign'
import Experience from './containers/experience'
import GetTalent from './containers/getTalent'
import Hero from './containers/hero'
import NewsLetter from './containers/newsLetter'
import Offers from './containers/offers'
import Training from './containers/training'
import UnlockTalent from './containers/unlockTalent'
import WhatWeOffer from "./containers/what-we-offer"


export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <Hero />
      <UnlockTalent />
      <Offers />
      <GetTalent />
      <Benefit />
      <WhatWeOffer />
      <Campaign />
      <Footer />
    </main>
  )
}
