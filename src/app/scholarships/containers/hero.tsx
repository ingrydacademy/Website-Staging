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

                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-12 text-center'>
                    <h1 className='text-5xl lg:text-6xl font-semibold'>
                        INGRYD Scholarship Program
                    </h1>
                    <div className='h-2 rounded-full bg-white w-1/12'></div>
                    <p className="text-2xl lg:text-4xl font-semibold">Partnering for Success</p>
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