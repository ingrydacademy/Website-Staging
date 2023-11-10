import Image from "next/image";
import React from "react";
import programmer from "@/assets/programmer-2 1.png";
import bulb from "@/assets/lightbulb 1.png";
import puzzle from "@/assets/puzzle 1.png";
import teamwork from "@/assets/teamwork 1.png";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF] overflow-x-hidden">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 font-medium">
        Develop essential skills and knowledge for a rewarding career in Java
        and Spring Boot.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-10 lg:py-20 py-10 place-items-start lg:px-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={programmer}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl flex items-center justify-start">
            Attain Java programming <br /> proficiency for diverse <br />{" "}
            applications.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <div className="flex items-center justify-center">
            <Image
              alt="image"
              src={bulb}
              className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
            />
          </div>
          <p className="text-sm font-medium md:text-xl">
            Understand Object-Oriented <br /> Programming (OOP) concepts.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={puzzle}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Apply OOP principles in <br /> software development.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={teamwork}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Develop software engineering <br /> skills and contribute to <br />{" "}
            a "tech culture".
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcome;
