import flexImg from "../assets/flexImg.png"
import Image from "next/image"
import { Button } from '@/components/ui/button';
import Link from "next/link";

const HireTalents = () => {
    return (
        <section className='flex flex-col gap-12 lg:gap-16 items-center text-white bg-secondary mt-5 mb-10 lg:mt-10 lg:mb-20 rounded-lg w-90 mx-auto py-8 lg:pt-20 lg:pb-10 px-5 text-center lg:px-56 '>
            <h1 className='text-xl lg:text-4xl font-semibold relative'>
            Hire quality tech talents
                    </h1>
                    <p className="text-sm lg:text-xl  lg:text-medium pr-0 lg:pr-6">
                    Job boards and online platforms may not provide the expertise and quality you need, as candidates may not have the skills they claim to have. With Ingryd, you can find highly vetted and qualified talent quickly and easily. </p>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 "> 
                    <div className="flex flex-col gap-5 lg:w-1/3">
                        <h1 className="font-semibold text-xl lg:text-2xl">Qualified Candidates</h1>
                        <p className="">We employ a rigorous screening process to ensure that our talent pool includes only the best and meet qualified candidates.</p>
                    </div>
                    <div className="flex flex-col gap-5 lg:w-1/3 lg:border-l lg:border-r lg:px-5 lg:border-t-0 lg:border-b-0 py-5 lg:py-0 border-t border-b ">
                        <h1 className="font-semibold text-xl lg:text-2xl">Flexible models</h1>
                        <p className="">Hire individuals or a team for your temporary, permanent or project-based needs.</p>
                    </div>
                    <div className="flex flex-col gap-5 lg:w-1/3">
                        <h1 className="font-semibold text-xl lg:text-2xl">Diverse skill sets</h1>
                        <p className="">Our network has qualified specialists that cover a plethora of tools and frameworks.</p>
                    </div>
            </div>
            <Button className="bg-primary translate-y-14"><Link href={"https://lms.ingrydacademy.com/signup"}>Request Staffing</Link></Button>
                    

        </section>
    )
}

export default HireTalents