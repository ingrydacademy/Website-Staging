"use client"

import Image from 'next/image'
import heroImage1 from '@/assets/techies/Rectangle 65.png';
import Pattern from '@/assets/ingryd pattern 4.png';
import imgConfetti from '@/assets/confetti-1.png';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {

    return (
        <section className='flex flex-col shrink-0 grow pb-10 lg:pb-0 lg:h-full lg:min-h-screen relative'>
            <Image src={heroImage1} alt="hero image" className="object-cover absolute inset-0 -z-10" fill />
            <NavBar />
            <div className='flex flex-col px-6 shrink-0 grow h-full relative z-10'>

                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-4 lg:gap-8 text-center'>
                    <h1 className='text-xl lg:text-5xl lg:w-4/5 font-semibold'>
                        Get <span className='text-primary'>Borderless</span> Skills with
                        <br/><span className='text-primary'> Job Placements</span>
                    </h1>

                    <p className="text-sm  lg:text-2xl lg:w-1/2">
                        At INGRYD Academy, we offer unique advanced training with a focus on market-readiness and job placements.
                    </p>
                </div>

            </div>
           
        </section>
    )
}

export default Hero