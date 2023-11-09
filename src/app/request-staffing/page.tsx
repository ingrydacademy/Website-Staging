import Footer from '@/components/Footer'
import Hero from './container/hero'
import NewsLetter from '@/components/newsLetter'
import WhyChooseUs from './container/whyChoose'
import Technologies from './container/technologies'
import Quote from '../request-training/container/quote'
import HireTalents from './container/hire'
import Note from './container/note'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Staffing Services from Ingryd Academy - Access Top Tech Talent',
  description: 'Partner with Ingryd Academy to request staffing services. Access top tech talent for your business. Fuel innovation and growth with our skilled tech professionals.',
}

const RequestTraining = () => {
    return (
        <main className="flex h-full flex-col">
            <Hero />
            <Note />
            <HireTalents />
            <WhyChooseUs />
            <Quote />
            <Technologies /> 
            <NewsLetter />
            <Footer />
        </main>
    )
}

export default RequestTraining