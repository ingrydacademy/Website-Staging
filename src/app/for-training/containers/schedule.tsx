import Image from "next/image"
import Arrow from "../assets/arrow.png"
import Link from "next/link"

const Schedule = () => {
    return (
        <section className='flex flex-col lg:py-20 lg:gap-20 text-secondary text-center  relative bg-[#F4DCFF] '>
                <div>
                    <h1 className='text-xl lg:text-5xl text-center font-semibold py-5'>
                        Training Schedule
                    </h1>
                    <p className="text-11 lg:text-xl text-center font-medium px-12 mb-5">
                            Flexible, rich and impactful training sessions curated for you.
                    </p>
                </div>
               <div className="flex flex-col lg:flex-row lg:px-20 lg:gap-5 lg:items-center lg:justify-center text-secondary text-center">
            <article className="flex flex-col gap-5 lg:gap-16 pb-8 lg:pb-20  px-12 lg:px-0 lg:pr-24 lg:w-1/2 lg:relative lg:translate-y-16">
                <ul className="text-11 lg:text-lg lg:text-left flex flex-col gap-5 px-1">
                    
                    <li>
                        The Program’s physical training schedule runs from 9am-6pm at our training academy. 9am-1pm and 2pm-6pm for morning and afternoon session respectively. Whilst, the virtual training schedule runs from 9am-3pm.
                    </li>
                    <li>
                        The training will have physical classes 2 times per week and mentorship sessions and practicals on Fridays and Saturdays from 10am-3pm.
                    </li>
                    <li>
                    These sessions will provide students with the opportunity to work on real-world projects and case studies, and receive personalized feedback and guidance from in-house experienced instructors.
                    </li>
                </ul>
                <button className='hidden lg:block text-sm lg:text-xl bg-secondary w-1/4 font-medium rounded text-white py-2 '>
                        <Link href={'https://lms.ingrydacademy.com/signup'}>
                            Sign up
                        </Link>
                    </button>
            </article> 

            <article className="flex flex-col items-center lg:justify-start lg:items-start lg:text-xl font-semibold lg:w-1/2 lg:relative">
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
                    <button className='lg:hidden text-sm lg:text-xl bg-secondary w-1/4 mx-auto my-10 font-medium rounded text-white py-2 lg:ml-0 lg:absolute lg:bottom-0 lg:-left-full'>
                        <Link href={'https://lms.ingrydacademy.com/signup'}>
                            Sign up
                        </Link>
                    </button>
            </article>
            </div> 

        </section>
    )
}

export default Schedule