"use client"
import Quote from "@/assets/techies/icomoon-free_quotes-right.svg"
import Image from "next/image"
import EfeImg from "@/assets/techies/grads/efe.png"
import ElleImg from "@/assets/techies/grads/emmanuella.png"
import VictoriaImg from "@/assets/techies/grads/abimbola.png"

import { useEffect, useState } from 'react';

import { motion } from "framer-motion"

const Testimony = () => {

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
    const intervalId = setInterval(nextSlide, 8000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <section className='flex flex-col shrink-0 bg-[#F4DCFF] py-10 lg:py-20 px-8  grow lg:h-full lg:min-h-screen relative'>

      <h1 className='text-center text-xl lg:text-5xl font-bold mb-5 lg:mb-14'>What our graduates say</h1>
      <p className="mx-auto mb-5 lg:mb-14">
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
              transition={{ ease: "easeOut", duration: .85 }}
              className='text-sm lg:text-2xl flex flex-col gap-5 lg:gap-8 text-secondary'
            >
              <p>
                I recently completed the Java and Spring Boot course with INGRYD Academy and wanted to share my feedback. The course was very informative and helped me understand the basics of Java and Spring Boot. The exercises were engaging and provided a good opportunity to practice what I learned. The instructor was knowledgeable and responsive to questions. Overall, I would highly recommend this academy to anyone looking to get started with Java and Spring Boot
              </p>
              <div className="flex gap-2 justify-center items-center font-semibold text-xs lg:text-lg">
                <Image src={EfeImg} alt="graduate photo" className="h-6 w-6 lg:h-12 lg:w-12" />
                <p>Efe Franklin Okorobie</p>
              </div>
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
              transition={{ ease: "easeOut", duration: .85 }}
              className='text-sm lg:text-2xl flex flex-col gap-5 lg:gap-8 text-secondary'
            >
              <p>
              I recently took the Java and Spring Boot course through the INGRYD Academy. The material covered current best practices in areas like developing server-side applications, creating and managing RESTful web services, and working with databases using SQL and NoSQL technologies. The instructor presented the content clearly and provided useful real-world examples. I would definitely recommend Ingryd.
              </p>
              <div className="flex gap-2 justify-center items-center font-semibold text-xs lg:text-lg">
                <Image src={ElleImg} alt="graduate photo" className="h-6 w-6 lg:h-12 lg:w-12" />
                <p>Emmanuella Uche Okafor</p>
              </div>
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
              transition={{ ease: "easeOut", duration: .85 }}
              className='text-sm lg:text-2xl flex flex-col gap-5 lg:gap-8 text-secondary'
            >
              <p>
              I completed the Data Science with Python course offered by INGRYD. The curriculum covered key data science concepts like data cleaning, visualization, machine learning models, and more. The exercises allowed me to get hands-on practice with Python. The instructor was engaging and knowledgeable. Overall, this was an excellent introductory course to data science and I feel prepared to apply these skills in a job
              </p>
              <div className="flex gap-2 justify-center items-center font-semibold text-xs lg:text-lg">
                <Image src={VictoriaImg} alt="graduate photo" className="h-6 w-6 lg:h-12 lg:w-12" />
                <p>Victoria Abimbola</p>
              </div>
            </motion.div>


          )
        }
        
        <div className="w-full flex justify-center gap-2 p-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`transition-all ease-in-out rounded-full h-3 cursor-pointer ${slideIndex === currentIndex ? 'bg-secondary w-9' : 'bg-gray-500 w-3'}`}
              onClick={() => handleDotClick(slideIndex)}
            ></div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Testimony