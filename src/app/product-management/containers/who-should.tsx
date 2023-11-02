import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import imgHow from "@/assets/PMIMG.png";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HowTo = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
      <section className="bg-[#F4DCFF] bg-gradient-to-r from-[#1D63FE] to-[#FF00F8] flex flex-col gap-6 py-16 px-8">
        <ul className="flex flex-col lg:flex-row gap-16">
          <li className="lg:w-2/6 aspect-square relative lg:flex flex-col items-center justify-center">
            <div className="hidden lg:flex bg-[#FF00F8] rounded-xl w-full h-full"></div>
            <Image
              alt="image"
              src={imgHow}
              fill
              className="-z-0 rounded-lg lg:translate-x-8 lg:-translate-y-8 w-[310px] h-[333.25px] lg:w-[400px] lg:h-[430px]"
            />
          </li>
          <li className="lg:w-4/6 text-xl flex flex-col gap-6">
            <ul className="flex flex-col gap-6 text-white">
              <p className="lg:text-5xl text-sm font-semibold">
                Who should take this course?
              </p>
              <p className="font-normal text-sm lg:text-xl">
                Key reasons to consider enrolling in this course :
              </p>
              <li className="flex gap-4 items-center">
                <ArrowRightIcon className="w-5 h-5 shrink-0 text-primary" />
                <p className="font-normal text-sm lg:text-xl">
                  Aspiring product managers seeking to enhance their skills and
                  knowledge in the field of product development and management.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRightIcon className="w-5 h-5 shrink-0 text-primary" />
                <p className="font-normal text-sm lg:text-xl">
                  Professionals in marketing, design, or technology interested
                  in transitioning into product management roles.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRightIcon className="w-5 h-5 shrink-0 text-primary" />
                <p className="font-normal text-sm lg:text-xl">
                  Companies looking to upskill their employees in product
                  strategy, development, and launch, to create and manage
                  successful products.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HowTo;
