import flexImg from "../assets/fleximg.png"
import Image from "next/image"
import { Button } from '@/components/ui/button';
import Link from "next/link";

const Flexibility = () => {
    return (
        <section className='flex flex-col gap-5 lg:gap-16 items-center text-secondary py-8 lg:py-20 px-12 text-center lg:text-left'>
            <div className="flex flex-col lg:items-center lg:flex-row gap-5">

                <figure className="flex justify-center lg:w-1/2 order-2 lg:order-1">
                    <Image src={flexImg} alt="woman image" className="w-full" />
                </figure>
                <div className="flex flex-col gap-5 lg:gap-10 lg:w-1/2 lg:px-5 order-1 lg-order-2">
                    <h1 className='text-xl lg:text-4xl font-semibold '>
                        Flexibility without Boundaries
                    </h1>
                    <p className="text-sm lg:text-xl  lg:text-medium lg:pr-6">
                    Talent knows no limits, and neither do we. Embracing a hybrid approach to training, we connect tech enthusiasts from diverse backgrounds to participate. Whether trainees are learning onsite or remotely, our commitment to trainees growth remains unwavering. We ensure that each individual's learning journey is unhindered and unparalleled
                    </p>

                </div>
            </div>

        </section>
    )
}

export default Flexibility