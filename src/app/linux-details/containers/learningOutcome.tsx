import Image from "next/image";
import React from "react";
import protection from "@/assets/protection 1.png";
import padlock from "@/assets/padlock 1.png";
import bullseye from "@/assets/bullseye 1.png";
import cyber from "@/assets/cyber-security 1.png";
import diploma from "@/assets/diploma 1.png";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF]">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 mb-10 font-medium">
        Develop essential skills and knowledge for a career in Cybsersecurity
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-32 gap-10 lg:py-20 py-10 text-center lg:px-10">
        <p className="text-sm font-medium md:text-xl flex flex-col items-center">
          <Image
            alt="image"
            src={protection}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px]"
          />
          Grasp network security <br /> principles and ethical hacking <br />{" "}
          fundamentals
        </p>
        <p className="text-sm font-medium md:text-xl">
          <Image
            alt="image"
            src={padlock}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px]"
          />
          Understand secure coding <br /> practices and encryption <br />{" "}
          techniques
        </p>
        <p className="text-sm font-medium md:text-xl">
          <Image
            alt="image"
            src={bullseye}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px]"
          />
          Gain hands-on experience in <br /> penetration testing and <br />{" "}
          vulnerability assessment
        </p>
        <p className="text-sm font-medium md:text-xl">
          <Image
            alt="image"
            src={cyber}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px]"
          />
          Gain expertise in implementing <br /> robust cybersecurity measures
          <br />
          to protect against evolving cyber threats.
        </p>
        <p className="text-sm font-medium md:text-xl">
          <Image
            alt="image"
            src={diploma}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px]"
          />
          Learn about incident response, <br /> compliance, and cybersecurity{" "}
          <br /> regulations
        </p>
      </div>
    </section>
  );
};

export default LearningOutcome;
