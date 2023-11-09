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
            <div className='flex flex-col px-6 shrink-0 grow mt-104 py-10 h-full relative z-10'>

                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-4 lg:gap-8 text-center'>
                    <h1 className='text-xl lg:text-5xl lg:w-4/5 font-semibold'>
                        Join our <span className='text-primary'>Talent Pool <br/></span> Connect with <span className='text-primary'> Ready Employers</span>
                    </h1>

                    <p className="text-sm  lg:text-2xl lg:w-3/5">

                    Elevate Your Career. Boost Your employability potential and secure jobs without hassle.

                    </p>




                </div>

            </div>
            <Image
                src={Pattern}
                alt='ingryd pattern'
                className='absolute bottom-0 w-2/5'
            />
        </section>
    )
}

export default Hero