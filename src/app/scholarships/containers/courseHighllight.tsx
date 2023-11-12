"use client";

import ch1 from "@/assets/ch-1.png";
import ch2 from "@/assets/ch-2.png";
import ch3 from "@/assets/ch-3.png";
import ch4 from "@/assets/crs_DatSci.png";
import ch5 from "@/assets/crs_React.png";
import ch6 from "@/assets/crs_Product.png";
import ch7 from "@/assets/crs_IT.png";
import Node from "@/assets/nodejs.png";
import DevOps from "@/assets/devops.png";

import iconHand from "@/assets/icons8-swipe.gif";

import Image from "next/image";
import Link from "next/link";
import { Book, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Grid, Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const CourseHighllight = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const swiper = useSwiper();

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  const slides = ["", "", "", "", "", "", "", "", ""];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index); // Update the current index in your component's state
    swiper?.slideTo(index); // Update the active slide index on dot click
    console.log(index);
  };

  return (
    <>
      <section className="flex flex-row items-center gap-8 px-0 lg:px-16 mt-2 lg:py-6 max-w-full">
        <div className="swiper-button-p">
          <Button
            variant={"ghost"}
            className=" hidden lg:flex text-forground rounded-full hover:bg-gray-200"
            size={"icon"}
            onClick={handlePrev}
          >
            <ChevronLeft className="w-32 h-32" />
          </Button>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Pagination, Navigation, A11y, Grid]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-n",
            prevEl: ".swiper-button-p",
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
          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={ch3}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"Cybersecurity "}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  Gain expertise and ready-to-work experience in incident
                  response, ethical hacking, and security architecture to
                  safeguard critical infrastructure and sensitive data.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Virtual
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`/cybersecurity`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">750,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          {/* card2 */}
          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={ch2}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">{"Linux "}</p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  Discover the power of Linux, the most popular operating system
                  used in servers, supercomputers, and embedded devices. Learn
                  how to install and configure Linux distributions, manage files
                  and permissions...
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Virtual
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`/linux`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">550,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={ch1}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"Java and Spring Boot"}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  In this intensive Java and Spring Boot programming course,
                  you'll learn the fundamentals of object-oriented programming
                  and master the Java syntax. From variables and loops to
                  classes and objects....
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Hybrid
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`/java-and-spring-boot`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">450,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={ch4}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"Data Science"}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  This comprehensive program is designed to empower you with the
                  skills and knowledge needed to harness the full potential of
                  data. Whether you're an aspiring data scientist, a business
                  analyst...
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Hybrid
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`/data-science`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">550,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>

          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={ch5}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"ReactJS "}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  Get ready to take your web development skills to the next
                  level with our comprehensive React course! Dive into the world
                  of component-based architecture and learn how to build fast,
                  scalable, and maintainable applications with React...
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Hybrid
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`/reactjs`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">350,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={Node}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"NodeJS "}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  Embrace the power of server-side rendering with our
                  comprehensive NodeJS course! Learn how to build robust,
                  high-performance web applications using NodeJS, Express, and
                  other popular frameworks...
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Hybrid
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`nodejs`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">450,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={ch6}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"Product Management "}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  In this immersive product management course, you'll embark on
                  a journey to master the art of managing products from ideation
                  to launch. Starting with the foundational principles of
                  product development...
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Hybrid
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`product-management`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">250,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={ch7}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"IT Solution Sales "}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  Transform your sales game and close more deals with our elite
                  IT solution sales training course! Designed for ambitious
                  sales professionals like you, this comprehensive program
                  covers everything from the fundamentals of IT...
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Hybrid
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`IT-solution-sales`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">350,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>

          <SwiperSlide className="cursor-grab">
            <li className="flex flex-col w-full  text-left select-none border border-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full shrink-0 bg-gray-100 h-32 relative">
                <Image
                  src={DevOps}
                  alt="course image"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-3 grow p-2">
                <div className="flex justify-between p-2 border-b border-gray-100">
                  <p className="text-lg lg:text-xl font-semibold">
                    {"DevOps "}
                  </p>
                </div>
                <p className="overflow-clip line-clamp-5 text-ellipsis px-2 text-xs lg:text-sm text-left">
                  In this immersive DevOps course, you'll embark on a journey to
                  master the art of managing products from ideation to launch.
                  Starting with the foundational principles of product
                  development...
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex gap-8 text-sm px-2 justify-between">
                    <p className="flex items-center">
                      <Calendar className="text-primary h-4" /> 12 Weeks
                    </p>
                    <p className="flex items-center">
                      <Book className="text-primary h-4" /> Hybrid
                    </p>
                  </div>
                  <div className="flex px-2 lg:gap-4 justify-between ">
                    <Button className="bg-secondary" asChild>
                      <Link href={`devops`}>Learn more</Link>
                    </Button>
                    <div className="flex flex-col lg:gap-1 text-right">
                      <p className="text-xl font-bold line-through">250,000</p>
                      <div className="text-center">
                        <p className="text-xs font-medium">
                          Free with scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-n">
          <Button
            variant={"ghost"}
            className=" hidden lg:flex text-forground rounded-full hover:bg-gray-200"
            size={"icon"}
            onClick={handleNext}
          >
            <ChevronRight className="w-32 h-32" />
          </Button>
        </div>
      </section>
      <div className="w-full lg:hidden flex justify-center gap-2 p-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`transition-all ease-in-out rounded-full h-3 cursor-pointer ${
              slideIndex === currentIndex
                ? "bg-gray-500 w-9"
                : "bg-secondary w-3"
            }`}
            onClick={() => handleDotClick(slideIndex)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default CourseHighllight;
