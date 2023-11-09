import Image from "next/image"
import Arrow from "../assets/arrow.png"
import Link from "next/link"

const Schedule = () => {
    return (
        <section className='flex flex-col lg:py-10 lg:gap-14 text-secondary text-center  relative bg-[#F4DCFF] '>
                <div>
                    <h1 className='text-xl lg:text-5xl text-center font-semibold py-5'>
                        Training Schedule
                    </h1>
                    <p className="text-11 lg:text-xl text-center font-medium px-12 mb-5">
                    Flexible, rich and impactful training sessions curated for you.
                    </p>
                </div>
               <div className="lg:px-20 lg:mx-auto text-secondary text-center">
            

            <article className="flex flex-col items-center  lg:justify-center lg:-translate-x-32 lg:items-center lg:text-xl font-semibold ">
                <div className="flex flex-col items-center relative">
                <div className="rounded-xl flex items-center  justify-center bg-secondary text-white w-48 lg:w-234 h-20 lg:h-104">
                    Cohort one
                </div>
                <p className="lg:absolute lg:left-64 lg:top-10 lg:w-full lg:text-left ">July to September</p>
                <Image src={Arrow} alt="arrow icon" className="lg:my-2"/>
                </div>
                <div className="flex flex-col items-center relative">
                <div className="rounded-xl flex items-center  justify-center bg-secondary text-white w-48 lg:w-234 h-20 lg:h-104">
                    Cohort Two
                </div>
                <p className="lg:absolute lg:left-64 lg:top-10 lg:w-full lg:text-left ">October to December</p>
                <Image src={Arrow} alt="arrow icon" className="lg:my-2"/>
                </div>
                <div className="flex flex-col items-center relative">
                <div className="rounded-xl flex items-center  justify-center bg-secondary text-white w-48 lg:w-234 h-20 lg:h-104">
                    Cohort Three
                </div>
                <p className="lg:absolute lg:left-64 lg:top-10 lg:w-full lg:text-left ">January to March</p>
                <Image src={Arrow} alt="arrow icon" className="lg:my-2"/>
                </div>
                <div className="flex flex-col items-center relative">
                <div className="rounded-xl flex items-center  justify-center bg-secondary text-white w-48 lg:w-234 h-20 lg:h-104">
                    Cohort Four
                </div>
                <p className="lg:absolute lg:left-64 lg:top-10 lg:w-full lg:text-left ">April to June</p>
                </div>
            </article>
                    <button className='text-sm lg:text-xl bg-secondary w-3/4 mx-auto my-10 font-medium rounded text-white py-3 '>
                        <Link href={'https://lms.ingrydacademy.com/signup'}>
                            Enroll Now
                        </Link>
                    </button>
            </div> 

        </section>
    )
}

export default Schedule