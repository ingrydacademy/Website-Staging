import Footer from '@/components/Footer'
import Hero from './containers/hero'
import Privacy from './containers/privacy'



const PrivacyPolicy = () => {
  return (
    <main className="flex h-full flex-col">
        <Hero />
        <Privacy/>
        <Footer />
    </main>
  )
}

export default PrivacyPolicy