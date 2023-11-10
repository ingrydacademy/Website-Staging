import Image from "next/image";
import React from "react";
import protection from "@/assets/ph_seal-check-bold.png";
import padlock from "@/assets/pmVector (1).png";
import bullseye from "@/assets/pmGroup.png";
import cyber from "@/assets/pmVector.png";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF] overflow-x-hidden">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 font-medium">
        Develop essential skills and knowledge for a career in Product
        Management.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-10 lg:py-20 py-10 place-items-start lg:px-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={cyber}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl flex items-center justify-start">
            Understand the role and <br /> competencies of a Product <br />{" "}
            Manager
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <div className="flex items-center justify-center">
            <Image
              alt="image"
              src={bullseye}
              className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
            />
          </div>
          <p className="text-sm font-medium md:text-xl">
            Gain hands-on experience <br /> in defining product <br />
            purpose and strategy
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={padlock}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Learn customer engagement <br /> skills and user-centric <br />{" "}
            approaches.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={protection}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Acquire practical knowledge in <br /> validating product
            assumptions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcome;
