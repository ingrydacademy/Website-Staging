"use client"
import Image from "next/image"
import qualityImg from "../assets/reasons/quality.png"
import exceptionalImg from "../assets/reasons/exceptional.png"
import innovationImg from "../assets/reasons/innovation.png"
import competitiveImg from "../assets/reasons/competitive.png"

const reasons = [
    { h1: "Quality Talents", p: "We employ a rigorous screening process to ensure that our talent pool includes only the best and most qualified candidates", img: qualityImg },
    { h1: "Exceptional Support", p: "Our team is always available to provide guidance, support and expertise whenever you need it.", img: exceptionalImg },
    { h1: "Innovation", p: "We invest in continuous learning and development opportunities for our talent to ensure that they have the skills to tackle complex technical challenges", img: innovationImg },
    { h1: "Competitive Pricing", p: "We offer competitive pricing without compromising on quality. Our pricing model is straight forward, fair and transparent.", img: competitiveImg }
]

const reasonList = reasons.map((reason, i) => {
    return (
        <div className="flex flex-col bg-secondary lg:bg-transparent gap-5 py-3 lg:py-7 px-2 lg:px-4 border rounded-lg relative text-white" key={i}>
            <Image src={reason.img} alt="hero image" className="hidden lg:block object-cover absolute inset-0 -z-10" fill />
            <h1 className="text-xs lg:text-xl lg:font-medium ">{reason.h1}</h1>
            <p className="text-8 lg:text-base">{reason.p}</p>
        </div>
    )
})

const Why = () => {
    return (
        <section className='mb-10 lg:mb-24 flex flex-col gap-5 lg:gap-10 items-center '>

            <div className='px-9 w-full lg:px-14  flex flex-col justify-center text-center'>
                <h1 className='text-xl lg:text-5xl mb-4 lg:mb-10 font-semibold'>
                    Why train with us?
                </h1>
                <p className="text-11 lg:text-2xl">
                    By offering quality tech talent innovation and competitive pricing, we stand out as a reliable and trustworthy growth partner. Ingryd is committed to helping individuals and teams develop the skills they need to thrive in the tech industry. We achieve that through:
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-10 justify-center">
                {reasonList}
            </div>


        </section>
    )
}

export default Why