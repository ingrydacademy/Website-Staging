import Footer from '@/components/Footer'
import Hero from './container/hero'
import NewsLetter from '@/components/newsLetter'
import WhyChooseUs from './container/whyChoose'
import Technologies from './container/technologies'
import Institutions from '../about-us/containers/institutions'
import Skills from './container/skills'
import Quote from '../request-training/container/quote'
import HireTalents from './container/hire'
import Note from './container/note'

const RequestTraining = () => {
    return (
        <main className="flex h-full flex-col">
            <Hero />
            <Note />
            <HireTalents />
            <WhyChooseUs />
            <Quote />
            <Technologies />
            <Institutions />
            <Skills />
            <NewsLetter />
            <Footer />
        </main>
    )
}

export default RequestTraining