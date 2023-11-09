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
            <div className='flex flex-col px-6 lg:px-3 mt-104 py-10 shrink-0 grow h-full relative z-10'>

                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-8 text-center'>
                    <h1 className='text-xl lg:text-6xl lg:w-4/5 lg:hidden font-semibold'>
                        Get the right Talent you need, when you need it.
                    </h1>
                    <h1 className='hidden lg:block text-xl lg:text-6xl lg:w-4/5 font-semibold'>
                        We connect tech talents with opportunities.
                    </h1>
                    <p className="text-xs lg:hidden lg:text-2xl lg:w-1/2">Empowering Tech Careers, Bridging the Skills Gap, and Fuelling Business Innovation Through Talent Solutions</p>
                    <p className="hidden lg:block text-sm lg:text-2xl lg:w-1/2">Empowering Tech Careers, Bridging the Skills Gap, and Fuelling Business Innovation Through Talent Solutions</p>
                    <div className='mb-10 w-full flex flex-col lg:flex-row lg:justify-center lg:gap-10 gap-2 lg:mb-0'>
                        <Button variant={'outline'} className='flex text-white text-sm font-semibold bg-primary border-primary hover:text-primary hover:bg-transparent transition-all duration-1000 ease-in-out' asChild>
                            <Link href={'https://lms.ingrydacademy.com/signup'} className='py-3 px-5'>
                                Get Trained
                            </Link>
                        </Button>
                        
                        <Button className='flex items-center bg-white border-2 border-primary cursor-pointer text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-1000 ease-in-out' asChild>
                            <p className='py-3 px-5'>
                                Hire Talents
                            </p>
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