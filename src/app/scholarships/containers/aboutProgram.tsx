import Image from "next/image";
import React from "react";

import schImg1 from "@/assets/Rectangle 161.png";
import schImg2 from "@/assets/Rectangle 162.png";

const AboutProgram = () => {
  return (
    <section className="py-24 px-6 lg:px-48 flex flex-col gap-12">
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="text-xl lg:text-3xl font-semibold">
          About INGRYD Scholarship Program
        </h1>
        <p className="text-xl">
          Empowering Africa&apos;s Tech Talents, 4000 at a time.
        </p>
      </div>
      <ul className="flex flex-col-reverse lg:flex-row gap-12 py-8 items-center">
        <li className="grow lg:py-16">
          <p className="text-lg lg:text-2xl">
            In a Bold Move to Bridge the Talent Gap and re-vitalise the Tech
            Ecosystem: INGRYD Academy and{" "}
            <span className="border-b">
              Lagos State Employment Trust Fund (LSETF)
            </span>{" "}
            join forces to produce <b>4000 mid-level techies</b> yearly and
            offer them job placements in companies and organisations in dire
            need of these talents.
          </p>
        </li>
        <li className="relative w-full aspect-video lg:w-1/2 shrink-0">
          <Image
            alt="image"
            src={schImg1}
            className="object-cover rounded-lg"
          />
        </li>
      </ul>
      <hr />
      <ul className="flex flex-col-reverse lg:flex-row-reverse gap-12 py-8 items-center">
        <li className="grow lg:py-16">
          <p className="text-lg lg:text-2xl">
            The partnership between the Ingryd Scholarship Program and LSETF
            exemplifies the collaborative vision of two entities deeply
            committed to shaping the future of tech talents in Africa. ISP
            offers free training to <b>qualified techies</b> in essential skill
            sets: Java, Linux, Cybersecurity, and Data Science with Python. The
            training comprises three months of rigorous learning followed by
            hands on experience and job placements.
          </p>
        </li>
        <li className="relative w-full aspect-video lg:w-1/2 shrink-0">
          <Image
            alt="image"
            src={schImg2}
            className="object-cover rounded-lg"
          />
        </li>
      </ul>
    </section>
  );
};

export default AboutProgram;
