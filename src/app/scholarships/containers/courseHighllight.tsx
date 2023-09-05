"use client"

import ch1 from '@/assets/ch-1.png'
import ch2 from '@/assets/ch-2.png'
import ch3 from '@/assets/ch-3.png'
import ch4 from '@/assets/crs_DatSci.png'
import ch5 from '@/assets/crs_React.png'
import ch6 from '@/assets/crs_Product.png'
import ch7 from '@/assets/crs_IT.png'

import Image from 'next/image'
import Link from 'next/link'
import { Book, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Grid, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CourseHighllight = () => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const swiper = useSwiper();



    return (
        <section className='flex flex-row items-center gap-8 px-0 lg:px-36 py-6 max-w-full overflow-x-scroll'>
            {/* <Button variant={'ghost'} className='hidden lg:flex text-forground rounded-full hover:bg-gray-200' size={'icon'}
                onClick={() => swiper.slidePrev()}
            >
                <ChevronLeft className='w-32 h-32' />
            </Button> */}


            <Swiper
                // install Swiper modules
                modules={[Pagination, Navigation, A11y, Grid]}
                spaceBetween={30}
                slidesPerView={1}
                grid={{
                    rows: 1,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation
            >
                <SwiperSlide className='cursor-grab '>
                    <li className="flex flex-col h-full w-full select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                            <Image src={ch3} alt="course image" className='object-cover' fill />
                        </div>
                        <div className='flex flex-col justify-between gap-2 grow p-2'>
                            <div className='flex justify-between p-2 border-b border-gray-100'>
                                <p className='text-2xl font-semibold'>{'Cybersecurity '}</p>
                            </div>
                            <p className='p-2 text-left'>
                                This 12-week Cybersecurity Course provides comprehensive training in protecting computer systems and networks from unauthorized access, use, disclosure, disruption, modification, or destruction...
                            </p>
                            <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                                <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                                <p className="flex items-center"><Book className='text-primary h-4' /> Virtual</p>
                            </div>
                            <div className='flex px-2 gap-4 mt-4 items-center'>
                                <Button className="bg-secondary" asChild>
                                    <Link href={`${baseUrl}/signup`}>
                                        Enroll
                                    </Link>
                                </Button>
                                <p className='text-xl font-bold line-through'>550,000</p>
                                <p className='text-xs font-semibold text-right ml-auto'>Free with scholarship</p>
                            </div>

                        </div>
                    </li>
                </SwiperSlide>
                {/* card2 */}
                <SwiperSlide className='cursor-grab '>
                    <li className="flex flex-col h-full w-full select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                            <Image src={ch2} alt="course image" className='object-cover' fill />
                        </div>
                        <div className='flex flex-col justify-between gap-2 grow p-2'>
                            <div className='flex justify-between p-2 border-b border-gray-100'>
                                <p className='text-2xl font-semibold'>{'Linux '}</p>
                            </div>
                            <p className='p-2 text-left'>
                                Discover the power of Linux, the most popular operating system used in servers, supercomputers, and embedded devices. Learn how to install and configure Linux distributions, manage files and permissions...
                            </p>
                            <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                                <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                                <p className="flex items-center"><Book className='text-primary h-4' /> Virtual</p>
                            </div>
                            <div className='flex px-2 gap-4 mt-4 items-center'>
                                <Button className="bg-secondary" asChild>
                                    <Link href={`${baseUrl}/signup`}>
                                        Enroll
                                    </Link>
                                </Button>
                                <p className='text-xl font-bold line-through'>300,000</p>
                                <p className='text-xs font-semibold text-right ml-auto'>Free with scholarship</p>
                            </div>

                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='cursor-grab '>
                    <li className="flex flex-col h-full w-full select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                            <Image src={ch1} alt="course image" className='object-cover' fill />
                        </div>
                        <div className='flex flex-col justify-between gap-2 grow p-2'>
                            <div className='flex justify-between p-2 border-b border-gray-100'>
                                <p className='text-2xl font-semibold'>{'Java '}</p>
                            </div>
                            <p className='p-2 text-left'>
                                In this intensive Java programming course, you&apos;ll learn the fundamentals of object-oriented programming and master the Java syntax. From variables and loops to classes and objects, you&apos;ll gain a deep understanding of the Java...
                            </p>
                            <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                                <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                                <p className="flex items-center"><Book className='text-primary h-4' /> Hybrid</p>
                            </div>
                            <div className='flex px-2 gap-4 mt-4 items-center'>
                                <Button className="bg-secondary" asChild>
                                    <Link href={`${baseUrl}/signup`}>
                                        Enroll
                                    </Link>
                                </Button>
                                <p className='text-xl font-bold line-through'>175,000</p>
                                <p className='text-xs font-semibold text-right ml-auto'>Free with scholarship</p>
                            </div>

                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='cursor-grab '>
                    <li className="flex flex-col h-full w-full select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                            <Image src={ch4} alt="course image" className='object-cover' fill />
                        </div>
                        <div className='flex flex-col justify-between gap-2 grow p-2'>
                            <div className='flex justify-between p-2 border-b border-gray-100'>
                                <p className='text-2xl font-semibold'>{'Python for Data Science '}</p>
                            </div>
                            <p className='p-2 text-left'>
                                In this comprehensive Python programming course, you&apos;ll dive into the world of object-oriented programming and become proficient in the Python syntax. Starting with the basics, you&apos;ll learn about variables, data types...
                            </p>
                            <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                                <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                                <p className="flex items-center"><Book className='text-primary h-4' /> Hybrid</p>
                            </div>
                            <div className='flex px-2 gap-4 mt-4 items-center'>
                                <Button className="bg-secondary" asChild>
                                    <Link href={`${baseUrl}/signup`}>
                                        Enroll
                                    </Link>
                                </Button>
                                <p className='text-xl font-bold line-through'>250,000</p>
                                <p className='text-xs font-semibold text-right ml-auto'>Free with scholarship</p>
                            </div>

                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide className='cursor-grab '>
                    <li className="flex flex-col h-full w-full select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                            <Image src={ch5} alt="course image" className='object-cover' fill />
                        </div>
                        <div className='flex flex-col justify-between gap-2 grow p-2'>
                            <div className='flex justify-between p-2 border-b border-gray-100'>
                                <p className='text-2xl font-semibold'>{'ReactJS '}</p>
                            </div>
                            <p className='p-2 text-left'>
                                Get ready to take your web development skills to the next level with our comprehensive React course! Dive into the world of component-based architecture and learn how to build fast, scalable, and maintainable applications with React...
                            </p>
                            <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                                <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                                <p className="flex items-center"><Book className='text-primary h-4' /> Hybrid</p>
                            </div>
                            <div className='flex px-2 gap-4 mt-4 items-center'>
                                <Button className="bg-secondary" asChild>
                                    <Link href={`${baseUrl}/signup`}>
                                        Enroll
                                    </Link>
                                </Button>
                                <p className='text-xl font-bold line-through'>150,000</p>
                                <p className='text-xs font-semibold text-right ml-auto'>Free with scholarship</p>
                            </div>

                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='cursor-grab '>
                    <li className="flex flex-col h-full w-full select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                            <Image src={ch6} alt="course image" className='object-cover' fill />
                        </div>
                        <div className='flex flex-col justify-between gap-2 grow p-2'>
                            <div className='flex justify-between p-2 border-b border-gray-100'>
                                <p className='text-2xl font-semibold'>{'Product Management '}</p>
                            </div>
                            <p className='p-2 text-left'>
                                In this immersive product management course, you&apos;ll embark on a journey to master the art of managing products from ideation to launch. Starting with the foundational principles of product development...
                            </p>
                            <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                                <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                                <p className="flex items-center"><Book className='text-primary h-4' /> Hybrid</p>
                            </div>
                            <div className='flex px-2 gap-4 mt-4 items-center'>
                                <Button className="bg-secondary" asChild>
                                    <Link href={`${baseUrl}/signup`}>
                                        Enroll
                                    </Link>
                                </Button>
                                <p className='text-xl font-bold line-through'>150,000</p>
                                <p className='text-xs font-semibold text-right ml-auto'>Free with scholarship</p>
                            </div>

                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='cursor-grab '>
                    <li className="flex flex-col h-full w-full select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                            <Image src={ch7} alt="course image" className='object-cover' fill />
                        </div>
                        <div className='flex flex-col justify-between gap-2 grow p-2'>
                            <div className='flex justify-between p-2 border-b border-gray-100'>
                                <p className='text-2xl font-semibold'>{'IT Solution Sales '}</p>
                            </div>
                            <p className='p-2 text-left'>
                                Transform your sales game and close more deals with our elite IT solution sales training course! Designed for ambitious sales professionals like you, this comprehensive program covers everything from the fundamentals of IT...
                            </p>
                            <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                                <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                                <p className="flex items-center"><Book className='text-primary h-4' /> Hybrid</p>
                            </div>
                            <div className='flex px-2 gap-4 mt-4 items-center'>
                                <Button className="bg-secondary" asChild>
                                    <Link href={`${baseUrl}/signup`}>
                                        Enroll
                                    </Link>
                                </Button>
                                <p className='text-xl font-bold line-through'>350,000</p>
                                <p className='text-xs font-semibold text-right ml-auto'>Free with scholarship</p>
                            </div>

                        </div>
                    </li>
                </SwiperSlide>

            </Swiper>
            {/* <Button variant={'ghost'} className='hidden lg:flex text-forground rounded-full hover:bg-gray-200' size={'icon'}
                onClick={() => swiper.slideNext()}
            >
                <ChevronRight className='w-32 h-32' />
            </Button> */}
        </section>
    )
}

export default CourseHighllight