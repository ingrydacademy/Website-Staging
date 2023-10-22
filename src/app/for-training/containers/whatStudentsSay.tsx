"use client"
import Quote from "@/assets/techies/icomoon-free_quotes-right.svg"
import Image from "next/image"

import { useEffect, useState } from 'react';

import { motion } from "framer-motion"

const WhatOurStudentsSay = () => {

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

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // useEffect hook to start the interval when the component mounts
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <section className='flex flex-col shrink-0 bg-[#F4DCFF] py-10 lg:py-20 px-8  grow lg:h-full lg:min-h-screen relative'>

      <h1 className='text-center text-xl lg:text-5xl font-bold mb-5 lg:mb-14'>What our students say</h1>
      <p className="mx-auto mb-5">
        <Image src={Quote} alt="quote icon" />
      </p>

      <div className='w-full h-full shrink-0 grow text-secondary items-center justify-center flex flex-col gap-8 text-center'>
        {


          currentIndex === 0 &&
          (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "easeOut", duration: .35 }}
              className='text-sm lg:text-2xl flex flex-col text-secondary'
            >
              <p>
              I'm loving the Java and Spring Boot course! The instructor is fantastic, and the hands-on approach really helps. The way the course is broken down is so engaging, and Ingryd's support is top-notch!
              </p>
              
            </motion.div>


          )
        }
        {


          currentIndex === 1 &&
          (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "easeOut", duration: .35 }}
              className='text-sm lg:text-2xl flex flex-col text-secondary'
            >
              <p>
              The Data Science with Python course has exceeded my expectations. The instructor is an expert, and the physical classes are fun and incredibly insightful. Ingryd as a whole provides a dynamic learning space
              </p>
              
            </motion.div>


          )
        }
        {


          currentIndex === 2 &&
          (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "easeOut", duration: .35 }}
              className='text-sm lg:text-2xl flex flex-col text-secondary'
            >
              <p>
              The Cybersecurity course is intense, but it's worth it! The instructors are dedicated and make complex topics easy to grasp. The academy environment fosters collaboration, and Ingryd's holistic approach to learning is impressive.
              </p>
              
            </motion.div>


          )
        }
        
        <div className="w-full flex justify-center gap-2 p-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`transition-all ease-in-out rounded-full h-3 cursor-pointer ${slideIndex === currentIndex ? 'bg-gray-500 w-9' : 'bg-secondary w-3'}`}
              onClick={() => handleDotClick(slideIndex)}
            ></div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default WhatOurStudentsSay