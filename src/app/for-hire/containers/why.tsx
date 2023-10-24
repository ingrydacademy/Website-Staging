import Woman from "@/assets/techies/Rectangle 293.png"
import Image from "next/image"
import { Button } from '@/components/ui/button';
import Link from "next/link";

const Why = () => {
    return (
        <section className='flex flex-col gap-5 lg:gap-16 items-center text-white py-8 lg:py-20 px-12 text-center bg-gradient-to-r from-[#1D63FE] to-[#FF00F8]'>
            <h1 className='text-xl lg:text-5xl font-semibold '>
                Why INGRYD academy?
            </h1>
            <div className="flex flex-col lg:items-center lg:flex-row gap-5">
            <figure className="flex justify-center lg:w-1/2 lg:order-2">
                <Image src={Woman} alt="woman image" className="w-full" />
            </figure>
            <div className="flex flex-col gap-5 lg:gap-10 items-center lg:w-1/2 lg:order-1">
            <p className="text-sm lg:text-2xl lg:text-medium">
            INGRYD Academy offers advanced tech training, get you market-ready and connects you with top companies. Got what it takes to be an invaluable asset to these ready employers?
            </p>
            <Button className='flex items-center text-sm lg:text-lg w-2/5  lg:h-14' asChild>
                <Link href={'https://lms.ingrydacademy.com/signup'} className='py-3 px-10'>
                    APPLY NOW
                </Link>
            </Button>
            </div>
            </div>

        </section>
    )
}

export default Why