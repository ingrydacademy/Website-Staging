"use client"

import Image from 'next/image'
import heroImage1 from '@/assets/heroImg1.png';
import heroImage2 from '@/assets/heroImg2.png';
import heroImage3 from '@/assets/heroImg3.png';
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
                            transition={{ ease: "easeInOut", duration: .8 }}
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
                            transition={{ ease: "easeInOut", duration: .8 }}
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
                            transition={{ ease: "easeInOut", duration: .8 }}
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
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ ease: "easeOut", duration: .8 }}
                                className=''>
                                    <motion.h1 className='mb-10 text-xl lg:text-6xl font-semibold'>
                                Building the next generation of <br /> Africa's most competitive <span className=' text-blue-500 lg:text-primary'>Talent</span>
                                </motion.h1>
                                <motion.p className="text-xs px-2 lg:px-72 lg:text-2xl ">We build tech stars and connect them to a world of opportunities</motion.p>
                            </motion.div>

                        )
                    }
                    {
                        currentIndex === 1 &&
                        (
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ ease: "easeOut", duration: .8 }}
                                className=''>
                                    <motion.h1 className='mb-10 text-xl lg:text-6xl font-semibold'>
                                    Revolutionise Your Business with <br/> Tailored Tech Solutions
                                </motion.h1>
                                <motion.p className="text-xs px-2 lg:px-72 lg:text-2xl ">Stay ahead of the growth curve in your industry. Leverage on our advanced IT solutions for growth and expansion.</motion.p>
                            </motion.div>

                        )

                    }
                    {
                        currentIndex === 2 &&
                        (
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ ease: "easeOut", duration: .8 }}
                                className=''>
                                    <motion.h1 className='mb-10 text-xl lg:text-6xl font-semibold'>
                                Request custom training for your <br /> organization
                                </motion.h1>
                                <motion.p className="text-xs px-2 lg:px-72 lg:text-2xl ">Tap into our extensive database of ready tech experts to reinforce your staff and drive cutting-edge innovations</motion.p>
                            </motion.div>

                        )

                    }



                    
                    <Button asChild className='bg-primary w-full lg:w-auto h-auto mt-6'>
                        <Link href={`${baseUrl}/signup`} className="flex gap-8 items-center py-4 px-16 text-2xl font-semibold">
                        Get Started
                        </Link>
                    </Button>

                    <div className="w-full flex justify-center gap-2 p-4">
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className={`transition-all ease-in-out rounded-full h-3 ${slideIndex === currentIndex ? 'bg-primary w-9' : 'bg-[#F4DCFF]/60 w-3'
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