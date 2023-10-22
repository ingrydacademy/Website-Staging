import Footer from '@/components/Footer'
import Benefit from './containers/benefit'
import Campaign from './containers/campaign'
import GetTalent from './containers/getTalent'
import Hero from './containers/hero'
import Offers from './containers/offers'
import UnlockTalent from './containers/unlockTalent'
import WhatWeOffer from "./containers/what-we-offer"
import NewsLetter from './containers/newsLetter'


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
      <NewsLetter />
      <Footer />
    </main>
  )
}
