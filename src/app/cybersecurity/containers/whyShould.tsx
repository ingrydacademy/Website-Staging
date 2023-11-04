import React from "react";
import pattern from "@/assets/ingryd pattern 3.png";
import programmer from "@/assets/programmer 1.png";
import teacher from "@/assets/game-icons_teacher.png";
import calendar from "@/assets/calendar-alt.png";
import networking from "@/assets/networking 1.png";
import Image from "next/image";

const WhyShould = () => {
  return (
    <section
      id="cyber"
      className="flex flex-col items-center gap-4 py-16 px-6 lg:px-24"
    >
      <div className="flex flex-col items-center gap-4 mt-8 overflow-x-hidden">
        <div className="w-[855px] h-[887.13px] absolute right-0 -mt-28">
          <Image
            alt="Ingryd pattern"
            src={pattern}
            className="-z-10 top-0 right-5"
          />
        </div>

        <h1 className="font-semibold text-center text-xl lg:text-5xl">
          Why you should take this course?
        </h1>
        <p className="text-base lg:text-xl text-center mb-10 font-medium">
          Grow your career in Cybersecurity with our comprehensive course.
        </p>
      </div>
      <section className="grid sm:grid-cols-2 gap-20 mt-10 place-content-center">
        <div className="lg:w-[400px] lg:h-[460px] w-[283px] h-[260px] flex flex-col items-center relative shadow-xl">
          <div className="lg:w-28 lg:h-28 w-20 h-20 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image
              alt="image"
              src={programmer}
              className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
            />
          </div>
          <div className="lg:mt-32 mt-20 flex flex-col text-center">
            <p className="lg:text-2xl text-sm font-semibold">
              Hands-on Experience
            </p>
            <p className="text-center font-medium text-[#1A183E] px-8 lg:leading-8 leading-4 text-sm lg:text-lg py-4">
              Our academy offers a practical approach to learning technology,
              providing students with hands-on experience and real-world
              scenarios to enhance their understanding and retention of
              concepts.
            </p>
          </div>
        </div>

        <div className="lg:w-[400px] lg:h-[460px] w-[283px] h-[260px] flex flex-col items-center relative shadow-xl">
          <div className="lg:w-28 lg:h-28 w-20 h-20 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image
              alt="image"
              src={teacher}
              className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
            />
          </div>
          <div className="lg:mt-32 mt-20 flex flex-col text-center">
            <p className="lg:text-2xl text-sm font-semibold">
              Industry-Leading Faculty
            </p>
            <p className="text-center font-medium text-[#1A183E] px-8 lg:leading-8 leading-4 text-sm lg:text-lg py-4">
              Our faculty members are industry experts with years of experience
              in the field, ensuring that students receive the highest quality
              education and guidance throughout their academic journey.
            </p>
          </div>
        </div>

        <div className="lg:w-[400px] lg:h-[460px] w-[283px] h-[260px] flex flex-col items-center relative shadow-xl">
          <div className="lg:w-28 lg:h-28 w-20 h-20 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image
              alt="image"
              src={calendar}
              className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
            />
          </div>
          <div className="lg:mt-32 mt-20 flex flex-col text-center">
            <p className="lg:text-2xl text-sm font-semibold">
              Flexible Schedule
            </p>
            <p className="text-center font-medium text-[#1A183E] px-8 lg:leading-8 leading-4 text-sm lg:text-lg py-4">
              Our academy offers flexible scheduling options to accommodate
              various learning preferences and busy schedules, allowing students
              to learn at their own pace and convenience..
            </p>
          </div>
        </div>

        <div className="lg:w-[400px] lg:h-[460px] w-[283px] h-[260px] flex flex-col items-center relative shadow-xl">
          <div className="lg:w-28 lg:h-28 w-20 h-20 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image
              alt="image"
              src={networking}
              className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
            />
          </div>
          <div className="lg:mt-32 mt-20 flex flex-col text-center">
            <p className="lg:text-2xl text-sm font-semibold">
              Network Opportunities
            </p>
            <p className="text-center font-medium text-[#1A183E] px-8 lg:leading-8 leading-4 text-sm lg:text-lg py-4">
              Opportunities to connect with other students who share similar
              interests and career goals. You can collaborate, exchange ideas,
              and learn from each other's experiences, which can lead to
              valuable networking connections.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyShould;
