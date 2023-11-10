import Image from "next/image";
import React from "react";
import protection from "@/assets/lightbulb 1.png";
import padlock from "@/assets/loupe 1.png";
import bullseye from "@/assets/machine-learning 1.png";
import cyber from "@/assets/monitor 1.png";
import diploma from "@/assets/bar-chart-2 1.png";
import last from "@/assets/python 1.png";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF] overflow-x-hidden">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 font-medium">
        Develop essential skills and knowledge for a career in Data Science
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-10 lg:py-20 py-10 place-items-start lg:px-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={last}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl flex items-center justify-start">
            Gain expertise in Python <br /> programming for data <br /> science
            tasks.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <div className="flex items-center justify-center">
            <Image
              alt="image"
              src={diploma}
              className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
            />
          </div>
          <p className="text-sm font-medium md:text-xl">
            Utilize Python libraries for <br /> data manipulation, analysis,{" "}
            <br /> and visualization.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={cyber}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Understand statistical concepts <br /> and apply them to real-world{" "}
            <br /> data.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={bullseye}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Learn about machine learning <br /> algorithms and model training.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={padlock}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Explore data preprocessing,
            <br /> feature engineering, and <br /> model evaluation
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={protection}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Apply data science techniques <br /> to extract insights and <br />{" "}
            make informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcome;
