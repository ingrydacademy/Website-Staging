import Image from "next/image";
import schImg2 from "@/assets/cyber-learn-more.png";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LearnMore = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <section className="relative w-full aspect-video lg:h-[322px] h-[144px] flex flex-col justify-center items-center shrink-0 lg:py-20 overflow-x-hidden">
      <Image
        alt="image"
        src={schImg2}
        className="object-cover -z-20 leading-[60.9px]"
        fill
      />
      <p className="text-white font-semibold text-xl lg:text-3xl text-center">
        Learn more about the course.
      </p>
      <div className="grid place-content-center">
        <Button
          asChild
          className="bg-primary hover:bg-secondary hover:text-white transition-all duration-1000 ease-in-out text-white w-full h-auto mt-6"
        >
          <Link
            href={`${baseUrl}/signup`}
            className="py-4 px-16 text-sm lg:text-xl font-semibold"
          >
            Enrol Now
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LearnMore;
