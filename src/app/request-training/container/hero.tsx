import React from 'react'


import Image from 'next/image'
import heroImage1 from '../assets/Mask group.png';
import requestImage from '../assets/requestTrainingImg.png';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {

  return (
    <section className='flex flex-col shrink-0 grow pb-10 lg:pb-0 lg:h-full lg:min-h-screen relative'>
      <Image src={heroImage1} alt="hero image" className="object-cover absolute inset-0 -z-10" fill />
      <NavBar />
      <div className='flex flex-col px-10 shrink-0 grow h-full lg:px-16 relative z-10'>

        <div className='w-full h-full shrink-0 grow text-white text-center lg:text-left items-center justify-center flex flex-col gap-4 lg:gap-8 '>
          <div className='lg:flex items-center'>
          <div className='lg:w-1/2 flex flex-col gap-5 lg:gap-10'>
          <h1 className='text-xl px-10 lg:px-0 lg:text-5xl lg:leading-snug font-semibold'>
            Empower and prepare your workforce for the future of work.
          </h1>

          <p className="text-sm  lg:text-2xl ">

          Let Ingryd help you build a winning team with our well-tailored curriculum and industry standard technologies!

          </p>
          <Button className='bg-white border-3 text-secondary font-semibold lg:w-1/3'><Link href={"https://lms.ingrydacademy.com/signup"}>Request Training</Link></Button>
          </div>
          <div className='hidden w-1/2 lg:flex justify-end'>
            <Image src={requestImage} alt='hero side image'/>
          </div>

          </div>


        </div>

      </div>
    </section>
  )
}



export default Hero