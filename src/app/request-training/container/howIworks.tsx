import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HowItWorks = () => {
    return (
        <section className='flex flex-col gap-5 lg:gap-20 items-center text-secondary py-8 lg:py-24 text-center'>
            <h1 className='text-xl lg:text-5xl font-semibold '>
                Empower your workforce
            <p className='lg:text-lg mt-5'>We make Talent Training Request so seamless</p>
            </h1>


            <ul className='grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-28 lg:py-10'>
                <li className='flex items-center justify-center gap-2 lg:gap-5 text-center relative h-36 '>
                    <p className='lg:text-xl  font-semibold '>Select Technology</p>
                    <h1 className='text-red-100 font-semibold text-9xl lg:text-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>01</h1>
                </li>
                <li className='flex items-center justify-center gap-2 lg:gap-5 text-center relative h-36 '>
                    <p className='lg:text-xl  font-semibold '>Complete Request <br/>Form</p>
                    <h1 className='text-red-100 font-semibold text-9xl lg:text-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>02</h1>
                </li>
                <li className='flex items-center justify-center gap-2 lg:gap-5 text-center relative h-36 '>
                    <p className='lg:text-xl  font-semibold '>Await Prompt <br/>Feedback</p>
                    <h1 className='text-red-100 font-semibold text-9xl lg:text-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>03</h1>
                </li>
                <li className='flex items-center justify-center gap-2 lg:gap-5 text-center relative h-36 '>
                    <p className='lg:text-xl  font-semibold '>Staff Training <br/>Commences</p>
                    <h1 className='text-red-100 font-semibold text-9xl lg:text-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>04</h1>
                </li>
            </ul>

            <Button><Link href={"https://lms.ingrydacademy.com/signup"}>Request Training</Link></Button>


        </section>
    )
}

export default HowItWorks