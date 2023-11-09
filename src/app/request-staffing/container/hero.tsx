import React from 'react'


import Image from 'next/image'
import sideImg from "../assets/heroImg.png"
import heroBg from "../assets/heroBg.png"
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {

  return (
    <section className='flex flex-col shrink-0 grow pb-10 lg:pb-0 lg:h-full lg:min-h-screen relative'>
      <Image src={heroBg} alt="hero image" className="object-cover absolute inset-0 -z-10" fill />
      <NavBar />
      <div className='flex flex-col px-10 shrink-0 grow h-full lg:px-16 mt-104 py-10 relative z-10'>

        <div className='w-full h-full shrink-0 grow text-white text-center lg:text-left items-center justify-center flex flex-col gap-4 lg:gap-8 '>
          <div className='lg:flex items-center'>
          <div className='lg:w-1/2 flex flex-col gap-5 lg:gap-10'>
          <h1 className='text-xl px-10 lg:px-0 lg:text-5xl lg:leading-snug font-semibold'>
          Your search for the right tech talents ends here.
          </h1>

          <p className="text-sm  lg:text-2xl ">

          Elevate your workforce, supercharge your projects, and grow your business with our top-notch staffing solutions.

          </p>
          <Button className='bg-white border-3 text-secondary hover:bg-primary hover:text-white transition-all duration-1000 ease-in-out  font-semibold lg:w-1/3'><Link href={"/request-for-staffing"}>Request Staffing</Link></Button>
          </div>
          <div className='hidden w-1/2 lg:flex justify-end'>
            <Image src={sideImg} alt='hero side image'/>
          </div>

          </div>


        </div>

      </div>
    </section>
  )
}



export default Hero