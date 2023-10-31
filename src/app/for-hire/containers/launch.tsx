import Image from "next/image"
import Img from "@/assets/techies/Rectangle 1.png"
import Img1 from "@/assets/techies/Rectangle 1 (1).png"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const Launch = () => {
  return (
    <section className="py-10 lg:py-24 px-6 lg:px-24 flex flex-col relative">
      <Image src={Img1} alt="image" className="object-cover absolute inset-0 -z-10 " fill />
      <div className="flex flex-col gap-16 items-center">
        <div className='text-center flex items-center flex-col gap-4 lg:gap-20'>
          <h1 className="text-2xl lg:text-5xl font-semibold text-white">Ready to Launch Your Tech Career?</h1>
          <Button className="w-1/2 lg:w-1/6">
            <Link href={"https://lms.ingrydacademy.com/signup"}>
              Get started
            </Link>
          </Button>

        </div>

      </div>
    </section>
    // <section className="relative text-white">
    //   <Image src={Img1} alt="bg-image" className="absolute lg:hidden z-0"/>
    //   <h1>Ready to Launch Your Tech Career?</h1>
    //   <p>Take the next step by filling out our contact form.</p>
    // <Button>
    //   <Link href={"/contact-us"}>
    //     Contact form
    //   </Link>
    // </Button>
    // </section>
  )
}

export default Launch