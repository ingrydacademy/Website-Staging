import flexImg from "../assets/flexImg.png"
import Image from "next/image"
import { Button } from '@/components/ui/button';
import Link from "next/link";

const TrainingMethod = () => {
    return (
        <section className='flex flex-col gap-12 lg:gap-16 items-center text-white bg-secondary py-8 lg:py-20 px-12 text-center lg:px-56 '>
            <h1 className='text-xl lg:text-4xl font-semibold '>
            Training Method
                    </h1>
            <div className="flex flex-col lg:items-center lg:flex-row gap-10 lg:gap-20 "> 
                    <div className="flex flex-col gap-5 lg:w-1/3">
                        <h1 className="font-semibold text-xl lg:text-2xl">Physical</h1>
                        <p className="">In-class instructions</p>
                    </div>
                    <div className="flex flex-col gap-5 lg:w-1/3">
                        <h1 className="font-semibold text-xl lg:text-2xl">Hybrid delivery</h1>
                        <p className="">Instructor led virtual and physical classes</p>
                    </div>
                    <div className="flex flex-col gap-5 lg:w-1/3">
                        <h1 className="font-semibold text-xl lg:text-2xl">Virtual</h1>
                        <p className="">Fully instructor-led virtual classes</p>
                    </div>
            </div>
                    <p className="text-sm lg:text-xl  lg:text-medium lg:pr-6">
                    Full time classes will only apply to a select few finalists  or in cases where customers have pre-selected and pre-paid for full physical training delivery. </p>

        </section>
    )
}

export default TrainingMethod