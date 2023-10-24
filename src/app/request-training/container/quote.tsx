import QuoteIcon from "../assets/QuoteIconImg.png"
import Image from "next/image"
import React from 'react'

const Quote = () => {
  return (
    <section className='bg-secondary flex flex-col gap-5 px-2 lg:gap-10 py-10 lg:py-16 text-sm lg:text-2xl text-white text-center'>
        <Image src={QuoteIcon} alt="quote icon" className="mx-auto"/>
        <p className='lg:w-2/3 mx-auto'>Success in business is not just about having the best technology but having the best people who can leverage that technology. At INGRYD, we believe in connecting businesses with top-tier tech talent to help them achieve their goals and stay ahead of the competition.
        </p>
        <p>-Khadijat Abdulkadir</p>


    </section>
  )
}

export default Quote