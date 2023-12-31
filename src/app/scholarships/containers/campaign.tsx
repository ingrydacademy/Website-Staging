import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Campaign = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <section className="flex p-6 lg:p-16">
      <article className="bg-[#1A183E] rounded-lg w-full text-white flex flex-col items-center justify-center gap-8 lg:gap-16 px-6 py-16">
        <h1 className="text-xl lg:text-3xl text-center font-semibold">
          Got what it takes to be an INGRYD Scholarship Award Recipient?
        </h1>
        <section className="flex gap-6 ">
          <Button className="bg-[#FF00F8] w-fit" asChild>
            <Link
              href={`${baseUrl}/signup`}
              className="flex gap-3 items-center py-6 px-8"
            >
              Apply Now
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </section>
      </article>
    </section>
  );
};

export default Campaign;
