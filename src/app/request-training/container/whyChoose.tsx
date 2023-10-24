import Woman from "../assets/woman-smiling-2-removebg-preview 1.png"
import Image from "next/image"
import { Button } from '@/components/ui/button';
import Link from "next/link";

const WhyChooseUs = () => {
    return (
        <section className='flex flex-col gap-5 lg:gap-16  bg-gradient-to-r from-[#1D63FE] to-[#FF00F8] text-center lg:text-left text-white pt-8 lg:py-20 px-12 relative'>
            
            <div className="flex flex-col  lg:flex-row gap-5">
            
            <div className="flex flex-col gap-5 items-center lg:items-start lg:gap-10 lg:w-2/5 lg:px-8 ">
            <h1 className='text-xl lg:text-5xl font-semibold '>
            Why choose us?
            </h1>
            <p className="text-sm lg:text-lg lg:font-medium">
            We stand out as a reliable and trustworthy partner for our clients by delivering quality tech talent innovation and competitive pricing, ideal for your company's staff training needs.
            </p>
            </div>

            <ul className="grid grid-cols-2 gap-5 text-left  lg:w-3/5  ">
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Expertise</h1>
                <p className="text-8 lg:text-base">Seasoned industry professionals with years of hands-on experience. Our instructors are experts in their respective fields, ensuring your team receives top-notch training.</p>
               </li>
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Customization</h1>
                <p className="text-8 lg:text-base">Every company is unique. Our programs are customized to address your specific skill and knowledge requirements</p>
               </li>
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Innovation</h1>
                <p className="text-8 lg:text-base">We invest in continuous learning and development opportunities for your talents, to ensure that they have the skills to tackle complex technical challenges.</p>
               </li>
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Competitive Pricing</h1>
                <p className="text-8 lg:text-base">We provide high-quality training without breaking the bank, making us a cost-effective choice for businesses of all sizes.</p>
               </li>
            </ul>
            </div>
            <Image src={Woman} alt="smiling woman image" className="lg:absolute bottom-0"/>
        </section>
    )
}

export default WhyChooseUs