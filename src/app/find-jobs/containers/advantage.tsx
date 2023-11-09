import Image from "next/image"
import Training from "@/assets/techies/training 1.svg"
import Job from "@/assets/techies/job-position 1.svg"
import Success from "@/assets/techies/certificate 1.svg"

const Advantage = () => {
  return (
    <section className='flex flex-col gap-5 lg:gap-16 items-center text-secondary py-8 lg:py-20 px-12 text-center'>
            <h1 className='text-xl lg:text-5xl font-semibold '>
                The Ingryd Advantage
            </h1>

            <ul className='flex flex-col lg:flex-row gap-5 lg:gap-8 w-full'>
                <li className='flex flex-col items-center gap-2 lg:gap-5 w-full py-5 px-10 lg:py-10 lg:px-14 rounded bg-white shadow-md hover:scale-110 transition-all duration-300 ease-in-out'>
                        <figure className="flex rotate-45 mb-5 items-center justify-center bg-secondary rounded-md lg:rounded-xl text-semibold h-10 w-10 lg:h-28 lg:w-28 hover:rotate-180 transition-all duration-300 ease-in-out">
                            <Image src={Training} alt="training icon" className="-rotate-45 h-7 w-7 lg:h-16 lg:w-16"/>
                        </figure>
                        <p className="font-semibold lg:font-bold text-sm lg:text-xl">Training Excellence</p>
                        <p className="text-xs lg:font-medium lg:text-lg">Learn from industry experts and get hands-on experience in record time.</p>
                </li>
                <li className='flex flex-col items-center gap-2 lg:gap-5 w-full py-5 px-10 lg:py-10 lg:px-14 rounded bg-white shadow-md hover:scale-110 transition-all duration-300 ease-in-out'>
                        <figure className="flex rotate-45 mb-5 items-center justify-center bg-secondary rounded-md lg:rounded-xl text-semibold h-10 w-10 lg:h-28 lg:w-28 hover:rotate-180 transition-all duration-300 ease-in-out">
                            <Image src={Job} alt="job icon" className="-rotate-45 h-7 w-7 lg:h-16 lg:w-16"/>
                        </figure>
                        <p className="font-semibold lg:font-bold text-sm lg:text-xl">Job Placement</p>
                        <p className="text-xs lg:font-medium lg:text-lg">We help you land your dream job with leading tech companies around the world.</p>
                </li>
                <li className='flex flex-col items-center gap-2 lg:gap-5 w-full py-5 px-10 lg:py-10 lg:px-14 rounded bg-white shadow-md hover:scale-110 transition-all duration-300 ease-in-out'>
                        <figure className="flex rotate-45 mb-5 items-center justify-center bg-secondary rounded-md lg:rounded-xl text-semibold h-10 w-10 lg:h-28 lg:w-28 hover:rotate-180 transition-all duration-300 ease-in-out">
                            <Image src={Success} alt="certificate icon" className="-rotate-45 h-7 w-7 lg:h-16 lg:w-16"/>
                        </figure>
                        <p className="font-semibold lg:font-bold text-sm lg:text-xl">Success Stories</p>
                        <p className="text-xs lg:font-medium lg:text-lg">Explore Inspiring Tech Success Stories – Yours Could Be the Next One!</p>
                </li>
                
            </ul>
           

        </section>
  )
}

export default Advantage