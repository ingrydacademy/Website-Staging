import Image from 'next/image'
import React from 'react'


import schImg1 from '@/assets/schImg1.png'
import schImg2 from '@/assets/schImg2.png'

const AboutProgram = () => {
    return (
        <section className='py-24 px-6 lg:px-48 flex flex-col gap-12'>
            <div className='flex flex-col gap-4 items-center text-center'>
                <h1 className='text-3xl lg:text-5xl font-semibold'>About INGRYD Scholarship Program</h1>
                <p className='text-xl'>Empowering Africa&apos;s Tech Ecosystem with the INGRYD Scholarship Program.</p>
            </div>
            <ul className='flex flex-col-reverse lg:flex-row gap-12 py-8'>
                <li className='grow lg:py-16'>
                    <p className='text-lg lg:text-2xl'>The Ingryd Scholarship Program (ISP) is an initiative designed to equip mid-level tech talents with
                     in-demand tech skills such as Java, Linux, Cybersecurity, and  Data Science;
                      and offer them job placements after training.
                    </p>
                </li>
                <li className='relative w-full aspect-video lg:w-1/2 shrink-0'>
                    <Image alt='image' src={schImg1} className='object-cover rounded-lg' fill />
                </li>
            </ul>
            <hr />
            <ul className='flex flex-col-reverse lg:flex-row-reverse gap-12 py-8'>
                <li className='grow lg:py-16'>
                    <p className='text-lg lg:text-2xl'>INGRYD is set to train 4,000 individuals annually. 
                    The program&apos;s six-month curriculum includes a three-month paid internship, 
                    enabling participants to gain practical experience and apply their newly acquired skills.
                    </p>
                </li>
                <li className='relative w-full aspect-video lg:w-1/2 shrink-0'>
                    <Image alt='image' src={schImg2} className='object-cover rounded-lg' fill />
                </li>
            </ul>
        </section>
    )
}

export default AboutProgram