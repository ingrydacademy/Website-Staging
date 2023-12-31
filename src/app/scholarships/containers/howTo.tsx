import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import imgHow from "@/assets/inghow.png";
import logo from "@/assets/logo.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HowTo = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
      <section className="bg-[#F4DCFF] bg-gradient-to-r from-[#1D63FE] to-[#FF00F8] flex flex-col gap-6 py-16 px-8 text-white">
        <h1 className="text-3xl lg:text-5xl text-center font-semibold mb-12">
          How to get started with the INGRYD <br /> scholarship program
        </h1>
        <ul className="flex flex-col lg:flex-row gap-16">
          <li className="lg:w-2/6 aspect-square relative lg:flex flex-col items-center justify-center">
            <div className="hidden lg:flex bg-foreground rounded-xl w-full h-full"></div>
            <Image
              alt="image"
              src={imgHow}
              fill
              className="object-cover -z-0 rounded-lg lg:translate-x-8 lg:-translate-y-8"
            />
            <Image
              alt="image"
              src={logo}
              className="absolute object-contain p-[20%] inset-0  mx-auto h-full w-auto"
            />
          </li>
          <li className="lg:w-4/6 text-xl flex flex-col gap-6">
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-center">
                <ArrowRightIcon className="w-5 h-5 shrink-0 text-primary" />
                <p>
                  <b>Requirements: </b>
                  Begin your journey by checking the pre-qualification
                  requirements .{" "}
                  <a className="font-semibold underline" href="#faq">
                    <span className="font-normal">Read </span>FAQ
                  </a>
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRightIcon className="w-5 h-5 shrink-0 text-primary" />
                <p>
                  <b>Sign Up: </b>
                  Sign up to the platform.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRightIcon className="w-5 h-5 shrink-0 text-primary" />
                <p>
                  <b>Take and Pass the Assessment: </b>
                  Demonstrate your skills and knowledge to qualify.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRightIcon className="w-5 h-5 shrink-0 text-primary" />
                <p>
                  <b>Enroll into Program: </b>
                  Once you pass the assessment, you can enroll in the program of
                  your choice.
                </p>
              </li>
            </ul>
            <Button className="bg-[#1A183E] flex h-fit w-fit" asChild>
              <Link href={`${baseUrl}/signup`} className="text-xl py-3 px-6">
                Start Now
              </Link>
            </Button>
          </li>
        </ul>
      </section>
      <section className="flex flex-col mt-28 items-center gap-4 py-16 px-6 lg:px-24 bg-[#F4DCFF]">
        <div className="flex flex-col items-center gap-4 mt-8">
          <h1 className="font-semibold text-center text-3xl lg:text-5xl">
            Partnering for Success:
          </h1>
          <p className="text-base lg:text-xl text-center">
            At <span className="font-semibold">INGRYD</span> Academy, we&apos;ve
            established strong partnerships with industry leaders, startups, and
            organizations who share our commitment to empowering tech
            professionals offering opportunities to work on meaningful projects.
            These partners provide a platform for talents to step into the
            professional realm, working on projects that matter and contributing
            to their innovative initiatives.
          </p>
          <Button className="bg-[#1A183E] mt-6 flex h-fit w-fit" asChild>
            <Link href={`${baseUrl}/signup`} className="text-xl py-3 px-6">
              Partner with us
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HowTo;
