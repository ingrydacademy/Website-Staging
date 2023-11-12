import Image from "next/image";
import React from "react";
import protection from "@/assets/protection 1.png";
import padlock from "@/assets/padlock 1.png";
import bullseye from "@/assets/bullseye 1.png";
import cyber from "@/assets/cyber-security 1.png";
import diploma from "@/assets/diploma 1.png";

const LearningOutcome = () => {
  return (
    <section className="pt-16 px-12 bg-[#F4DCFF] overflow-x-hidden">
      <h1 className="font-semibold text-center text-xl lg:text-3xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 font-medium">
        Develop essential skills and knowledge for a career in Cybsersecurity
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-10 lg:py-20 py-10 place-items-start lg:px-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={protection}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-base">
            Grasp network security <br /> principles and ethical hacking <br />{" "}
            fundamentals.
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
          <p className="text-sm font-medium md:text-base">
            Understand secure coding <br /> practices and encryption <br />{" "}
            techniques.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={bullseye}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-base">
            Gain hands-on experience in <br /> penetration testing and <br />{" "}
            vulnerability assessment.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={cyber}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-36"
          />
          <p className="text-sm font-medium md:text-base">
            Gain expertise in implementing <br /> robust cybersecurity measures
            <br />
            to protect against evolving cyber threats.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={diploma}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-24"
          />
          <p className="text-sm  font-medium md:text-base">
            Learn about incident response, <br /> compliance, and cybersecurity{" "}
            <br /> regulations
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcome;
