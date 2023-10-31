import Image from "next/image"
import StarIcon from "../assets/ph_star-fill.png"

const Empower  = () => {
  return (
    <section className='flex flex-col gap-5 lg:gap-16 items-center text-secondary py-8 lg:py-24 px-20 lg:px-12 text-center'>
            <h1 className='text-xl lg:text-5xl font-semibold '>
                Empower your workforce 
            </h1>

            <ul className='flex flex-col lg:flex-row gap-5 lg:gap-16 w-full'>
                <li className='flex flex-col items-center gap-2 lg:gap-5 w-full py-5 px-10 lg:py-10 lg:px-14 rounded bg-white shadow-md'>
                        <figure className="flex items-center justify-center">
                            <Image src={StarIcon} alt="star icon"/>
                        </figure>
                        <p className="font-semibold lg:font-bold lg:text-xl">In-demand Skills, Latest Trend</p>
                        <p className="text-xs lg:font-medium lg:text-lg lg:px-2">Equip your workforce with comprehensive expertise in cutting-edge technologies that keep you ahead.</p>
                </li>
                <li className='flex flex-col items-center gap-2 lg:gap-5 w-full py-5 px-10 lg:py-10 lg:px-14 rounded bg-white shadow-md'>
                        <figure className="flex items-center justify-center">
                            <Image src={StarIcon} alt="star icon"/>
                        </figure>
                        <p className="font-semibold lg:font-bold lg:text-xl">Customised Pedagogy </p>
                        <p className="text-xs lg:font-medium lg:text-lg lg:px-2">Enhance Team Efficiency with Customized Ingryd Training. Reskill or upskill your workforce for Improved Productivity.</p>
                </li>
                <li className='flex flex-col items-center gap-2 lg:gap-5 w-full py-5 px-10 lg:py-10 lg:px-14 rounded bg-white shadow-md'>
                        <figure className="flex items-center justify-center">
                            <Image src={StarIcon} alt="star icon"/>
                        </figure>
                        <p className="font-semibold lg:font-bold lg:text-xl">Led and taught by industry professionals</p>
                        <p className="text-xs lg:font-medium lg:text-lg lg:px-2">Elevate Your Workforce with Expert-Led Training. Our Instructors Bring Years of Industry Experience to Your Team's Learning Journey.</p>
                </li>
                
                
            </ul>
           

        </section>
  )
}

export default Empower 