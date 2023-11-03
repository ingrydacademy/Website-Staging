"use client"

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

const StackHighlight = () => {

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
        setCurrentIndex(index);
        swiper?.slideTo(index);
        console.log(index)
    };



    return (
        <>

            <section className='flex lg:hidden flex-row items-center gap-8 px-0 lg:px-16 mt-2 py-6 max-w-full'>
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Navigation, A11y, Grid]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={(swiper) => {
                        setCurrentIndex(swiper.activeIndex);
                    }}

                    className='py-10'
                // navigation
                >
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={CyberIcon} alt="cybersecurity icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">Cybersecurity </h1>
                                <p className='text-xxs'>Cybersecurity unlocks the door to job security. Protect digital assets and explore global opportunities as a cybersecurity expert.</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={LinuxIcon} alt="linux icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">Linux </h1>
                                <p className='text-xxs'>Linux skills fuel diverse job opportunities. Embrace the world of open-source software and take your career to a global scale</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={JavaIcon} alt="java icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">Java and Spring Boot</h1>
                                <p className='text-xxs'>Unlock exciting job prospects in Java and Spring Boot. Elevate your career with the expertise to develop high-performance applications. Leading companies in Nigeria and beyond await your skills</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={PythonIcon} alt="python icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">Data Science with Python</h1>
                                <p className='text-xxs'>Data Science opens doors to dynamic job opportunities. Harness the power of Python to drive data-driven decisions. Your journey starts here, with pathways to rewarding careers</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={ReactIcon} alt="react icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">React.js</h1>
                                <p className='text-xxs'>React.js offers promising job opportunities in web development. Craft captivating user interfaces and seize career possibilities in Nigeria's thriving tech sector and beyond</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={NodeIcon} alt="node icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">Node.js</h1>
                                <p className='text-xxs'>Node.js expertise paves the way for lucrative job prospects in server-side development. Join the ranks of Node.js developers powering applications worldwide.</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={DevOpsIcon} alt="devops icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">DevOps</h1>
                                <p className='text-xxs'>DevOps opens up a world of job opportunities. Bridge the gap between development and operations, unlocking pathways to modern software development careers</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={ItIcon} alt="I.T. solution icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">IT Solution Sales</h1>
                                <p className='text-xxs'>IT Solution Sales is your gateway to a dynamic career. Explore the realm of technology sales and unlock opportunities with leading IT companies in Nigeria and beyond.</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-grab px-20'>
                        <li className="flex flex-col justify-between p-5 lg:p-5 shadow-xl rounded-lg h-249">
                            <div className="flex flex-col gap-2">
                                <figure>
                                    <Image src={ProductIcon} alt="product management icon" />
                                </figure>
                                <h1 className="text-sm lg:text-2xl font-semibold">Product Management</h1>
                                <p className='text-xxs'>Product Management empowers your career journey. Gain the skills to drive product success and lead your way to thriving roles in product management, strategy, and innovation</p>
                            </div>
                            <Button className="bg-secondary text-sm lg:text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
                        </li>
                    </SwiperSlide>

                </Swiper>

            </section>
            <div className="w-full lg:hidden flex justify-center gap-2 p-4">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`transition-all ease-in-out rounded-full h-3 cursor-pointer ${slideIndex === currentIndex ? 'bg-secondary w-9' : 'bg-gray-500 w-3'
                            }`}
                        onClick={() => handleDotClick(slideIndex)}
                    ></div>
                ))}
            </div>


        </>
    )
}

export default StackHighlight