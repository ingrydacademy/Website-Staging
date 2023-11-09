import type { Metadata } from "next"
import Footer from '@/components/Footer'
import Hero from './containers/hero'
import Terms from './containers/terms'



export const metadata: Metadata = {
  title: 'Terms of Service | Ingryd Academy',
  description: 'Understand your rights and our terms for a seamless training experience with us.'
}


const TermsAndConditions = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <Terms/>
        <Footer />
    </main>
  )
}

export default TermsAndConditions