"use client";

import Image from "next/image";
import heroImage1 from "@/assets/hero1.png";
import ch3 from "@/assets/Rectangle 53.png";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Download from "@/components/Download";

const Hero = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section className="flex flex-col shrink-0 grow h-full min-h-screen relative overflow-x-hidden">
      <Image
        src={heroImage1}
        alt="hero image"
        className="object-cover absolute inset-0 -z-10 bg-[#1A183E]"
        fill
      />
      <div className="object-cover absolute inset-0 -z-10 bg-[#1A183E]/60" />
      <NavBar />
      <div className="grid lg:grid-cols-3 shrink-0 grow h-full relative px-6 mx-auto">
        <div className="w-full h-full shrink-0 grow text-white lg:px-24 grid col-span-2 place-content-center gap-12 text-left">
          <h1 className="text-xl lg:text-4xl font-semibold">Cybersecurity</h1>
          <p className="text-base lg:text-2xl">
            Gain expertise and ready-to-work experience in incident response,
            ethical hacking, and security architecture to safeguard critical
            infrastructure and sensitive data.
          </p>
          <div className="flex lg:flex-row flex-col gap-4 items-center">
            <Button
              asChild
              className="bg-primary hover:bg-secondary transition-all duration-1000 ease-in-out lg:w-1/4 w-full h-auto mt-6"
            >
              <Link
                href={`${baseUrl}/signup`}
                className="py-4 px-16 text-sm lg:text-xl font-semibold"
              >
                Enroll Now
              </Link>
            </Button>
            <Button
              asChild
              className="bg-white hover:bg-secondary hover:text-white transition-all duration-1000 ease-in-out text-[#FF00F8] lg:w-60 w-full h-auto mt-6"
              onClick={() =>
                Download("/assets/cybersecurity.pdf", "cybersecurity.pdf")
              }
            >
              <p className="py-4 px-16 text-sm lg:text-xl font-semibold">
                Download Brochure
              </p>
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full pr-10">
            <Image
              src={ch3}
              alt="hero small image"
              className="object-cover inset-0 -z-10 bg-[#1A183E] w-full h-96 mt-16 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
