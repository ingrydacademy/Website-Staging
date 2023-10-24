import Man from "../assets/Man.png"
import Image from "next/image"
import { Button } from '@/components/ui/button';
import Link from "next/link";

const BreakThrough = () => {
    return (
        <section className='flex flex-col gap-5 lg:gap-16 text-center lg:text-left text-secondary py-8 lg:py-20 px-12'>
            
            <div className="flex flex-col lg:items-center lg:flex-row gap-5">
            <figure className="flex justify-center lg:w-1/2 ">
                <Image src={Man} alt="woman image" className="w-full" />
            </figure>
            <div className="flex flex-col gap-5 items-center lg:items-start lg:gap-20 lg:w-1/2 lg:px-8 ">
            <h1 className='text-xl lg:text-3xl font-semibold '>
            Get your team ready for the Next Breakthrough
            </h1>
            <p className="text-sm lg:text-base lg:font-medium">
            Empower your organization with a tailored tech curriculum, arming your team with the skills to meet your business needs and drive impactful results.
            </p>
            <Button className='flex items-center text-sm lg:text-lg w-3/5 lg:h-14 text-center' asChild>
                <Link href={'/signup'} className='py-3 px-10'>
                Request Training
                </Link>
            </Button>
            </div>
            </div>

        </section>
    )
}

export default BreakThrough