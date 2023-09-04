import Image from "next/image"


import imgWhy1 from '@/assets/why1.png'
import imgWhy2 from '@/assets/why2.png'
import imgWhy3 from '@/assets/why3.png'
import imgWhy4 from '@/assets/why4.png'

import imgConfetti from '@/assets/confetti-1.png'

const WhyIs = () => {
    return (
        <section className="py-8 pb-32 lg:py-8 lg:px-16 lg:pb-32 px-6 flex flex-col-reverse lg:flex-row gap-10 items-center relative ">

            <div className="w-full lg:w-2/3 lg:px-8 lg:border-r border-gray-400">
                <ul className="grid grid-flow-row lg:grid-cols-2 lg:grid-rows-2 gap-8 px-0">
                    <li className="gap-6 text-xl text-white px-8 py-12 rounded-lg flex flex-col overflow-hidden relative">
                        <Image src={imgWhy1} alt="image" className="object-cover absolute inset-0 z-0 bg-[#1A183E]" fill />
                        <div className="z-10 flex flex-col gap-4">
                            <h1 className="text-xl">Quality Talents</h1>
                            <p className="text-gray-300">We employ a rigorous screening process to ensure that our talent pool includes only the best and meet qualified candidates</p>

                        </div>
                    </li>
                    <li className="gap-6 text-xl text-white px-8 py-12 rounded-lg flex flex-col overflow-hidden relative">
                        <Image src={imgWhy2} alt="image" className="object-cover absolute inset-0 z-0 bg-[#1A183E]" fill />
                        <div className="z-10 flex flex-col gap-4">
                            <h1 className="text-xl">Exceptional Support</h1>
                            <p className="text-gray-300">Our team is always available to provide guidance, support and expertise whenever you need it. </p>

                        </div>
                    </li>
                    <li className="gap-6 text-xl text-white px-8 py-12 rounded-lg flex flex-col overflow-hidden relative">
                        <Image src={imgWhy3} alt="image" className="object-cover absolute inset-0 z-0 bg-[#1A183E]" fill />
                        <div className="z-10 flex flex-col gap-4">
                            <h1 className="text-xl">Innovation</h1>
                            <p className="text-gray-300">We invest in continuous learning and development opportunities for our talent to ensure that they have the skills to tackle complex technical challenges</p>

                        </div>
                    </li>
                    <li className="gap-6 text-xl text-white px-8 py-12 rounded-lg flex flex-col overflow-hidden relative">
                        <Image src={imgWhy4} alt="image" className="object-cover absolute inset-0 z-0 bg-[#1A183E]" fill />
                        <div className="z-10 flex flex-col gap-4">
                            <h1 className="text-xl">Competitive pricing</h1>
                            <p className="text-gray-300">We offer our clients competitive pricing without compromising on quality. We believe that our pricing model is straight forward, fair and transparent  </p>

                        </div>
                    </li>
                </ul>
            </div>

            <div className=" flex flex-col gap-4 w-full lg:w-1/3">
                <h1 className="text-5xl font-semibold">
                    Why Ingryd?
                </h1>
                <p className="text-xl">
                    Ingryd is a premier tech talent outsourcing and training academy. At Ingryd, we pride ourselves on our ability to connect businesses with top tech talent, providing innovative solutions
                    to help business succeed in today&apos;s digital landscape
                </p>
            </div>

        </section>
    )
}

export default WhyIs