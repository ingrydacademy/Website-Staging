import Image from 'next/image'
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const Hero = () => {

    return (
        <section className='flex flex-col lg:gap-20 shrink-0 bg-secondary grow pb-10 lg:pb-20 relative'>
                     <NavBar />
            <div className='flex flex-col px-6 shrink-0 grow h-full relative z-10'>

                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-4 lg:gap-20 text-center'>
                    <h1 className='text-xl lg:text-5xl lg:w-4/5 font-semibold'>
                        F.A.Q
                    </h1>
                    <Button >
                        <Link href={""}>
                            Contact us
                        </Link>
                    </Button>
                </div>

            </div>
            
        </section>
    )
}

export default Hero