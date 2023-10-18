import Image from 'next/image'
import heroImage1 from '@/assets/abtimg.png';
import Pattern from '@/assets/ingryd pattern 4.png';
import imgConfetti from '@/assets/confetti-1.png';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
    
    return (
        <section className='flex flex-col shrink-0 grow lg:h-full lg:min-h-screen relative'>
            <Image src={heroImage1} alt="hero image" className="object-cover absolute inset-0 -z-10" fill />
            <NavBar />
            <div className='flex flex-col px-6 shrink-0 grow h-full relative z-10'>
            
                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-8 text-center'>
                    <h1 className='text-3xl lg:text-6xl lg:w-4/5 font-semibold'>
                    Building the next generation of Africa most competitive <span className='text-[#1F62FE]'>Talent</span>
                    </h1>
                    <p className="text-base lg:text-xl lg:w-1/2">We help forward-thinking companies build top-level teams by recruiting and training skilled tech talents</p>
                    <div className='mb-10 lg:mb-0'>
                        <Button  className='w-30 bg-primary text-white text-sm' asChild>
                            <Link href={'/signup'} className='py-3 px-5'>
                                Register
                            </Link>
                        </Button>

                    </div>
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