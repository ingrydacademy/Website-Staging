"use client";

import Image from "next/image";
import schImg2 from "@/assets/cyber-learn-more.png";
import React from "react";
import Download from "@/components/Download";

const LearnMore = () => {
  return (
    <section className="relative w-full aspect-video lg:h-[322px] h-[144px] flex flex-col justify-center items-center shrink-0 lg:py-20 overflow-x-hidden">
      <Image
        alt="image"
        src={schImg2}
        className="object-cover -z-20 leading-[60.9px]"
        fill
      />
      <p className="text-white font-semibold lg:text-5xl text-base text-center">
        Learn more about the course.
      </p>
      <div className="grid place-content-center">
        <button
          className="px-5 py-2 text-white font-semibold text-base lg:text-xl shadow-md bg-[#FF00F8] lg:mt-12 mt-5 rounded-md text-center"
          //  onClick={()=> Download("/assets/java.pdf", "java.pdf")}
        >
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default LearnMore;
