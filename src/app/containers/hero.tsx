import Image from 'next/image'
import heroImage1 from '@/assets/AdobeStock_371001242 1.png';
import imgConfetti from '@/assets/confetti-1.png';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className='flex flex-col shrink-0 grow h-full min-h-screen relative'>
            <Image src={heroImage1} alt="hero image" className="object-cover absolute inset-0 -z-10 bg-[#1A183E]" fill />
            <div className="object-cover absolute inset-0 -z-10 bg-[#1A183E]/80" />
            <NavBar />
            <div className='flex flex-col shrink-0 grow h-full relative px-6'>

                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-8 text-center'>
                    <h1 className='text-3xl lg:text-6xl font-semibold'>
                        Building the next generation of <br /> Africa most competitive <span className='text-blue-500'>Talent</span>
                    </h1>
                    <p className="text-lg lg:text-2xl">We help forward-thinking companies build top-level teams <br /> by recruiting and training skilled tech talents</p>
                    <Button asChild className='bg-primary w-fit mt-6'>
                        <Link href={''} className="flex gap-8 items-center py-8 px-12">
                            <p className='text-2xl font-semibold'>
                                Get Started
                            </p>
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default Hero