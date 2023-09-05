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
                    <p className='text-lg lg:text-2xl'>In an effort to close the gap for organizations that need access to more Advanced level software engineers,
                        INGRYD in partnership with the Lagos State employment
                        Trust Fund will be providing access to scholarships for 1000 software engineers who meet our program criteria.
                    </p>
                </li>
                <li className='relative w-full aspect-video lg:w-1/2 shrink-0'>
                    <Image alt='image' src={schImg1} className='object-cover rounded-lg' fill />
                </li>
            </ul>
            <hr />
            <ul className='flex flex-col-reverse lg:flex-row-reverse gap-12 py-8'>
                <li className='grow lg:py-16'>
                    <p className='text-lg lg:text-2xl'>We will assess candidates based on a series of theoretical and quantitative tests including
                        IQ testing to help us select the most competitive talents who will be trained and provided with job placement in
                        the most competitive organizations.
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