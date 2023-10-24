import Image from "next/image";
import schImg2 from "@/assets/cyber-learn-more.png";
import React from "react";

const LearnMore = () => {
  return (
    <section className="relative w-full aspect-video h-[322px] shrink-0 py-20">
      <Image
        alt="image"
        src={schImg2}
        className="object-cover -z-20 leading-[60.9px]"
        fill
      />
      <p className="text-white font-semibold text-5xl text-center">
        Learn more about the course.
      </p>
      <div className="grid place-content-center">
        <button className="px-5 py-2 text-white font-semibold text-xl shadow-md bg-[#FF00F8] mt-12 rounded-md text-center">
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default LearnMore;
