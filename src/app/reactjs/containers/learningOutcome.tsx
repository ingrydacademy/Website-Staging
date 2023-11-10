import Image from "next/image";
import React from "react";
import protection from "@/assets/web-programming 1.png";
import padlock from "@/assets/data-processing 1.png";
import bullseye from "@/assets/debug 1.png";
import cyber from "@/assets/browser 1.png";
import diploma from "@/assets/ic_baseline-laptop-mac.png";
import vector from "@/assets/VectorXX.png";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF] overflow-x-hidden">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 font-medium">
        Develop essential skills and knowledge for a career in React.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-10 lg:py-20 py-10 place-items-start lg:px-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={protection}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl flex items-center justify-start">
            Learn the different types of <br /> web technologies and how they{" "}
            <br /> work together.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <div className="flex items-center justify-center">
            <Image
              alt="image"
              src={padlock}
              className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
            />
          </div>
          <p className="text-sm font-medium md:text-xl">
            Know how to program using <br /> web technologies.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={bullseye}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Learn how to create <br />
            web pages and <br /> websites using React.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={cyber}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Be able to debug web code.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={diploma}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Be familiar with data <br />
            processing using JavaScript.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={vector}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Have hands-on experience working <br />
            with React and JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcome;
