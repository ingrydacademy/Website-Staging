"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import instagram from "@/assets/instagram-icon1.png";
import facebook from "@/assets/facebook-icon1.png";
import twitter from "@/assets/twitter-icon1.png";
import linkedin from "@/assets/linkedin-icon1.png";
import Image from "next/image";

const ContactDetails = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <section className="py-16 lg:px-12 grid lg:grid-cols-5 overflow-x-hidden">
      <div className="lg:border-r border-b lg:border-b-0 mb-10 lg:mb-0 border-gray-300 col-span-2 px-10">
        <div className="mb-10">
          <p className="lg:text-2xl text-lg  font-semibold">ADDRESS</p>
          <p className="lg:text-xl text-base font-medium text-[#7A7A7A] mt-4">
            4A Akiogun street New Market Road, Oniru Lagos State
          </p>
        </div>

        <div className="mb-10">
          <p className="lg:text-2xl text-lg font-semibold">PHONE</p>
          <p className="lg:text-xl text-base font-medium text-[#7A7A7A] mt-4">
            +234 (0)81 6588 3197
          </p>
        </div>

        <div className="mb-10">
          <p className="lg:text-2xl text-lg font-semibold">EMAIL</p>
          <p className="lg:text-xl text-base font-medium text-[#7A7A7A] mt-4">
            support@ingrydacademy.com
          </p>
        </div>

        <div className="mb-10">
          <p className="lg:text-2xl text-lg font-semibold">SOCIAL</p>
          <div className="flex gap-10 mt-5">
            <div className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full bg-[#FF00F8] flex justify-center items-center">
              <Link
                href="https://www.instagram.com/ingrydacademy/"
                target="_blank"
              >
                <Image
                  src={instagram}
                  alt="instagram icon"
                  className="object-cover inset-0 z-10 md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                />
              </Link>
            </div>
            <div className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full bg-[#FF00F8] flex justify-center items-center">
              <Link
                href="https://web.facebook.com/profile.php?id=100094777950769"
                target="_blank"
              >
                <Image
                  src={facebook}
                  alt="instagram icon"
                  className="object-cover inset-0 z-10 md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                />
              </Link>
            </div>
            <div className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full bg-[#FF00F8] flex justify-center items-center">
              <Link href="https://twitter.com/INGRYDAcademy" target="_blank">
                <Image
                  src={twitter}
                  alt="instagram icon"
                  className="object-cover inset-0 z-10 md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                />
              </Link>
            </div>
            <div className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full bg-[#FF00F8] flex justify-center items-center">
              <Link
                href="https://www.linkedin.com/company/ingrydacademy/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="instagram icon"
                  className="object-cover inset-0 z-10 md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 px-10">
        <form className="overflow-x-hidden">
          <div className="flex flex-col lg:flex-row gap-10 mb-10">
            <div>
              <label htmlFor="" className="text-base font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formValues.name}
                className="border border-gray-300 block w-full lg:w-[315px] p-2 rounded text-base mt-1"
              />
            </div>
            <div>
              <label htmlFor="" className="text-base font-medium">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={formValues.email}
                className="border border-gray-300 block w-full lg:w-[315px] p-2 rounded text-base mt-1"
              />
            </div>
          </div>
          <label htmlFor="" className="text-base font-medium">
            Message
          </label>
          <textarea
            className="w-full h-[200px] border border-gray-300 rounded p-2 mt-1 bg-[#ddd]"
            name="message"
            id="message"
            placeholder="Add a message <br /> Holla"
            onChange={handleTextAreaChange}
            value={formValues.message}
            style={{ resize: "none" }}
          ></textarea>

          <Button asChild className="bg-primary lg:w-1/3 w-full h-auto mt-6">
            <Link
              href={`${baseUrl}/signup`}
              className="py-2 px-16 text-sm lg:text-xl font-semibold"
            >
              SEND EMAIL
            </Link>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactDetails;
