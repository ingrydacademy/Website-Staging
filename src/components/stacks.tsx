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


import Image from 'next/image'
import Link from 'next/link'
import { Book, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Grid, Navigation, Pagination, A11y, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

// import images

import CyberIcon from "@/assets/stacksIcons/Cybersecurity and data safety in cloud storage.png"
import LinuxIcon from "@/assets/stacksIcons/devicon_linux.png"
import ReactIcon from "@/assets/stacksIcons/devicon_react.png"
import DevOpsIcon from "@/assets/stacksIcons/devops.png"
import ItIcon from "@/assets/stacksIcons/itsolutions.png"
import JavaIcon from "@/assets/stacksIcons/logos_java.png"
import PythonIcon from "@/assets/stacksIcons/logos_python.png"
import ProductIcon from "@/assets/stacksIcons/product.png"
import NodeIcon from "@/assets/stacksIcons/vscode-icons_file-type-node.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react'

const CourseHighllight = () => {

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
                <h1 className='text-lg lg:text-4xl mt-5 text-center lg:mt-20 font-semibold'>Stacks Available</h1>
            <section className='flex flex-row items-center gap-8 px-0 lg:px-16 mt-2 lg:py-6'>
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
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5 '>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={CyberIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'Cybersecurity '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                Cybersecurity unlocks the door to job security. Protect digital assets and explore global opportunities as a cybersecurity expert.
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-2 text-sm lg:text-base'>
                                    <li>-Information Security Analyst </li>
                                    <li>-Cybersecurity Engineer</li>
                                    <li>-Penetration Tester</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>
                    {/* card2 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={LinuxIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'Linux '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                Linux skills fuel diverse job opportunities. Embrace the world of open-source software and take your career to a global scale
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-2 text-sm lg:text-base'>
                                    <li>-Linux Administrator </li>
                                    <li>-Linux Software Engineer</li>
                                    <li>-Linux DevOps Engineer</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>

                    {/* card 3 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={JavaIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col justify-between gap-3 grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'Java and Spring Boot '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                Unlock exciting job prospects in Java and Spring Boot. Elevate your career with the expertise to develop high-performance applications. 
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-2 text-sm lg:text-base'>
                                    <li>-Java Developer </li>
                                    <li>-Java Software Engineer</li>
                                    <li>-Java Full Stack Developer</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>

                    {/* card 4 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={PythonIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col gap-sm grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'Data Science '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                Data Science opens doors to dynamic job opportunities. Harness the power of Python to drive data-driven decisions. Your journey starts here. 
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-2 text-sm lg:text-base'>
                                    <li>-Data Analyst </li>
                                    <li>-Data Engineer</li>
                                    <li>-Machine Learning Engineer</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>

                    {/* card 5 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={ReactIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col gap-sm grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'React.js '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                React.js offers promising job opportunities in web development. Craft captivating user interfaces and seize career possibilities in Nigeria's thriving tech sector and beyond.
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-2 text-sm lg:text-base'>
                                    <li>-Frontend Developer </li>
                                    <li>-Full Stack developer</li>
                                    <li>-React Native Developer</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>
                    {/* card 6 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={NodeIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col gap-sm grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'Node.js '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                Node.js expertise paves the way for lucrative job prospects in server-side development. Join the ranks of Node.js developers powering applications worldwide.
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-2 text-sm lg:text-base'>
                                    <li>-Backend Developer </li>
                                    <li>-Full Stack developer</li>
                                    <li>-Node.js Architect</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>

                    {/* card 7 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={DevOpsIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col gap-1 grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'DevOps '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                DevOps opens up a world of opportunities. Bridge the gap between development and operations, unlocking pathways to modern software development careers
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-1 text-sm lg:text-sm'>
                                    <li>-DevOps Engineer </li>
                                    <li>-Site Reliability Engineer</li>
                                    <li>-Cloud Engineer</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>

                    {/* card 8 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={ItIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col gap-2 grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'IT solution sales '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                IT Sales is your gateway to a dynamic career. Explore the realm of technology sales and unlock opportunities with leading IT companies in Nigeria and beyond.
                                </p >

                                <p className='text-sm lg:text-base text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-sm text-sm lg:text-base'>
                                    <li>-Inside Sales Representative </li>
                                    <li>-Account Executive</li>
                                    <li>-Sales Engineer</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


                            </div>
                        </li>
                    </SwiperSlide>


                    {/* card 9 */}
                    <SwiperSlide className='cursor-grab text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg p-5'>
                        <li className="flex flex-col justify-between w-full">
                            <div className='h-20'>
                                <Image src={ProductIcon} alt="course image" />
                            </div>
                            <div className='flex flex-col gap-2 grow'>

                                <p className='text-lg lg:text-xl font-semibold'>{'Product Management '}</p>

                                <p className='text-sm lg:text-base text-left'>
                                Product Management empowers your career journey. Gain the skills to succeed and lead your way to thriving roles in product management, strategy, and innovation
                                </p >

                                <p className='text-sm lg:text-sm text-left'>
                                    Potential job opportunities:
                                </p>

                                <ul className='flex flex-col gap-1 text-sm lg:text-sm'>
                                    <li>-Associate Product Manager </li>
                                    <li>-Product Manager</li>
                                    <li>-Senior Product Manager</li>
                                </ul>


                                <Button className="bg-secondary" asChild>
                                    <Link href={`https://lms.ingrydacademy.com/signup`}>
                                        APPLY NOW
                                    </Link>
                                </Button>


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
                        className={`transition-all ease-in-out rounded-full h-3 cursor-pointer ${slideIndex === currentIndex ? 'bg-gray-500 w-9' : 'bg-secondary w-3'
                            }`}
                        onClick={() => handleDotClick(slideIndex)}
                    ></div>
                ))}
            </div>


        </>
    )
}

export default CourseHighllight