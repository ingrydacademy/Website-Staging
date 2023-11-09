import type { Metadata } from 'next';
import Footer from '@/components/Footer'
import Hero from './containers/hero'
import Privacy from './containers/privacy'


export const metadata: Metadata = {
  title: "Privacy Policy | Ingryd Academy",
  description: "Your data's safe with us. Read how we respect and protect your privacy online.",
};

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