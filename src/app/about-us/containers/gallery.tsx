"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import First from "../images/carousel/first.png"
import Second from "../images/carousel/second.png"
import Third from "../images/carousel/third.png"
import Fourth from "../images/carousel/fourth.png"
import Fifth from "../images/carousel/fifth.png"
import Sixth from "../images/carousel/sixth.png"
import Seventh from "../images/carousel/seventh.png"
import Eighth from "../images/carousel/eighth.png"
import Nineth from "../images/carousel/nineth.png"


import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Grid, Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
    First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Nineth
]

const imageList = images.map((photo, index) => {
    return (
        <SwiperSlide key={index} className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5 '>
                <Image src={photo} alt="photo" className="rounded"/>
    </SwiperSlide>
    )
}
)


const Gallery = () => {
   

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

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef?.current.swiper;
    
        swiper.el.addEventListener('mouseenter', () => {
          swiper.autoplay.stop();
        });
    
        swiper.el.addEventListener('mouseleave', () => {
          swiper.autoplay.start();
        });
      }, []);
   
    return (
        
                    <section className=' lg:flex flex-row last: items-center gap-8 px-0 lg:px-16 mt-2 lg:py-6'>
                        <Swiper
                    ref={swiperRef}
                    // install Swiper modules
                    modules={[Pagination, Navigation, A11y, Grid,Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
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
                   {imageList}
                    

                </Swiper>
                
            <div className="w-full lg:hidden flex justify-center gap-2 p-4">
                {slides.map((slide, slideIndex) => (
                    <div
                    key={slideIndex}
                    className={`transition-all ease-in-out rounded-full h-3 cursor-pointer ${slideIndex === currentIndex ? 'bg-gray-500 w-9' : 'bg-secondary w-3'
                }`}
                ></div>
                ))}
            </div>
                </section>
          
    )
}

export default Gallery