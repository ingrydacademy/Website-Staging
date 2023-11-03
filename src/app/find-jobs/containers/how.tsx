import Image from "next/image"
import ImageMob from "@/assets/techies/Rectangle 6.png"
import ImageDes from "@/assets/techies/Rectangle 5.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const How = () => {
    return (
        <section className='lg:flex  lg:gap-20 text-white  relative bg-secondary '>
           <Image src={ImageDes} alt="image" className="w-1/2 order-2 hidden object-cover h-full lg:flex absolute right-0" />
            <article className="flex flex-col gap-5 lg:gap-16 py-8 lg:py-20  px-12 order-1">
                <h1 className='text-xl lg:text-5xl font-semibold '>
                    How to get started
                </h1>
                <div className="flex flex-col lg:items-center lg:block gap-5">
                    <figure className="flex justify-center lg:hidden  lg:w-1/2 lg:order-2">
                        <Image src={ImageMob} alt="image" className="w-full " />
                        
                    </figure>
                    <div className="flex flex-col gap-5 lg:ml-28 lg:gap-10  lg:order-1">
                        <ul className="flex flex-col gap-5 lg:gap-8 text-sm lg:text-xl lg:text-medium ">
                            <li className="flex gap-2 lg:gap-8 items-center">
                                <div className="h-4 w-4 rounded-full bg-white"></div>
                                <p>Sign up</p>
                            </li>
                            <li className="flex gap-2 lg:gap-8 items-center">
                                <div className="h-4 w-4 rounded-full bg-white"></div>
                                <p>Take assessment</p>
                            </li>
                            <li className="flex gap-2 lg:gap-8 items-center">
                                <div className="h-4 w-4 rounded-full bg-white"></div>
                                <p>Pass Assessment</p>
                            </li>
                            <li className="flex gap-2 lg:gap-8 items-center">
                                <div className="h-4 w-4 rounded-full bg-white"></div>
                                <p>Get Placed</p>
                            </li>
                            <li className="flex gap-2 lg:gap-8 items-center">
                                <div className="h-4 w-4 rounded-full bg-white"></div>
                                <p>Get Paid </p>
                            </li>
                        </ul>
                        <button className='text-sm lg:text-xl bg-primary w-2/5 rounded py-2 lg:ml-12'>
                            <Link href={''}>
                               Coming soon
                            </Link>
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default How