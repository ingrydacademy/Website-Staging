import Woman from "../assets/girl-points-her-finger-banner-with-copyspace-advertising-promotions_888396-6399 Background Removed 1.png"
import Image from "next/image"
const WhyChooseUs = () => {
    return (
        <section className='flex flex-col gap-5 lg:gap-16  bg-gradient-to-r from-[#1D63FE] to-[#FF00F8] text-center lg:text-left text-white pt-8 lg:py-20 px-12 relative'>
            
            <div className="flex flex-col  lg:flex-row gap-5">
            
            <div className="flex flex-col gap-5 items-center lg:items-start lg:gap-10 lg:w-2/5 lg:px-8 ">
            <h1 className='text-xl lg:text-5xl font-semibold '>
            Why choose us?
            </h1>
            <p className="text-sm lg:text-lg lg:font-medium">
            By offering quality tech talent innovation and competitive pricing, we stand out as a reliable and trustworthy partner for our clients
            </p>
            </div>

            <ul className="grid grid-cols-2 gap-5 text-left  lg:w-3/5  ">
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Proven Expertise</h1>
                <p className="text-8 lg:text-base"> Our talent pool includes only the best and most qualified candidates</p>
               </li>
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Tailored Staffing</h1>
                <p className="text-8 lg:text-base">We customize our talent outsourcing solutions to meet your specific needs, ensuring a perfect fit for your projects.</p>
               </li>
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Innovation</h1>
                <p className="text-8 lg:text-base">We invest in continuous learning and development opportunities for our talent to ensure that they have the skills to tackle complex technical challenges.</p>
               </li>
               <li className="flex flex-col gap-5 px-3 lg:px-10 py-3 lg:py-5 lg:h-220 bg-secondary rounded-xl">
                <h1 className="text-xs lg:text-xl font-semibold">Streamlined Process</h1>
                <p className="text-8 lg:text-base">Say goodbye to tedious hiring processes. We make talent outsourcing fast, efficient, and cost-effective</p>
               </li>
            </ul>
            </div>
            <Image src={Woman} alt="smiling woman image" className="lg:absolute bottom-0"/>
        </section>
    )
}

export default WhyChooseUs