import Image from "next/image";
import React from "react";

import schImg2 from "@/assets/schImg2.png";
import vector from "@/assets/Vector.png";
import vector1 from "@/assets/Vector (1).png";
import vector2 from "@/assets/Vector (2).png";
import vector3 from "@/assets/Vector (3).png";

const AboutProgram = () => {
  return (
    <section className="py-40 px-2 lg:px-48 flex flex-col gap-12 relative overflow-x-hidden">
      <div className="rounded-md bg-[#1A183E] lg:h-48 -mt-48 w-full max-w-screen lg:w-[1120px] lg:-ml-20 mb-12 text-white py-4 px-8 lg:flex lg:justify-evenly flex lg:flex-row flex-col">
        <div className="flex flex-1 flex-row border-b lg:border-r md:border-b-0 p-4 justify-start lg:justify-center">
          <div className="w-11 h-11 border rounded-full flex justify-center items-center mr-3">
            <Image alt="image" src={vector} className="w-[15px] h-[20px]" />
          </div>
          <div>
            <p className="font-medium">Starts on :</p>
            <p className="font-medium">January 16, 2024</p>
          </div>
        </div>

        <div className="flex flex-1 flex-row border-b md:border-b-0 lg:border-r p-4 justify-start lg:justify-center">
          <div className="w-11 h-11 border rounded-full flex justify-center items-center mr-3">
            <Image alt="image" src={vector1} className="w-[15px] h-[20px]" />
          </div>
          <div>
            <p>Duration :</p>
            <p className="font-medium">
              -12 weeks <br /> -Hybrid <br /> -200 Hours
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-row lg:border-r border-b md:border-b-0 p-4 justify-start lg:justify-center">
          <div className="w-11 h-11 border rounded-full flex justify-center items-center mr-3">
            <Image alt="image" src={vector2} className="w-[15px] h-[20px]" />
          </div>
          <div>
            <p>Difficulty Level :</p>
            <p className="font-medium">Intermediate</p>
          </div>
        </div>

        <div className="flex flex-1 flex-row h-full p-4 justify-start lg:justify-center">
          <div className="w-11 h-11 border rounded-full flex justify-center items-center mr-3">
            <Image alt="image" src={vector3} className="w-[15px] h-[20px]" />
          </div>
          <div>
            <p className="font-medium">Course Fee :</p>
            <small className="line-through">
              <span>&#8358;</span>250,000
            </small>
            <p>
              <span>&#8358;</span>150,000
            </p>
            <p className="font-medium text-xs mt-8">
              *payment options available
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="text-xl lg:text-5xl font-semibold">About this course</h1>
      </div>
      <ul className="flex flex-col-reverse lg:flex-row gap-12 py-2 px-10">
        <li className="grow lg:py-2 leading-7">
          <div className="md:text-center text-center text-base lg:text-xl font-normal text-[#1A183E]">
            <p>
              In this intensive 12-week DevOps course, you'll embark on a
              transformative journey to elevate your skills from an intermediate
              level to that of a work-ready expert. Throughout this program,
              you'll delve deep into the world of DevOps, mastering the art of
              seamlessly integrating development and operations to streamline
              software delivery.As you progress, you'll unravel the intricacies
              of Microservices and explore various implementation architectures.
            </p>
          </div>
          <div className="md:text-center text-center mt-8 text-base lg:text-xl font-normal text-[#1A183E]">
            <p>
              By the end of this program, you'll emerge as a proficient DevOps
              Engineer, well-versed in the roles and responsibilities crucial to
              the field. You'll have the skills and knowledge to architect
              modern software solutions and tackle the challenges of today's
              technology landscape with confidence.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutProgram;
