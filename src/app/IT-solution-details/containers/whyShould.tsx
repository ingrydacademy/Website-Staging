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
      <div className="flex flex-col items-center gap-4 mt-8">
        <Image
          alt="image"
          src={pattern}
          fill
          className="w-[15px] h-[20px] z-10"
        />
        <h1 className="font-semibold text-center text-3xl lg:text-5xl">
          Why you should take this course?
        </h1>
        <p className="text-base lg:text-xl text-center mb-10 font-medium">
          Grow your career in IT sales with our comprehensive course.
        </p>
      </div>
      <section className="grid sm:grid-cols-2 gap-20 mt-10">
        <div className="w-[400px] h-[460px] flex flex-col items-center relative shadow-xl">
          <div className="w-28 h-28 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image alt="image" src={programmer} className="w-[70px] h-[70px]" />
          </div>
          <div className="mt-32 flex flex-col text-center">
            <p className="text-2xl font-semibold mb-9">Hands-on Experience</p>
            <p className="text-center font-medium text-[#1A183E] px-8 leading-8">
              Our academy offers a practical approach to learning technology,
              providing students with hands-on experience and real-world
              scenarios to enhance their understanding and retention of
              concepts.
            </p>
          </div>
        </div>

        <div className="w-[400px] h-[460px] flex flex-col items-center relative shadow-xl">
          <div className="w-28 h-28 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image alt="image" src={teacher} className="w-[70px] h-[70px]" />
          </div>
          <div className="mt-32 flex flex-col text-center">
            <p className="text-2xl font-semibold mb-9">
              Industry-Leading Faculty
            </p>
            <p className="text-center font-medium text-[#1A183E] px-8 leading-8">
              Our faculty members are industry experts with years of experience
              in the field, ensuring that students receive the highest quality
              education and guidance throughout their academic journey.
            </p>
          </div>
        </div>

        <div className="w-[400px] h-[460px] flex flex-col items-center relative shadow-xl">
          <div className="w-28 h-28 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image alt="image" src={calendar} className="w-[70px] h-[70px]" />
          </div>
          <div className="mt-32 flex flex-col text-center">
            <p className="text-2xl font-semibold mb-9">Flexible Schedule</p>
            <p className="text-center font-medium text-[#1A183E] px-8 leading-8">
              Our academy offers flexible scheduling options to accommodate
              various learning preferences and busy schedules, allowing students
              to learn at their own pace and convenience.
            </p>
          </div>
        </div>
        <div className="w-[400px] h-[460px] flex flex-col items-center relative shadow-xl">
          <div className="w-28 h-28 bg-black rounded-full absolute -top-10 flex items-center justify-center">
            <Image alt="image" src={networking} className="w-[70px] h-[70px]" />
          </div>
          <div className="mt-32 flex flex-col text-center">
            <p className="text-2xl font-semibold mb-9">Network Opportunities</p>
            <p className="text-center font-medium text-[#1A183E] px-8 leading-8">
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
