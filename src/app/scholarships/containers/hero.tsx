import Image from "next/image";
import heroImage1 from "@/assets/Mask group.png";
import imgConfetti from "@/assets/confetti-1.png";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section className="flex flex-col shrink-0 grow h-full min-h-screen relative">
      <Image
        src={heroImage1}
        alt="hero image"
        className="object-cover absolute inset-0 -z-10 bg-[#1A183E]"
        fill
      />
      <div className="object-cover absolute inset-0 -z-10 bg-[#1A183E]/20" />
      <NavBar />
      <div className="flex flex-col shrink-0 grow h-full relative px-6">
        <div className="w-full h-full shrink-0 grow text-white lg:px-24 items-center justify-center flex flex-col gap-12 text-center">
          <h1 className="text-xl lg:text-4xl font-semibold">
            INGRYD Scholarship Program
          </h1>
          <p className="text-base lg:text-2xl ">
            Equipping top tech talents with advanced training and job placement
            at the global level.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-secondary transition-all duration-1000 ease-in-out w-fit h-auto mt-6"
          >
            <Link
              href={`${baseUrl}/signup`}
              className="py-4 px-16 text-base lg:text-xl font-semibold w-3/4 lg:w-40"
            >
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
