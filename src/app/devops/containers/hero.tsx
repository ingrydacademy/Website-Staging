import Image from "next/image";
import heroImage1 from "@/assets/hero1.png";
import ch3 from "@/assets/Rectangle 278.png";
import imgConfetti from "@/assets/confetti-1.png";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section className="flex overflow-x-hidden flex-col shrink-0 grow h-full min-h-screen relative">
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
          <h1 className="text-2xl lg:text-6xl font-semibold">DevOps</h1>
          <p className="text-base lg:text-2xl md:w-[640px] h-[116px]">
            In this immersive DevOps course, you'll embark on a journey to
            master the art of managing products from ideation to launch.
            Starting with the foundational principles of product development.
          </p>
          <div className="flex lg:flex-row flex-col gap-4 items-center">
            <Button asChild className="bg-primary lg:w-1/2 w-full h-auto mt-6">
              <Link
                href={`${baseUrl}/signup`}
                className="py-4 px-16 text-sm lg:text-xl font-semibold"
              >
                Enroll Now
              </Link>
            </Button>
            <Button
              asChild
              className="bg-white text-[#FF00F8] lg:w-1/2 w-full h-auto mt-6"
            >
              <Link
                href={`${baseUrl}/signup`}
                className="py-4 px-16 text-sm lg:text-xl font-semibold"
              >
                Download Brochure
              </Link>
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
