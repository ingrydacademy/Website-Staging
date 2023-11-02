"use client"

import ch1 from '@/assets/ch-1.png'
import ch2 from '@/assets/ch-2.png'
import ch3 from '@/assets/ch-3.png'
import ch4 from '@/assets/crs_DatSci.png'
import ch5 from '@/assets/crs_React.png'
import ch6 from '@/assets/crs_Product.png'
import ch7 from '@/assets/crs_IT.png'
import Node from '@/assets/nodejs.png'
import DevOps from '@/assets/devops.png'

import iconHand from '@/assets/icons8-swipe.gif'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowBigRight, ArrowRight, Book, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Grid, Navigation, Pagination, A11y, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react'

const TechHighlights = () => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const swiper = useSwiper();

    const handlePrev = () => {

        swiper?.slidePrev();
    }
    const handleNext = () => {
        swiper?.slideNext();
    }

    const slides = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", 
        ""

      ];

      const [currentIndex, setCurrentIndex] = useState(0)

      
      const handleDotClick = (index: number) => {
          setCurrentIndex(index); // Update the current index in your component's state
          swiper?.slideTo(index); // Update the active slide index on dot click
          console.log(index)
      };
    
      

    return (
        <>

            <section className='flex flex-row items-center gap-8 px-0 lg:px-16 mt-2 lg:py-6 max-w-full'>
                <div className="swiper-button-p">
                    <Button variant={'ghost'} className=' hidden lg:flex text-forground rounded-full hover:bg-gray-200' size={'icon'}
                        onClick={handlePrev}
                    >
                        <ChevronLeft className='w-32 h-32' />
                    </Button>

                </div>


                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Navigation, A11y, Grid]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-n',
                        prevEl: '.swiper-button-p',
                        enabled: true,
                        
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentIndex(swiper.activeIndex);
                    }}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                // navigation
                >
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={ch3} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'Cybersecurity Talents: Safeguarding the Digital World'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Virtual</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>
                    {/* card2 */}
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={ch2} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'Linux Experts : Fueling Open Source Innovation '}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Virtual</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={ch1} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'Java & Spring Boot Pros: Boosting Your Software evelopment Team'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Hybrid</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={ch4} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'Data Science Aces: Supercharge Your Data-Driven Team'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Hybrid</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>

                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={ch5} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'React Rockstars: Ignite Your Web Development Squad'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Hybrid</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={Node} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'Node Gurus: Elevate Your Web Development Team'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Hybrid</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={ch6} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'Product Visionaries: Transforming Your Product Lineup'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Hybrid</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={ch7} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'Sales Pioneers: Drive IT Solutions to New Heights'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Hybrid</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>

                    
                    <SwiperSlide className='cursor-grab'>
                        <li className="flex flex-col w-full  text-left select-none rounded-lg overflow-hidden">
                            <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                                <Image src={DevOps} alt="course image" className='object-cover' fill />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow p-2'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-lg lg:text-xl font-semibold'>{'DevOps Virtuosos: Streamline Your Software Delivery'}</p>
                                </div>
                                    <div className='flex flex-col gap-4 mt-auto'>

                                    <div className='flex gap-8 text-sm px-2 justify-between'>
                                        <p className="flex items-center">3 Months | Hybrid</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </li>
                    </SwiperSlide>


                </Swiper>
                <div className="swiper-button-n">
                    <Button variant={'ghost'} className=' hidden lg:flex text-forground rounded-full hover:bg-gray-200' size={'icon'}
                        onClick={handleNext}
                    >
                        <ChevronRight className='w-32 h-32' />
                    </Button>

                </div>
            </section>
            <div className="w-full lg:hidden flex justify-center gap-2 p-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`transition-all ease-in-out rounded-full h-3 cursor-pointer ${
              slideIndex === currentIndex ? 'bg-gray-500 w-9' : 'bg-secondary w-3'
            }`}
            onClick={() => handleDotClick(slideIndex)}
          ></div>
        ))}
      </div>


        </>
    )
}

export default TechHighlights