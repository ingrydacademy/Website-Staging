import Image from "next/image";
import React from "react";
import handshake from "@/assets/fa6-regular_handshake.png";
import icon from "@/assets/iconoir_presentation.png";
import vector from "@/assets/Vector.png";
import group from "@/assets/Group.png";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF]">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 font-medium">
        Develop essential skills and knowledge for a career in IT Sales
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-10 lg:py-20 py-10 place-items-start lg:px-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={handshake}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl flex items-center justify-start">
            Learn effective solution <br />
            selling strategies and
            <br />
            techniques
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <div className="flex items-center justify-center">
            <Image
              alt="image"
              src={icon}
              className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
            />
          </div>
          <p className="text-sm font-medium md:text-xl">
            Understand customer needs, <br /> crafting value propositions, br
            and negotiation skills.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={vector}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Enhance communication and <br /> presentation skills for sales{" "}
            <br />
            success.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-0">
          <Image
            alt="image"
            src={group}
            className="rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[80px] h-[80px] lg:mr-20"
          />
          <p className="text-sm font-medium md:text-xl">
            Gain insights into building <br /> client relationships and
            contributing to organizational
            <br /> growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcome;
