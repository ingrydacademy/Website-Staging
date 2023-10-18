"use client"

import Image from 'next/image'
import heroImage1 from '@/assets/heroImg1.png';
import heroImage2 from '@/assets/heroImg2.png';
import heroImage3 from '@/assets/heroImg3.png';
import imgConfetti from '@/assets/confetti-1.png';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from "framer-motion"

const Hero = () => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const slides = [
        "",
        "",
        ""
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // useEffect hook to start the interval when the component mounts
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3500);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    });

    return (
        <section className='flex flex-col shrink-0 grow lg:h-full lg:min-h-screen relative'>
            {


                currentIndex === 0 &&
                (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 100 }}
                            animate={{ opacity: 100 }}
                            transition={{ ease: "easeInOut", duration: .25 }}
                            exit={{ opacity: 50, y: 10 }}
                            className=' absolute inset-0 -z-10 '>
                            <Image src={heroImage1} alt="hero image" className="object-cover w-full h-full bg-[#1A183E]" />
                        </motion.div>
                    </AnimatePresence>

                )
            }
            {
                currentIndex === 1 &&
                (
                    <AnimatePresence>

                        <motion.div
                            initial={{ opacity: 100 }}
                            animate={{ opacity: 100 }}
                            transition={{ ease: "easeInOut", duration: .25 }}
                            exit={{ opacity: 50, y: 10 }}
                            className=' absolute inset-0 -z-10 '>
                            <Image src={heroImage2} alt="hero image" className="object-cover w-full h-full bg-[#1A183E]" />
                        </motion.div>
                    </AnimatePresence>
                )

            }
            {
                currentIndex === 2 &&
                (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 100 }}
                            animate={{ opacity: 100 }}
                            transition={{ ease: "easeInOut", duration: .25 }}
                            exit={{ opacity: 50, y: 10 }}
                            className=' absolute inset-0 -z-10 '>
                            <Image src={heroImage3} alt="hero image" className="object-cover w-full h-full bg-[#1A183E]" />
                        </motion.div>
                    </AnimatePresence>
                )

            }

            {/* <div className="object-cover absolute inset-0 -z-10 bg-[#1A183E]/80" /> */}
            <NavBar />
            <div className='flex flex-col shrink-0 grow h-full relative px-6'>

                <div className='w-full h-full shrink-0 grow text-white items-center justify-center flex flex-col gap-8 text-center'>
                    {


                        currentIndex === 0 &&
                        (
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ ease: "easeOut", duration: .35 }}
                                className='text-3xl lg:text-6xl font-semibold'>
                                Building the next generation of <br /> Africa most competitive <span className='text-blue-500'>Talent</span>
                            </motion.h1>

                        )
                    }
                    {
                        currentIndex === 1 &&
                        (
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ ease: "easeOut", duration: .35 }}
                                className='text-3xl lg:text-6xl font-semibold'>
                                Tap into our extensive database of <br /> ready to go trained tech experts
                            </motion.h1>

                        )

                    }
                    {
                        currentIndex === 2 &&
                        (
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ ease: "easeOut", duration: .35 }}
                                className='text-3xl lg:text-6xl font-semibold'>
                                Request custom training for your <br /> organization
                            </motion.h1>

                        )

                    }



                    <p className="text-lg lg:text-2xl">We help forward-thinking companies build top-level teams <br /> by recruiting and training skilled tech talents</p>
                    <Button asChild className='bg-primary w-auto h-auto mt-6'>
                        <Link href={`${baseUrl}/signup`} className="flex gap-8 items-center py-4 px-16 text-2xl font-semibold">
                                Register
                        </Link>
                    </Button>

                    <div className="w-full flex justify-center gap-2 p-4">
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className={`transition-all ease-in-out rounded-full h-3 ${slideIndex === currentIndex ? 'bg-white w-9' : 'bg-[#F4DCFF]/60 w-3'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero