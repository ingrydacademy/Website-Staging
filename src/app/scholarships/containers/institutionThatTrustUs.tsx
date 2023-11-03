import React from "react";
import img1 from "@/assets/lagosFlag.png";
import img2 from "@/assets/FPG-logo 2.png";
import img3 from "@/assets/LSETF-logo 1.png";
import img4 from "@/assets/policeLogo.png";
import img5 from "@/assets/lagInnovate.png";
import img6 from "@/assets/GIZ-logo-removebg-preview 1.png";
import Image from "next/image";

const InstitutionTrust = () => {
  return (
    <section className="flex flex-col items-center gap-4 pt-16 px-6">
      <h1 className="font-semibold text-center text-3xl lg:text-5xl">
        Institutions that trust us
      </h1>
      <div className="py-16 lg:flex lg:gap-5 gap-20 gap-x-32 place-items-center px-20 grid grid-cols-2">
        <div className="lg:w-[200px] lg:h-[63px] w-[120px] h-[38px] grid place-content-center">
          <Image
            alt="another flag"
            src={img3}
            className=" object-cover w-[full] h-[full]"
          />
        </div>

        <div className="lg:w-[200px] lg:h-[63px] w-[120px] h-[38px] grid place-content-center">
          <Image
            alt="lagos flag"
            src={img2}
            className=" object-cover w-[full] h-[full]"
          />
        </div>

        <div className="lg:w-[200px] lg:h-[63px] w-[120px] h-[38px] grid place-content-center">
          <Image
            alt="lagos flag"
            src={img1}
            className=" object-cover w-[full] h-[full]"
          />
        </div>

        <div className="lg:w-[200px] lg:h-[63px] w-[120px] h-[38px] grid place-content-center">
          <Image
            alt="lagos flag"
            src={img4}
            className=" object-cover w-[full] h-[full]"
          />
        </div>

        <div className="lg:w-[200px] lg:h-[63px] w-[120px] h-[38px] grid place-content-center">
          <Image
            alt="lagos flag"
            src={img5}
            className=" object-cover w-[full] h-[full]"
          />
        </div>

        <div className="lg:w-[200px] lg:h-[63px] w-[120px] h-[38px] grid place-content-center">
          <Image
            alt="lagos flag"
            src={img6}
            className=" object-cover w-[full] h-[full]"
          />
        </div>
      </div>
    </section>
  );
};

export default InstitutionTrust;
