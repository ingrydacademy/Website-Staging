import Link from "next/link"
import Image from "next/image"
import StaffImg from "../../assets/image 9.png"
import Outsourced from "../../assets/image 10.png"
import Matching from "../../assets/Vector.png"
import Arrow from "../../assets/bi_arrow-up.png"

const WhatWeOffer = () => {
    return (
        <section className="pt-10 lg:pt-24 px-6 lg:px-24 flex flex-col relative">
            <div className='text-center flex flex-col gap-4'>
                <h1 className="text-2xl lg:text-5xl font-semibold ">What we offer?</h1>
                <p className=' text-sm lg:text-lg lg:w-3/4 mx-auto'>INGRYD offers advanced tech training and tech staffing services to businesses looking to upgrade their team and empower their workforce</p>

            </div>
            <ul className="grid grid-cols-1 pt-8 lg:grid-cols-3 gap-8 lg:gap-20 lg:px-5 lg:text-sm">
                <li className="bg-white px-8 py-10 lg:py-16  flex flex-col gap-6 rounded-lg shadow-xl">
                    <Image className="w-10" src={StaffImg} alt="staff icon" />
                    <p className="font-semibold">Staffing</p>
                    <p>
                    Our tech staffing services offers companies access to a larger pool of talent, flexibility, reduced risk cost effectiveness and expertise they need to stay competitive and innovative  
                    </p>

                    <p className="text-primary font-semibold">
                        <Link className="flex gap-2 items-center" href="https://lms.ingrydacademy.com/signup">
                            <span>Learn More</span>
                            <Image className="w-5" src={Arrow} alt="arrow icon" />
                        </Link>
                    </p>
                </li>
                <li className="bg-white px-8 py-10 lg:py-16  flex flex-col gap-6 rounded-lg shadow-xl">
                    <Image className="w-10" src={Outsourced} alt="staff icon" />
                    <p className="font-semibold">Tech training</p>
                    <p>
                    We specializes in providing high quality training services for businesses looking to up-skill their employees in the ever-evolving world of technology.
                    </p>

                    <p className="text-primary font-semibold">
                        <Link className="flex gap-2 items-center" href="https://lms.ingrydacademy.com/signup">
                            <span>Learn More</span>
                            <Image className="w-5" src={Arrow} alt="arrow icon" />
                        </Link>
                    </p>
                </li>
                <li className="bg-white px-8 py-10 lg:py-16  flex flex-col gap-6 rounded-lg shadow-xl">
                    <Image className="w-10" src={Matching} alt="staff icon" />
                    <p className="font-semibold">Talent Outsourcing</p>
                    <p>
                    Our employee matching platform is a robust platform designed to match a company with highly trained tech talents. You get access to thousands of trained talent with a subscription on our platform
                    </p>

                    <p className="text-primary font-semibold">
                        <Link className="flex gap-2 items-center" href="https://lms.ingrydacademy.com/signup">
                            <span>Subscribe to our platform</span>
                            <Image className="w-5" src={Arrow} alt="arrow icon" />
                        </Link>
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default WhatWeOffer