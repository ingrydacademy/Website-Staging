import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import imgHow from '@/assets/inghow.png'
import logo from '@/assets/logo.png'

const HowTo = () => {
    return (
        <section className='bg-[#F4DCFF] flex flex-col gap-6 py-16 px-8'>
            <h1 className='text-4xl lg:text-5xl text-center font-semibold mb-12'>How to get started:</h1>
            <ul className='flex flex-col lg:flex-row gap-16'>
                <li className='lg:w-2/6 aspect-[9/12] hidden relative lg:flex flex-col items-center justify-center'>
                    <div className='bg-gradient-to-b from-[#1D63FE]  to-[#B900B4] rounded-xl w-full h-full'></div>
                    <Image alt='image' src={imgHow} fill className='object-cover -z-0 rounded-lg translate-x-8 -translate-y-8' />
                    <Image alt='image' src={logo} className='absolute object-contain left mx-auto h-24 w-auto' />
                </li>
                <li className="lg:w-4/6 text-xl flex flex-col gap-6">
                    <h1 className='font-semibold'>
                        How to apply for the INGRYD Scholarship Program
                    </h1>
                    <ul className='flex flex-col gap-6'>
                        <li>
                            <p>
                                <b>
                                    Requirements:
                                </b>
                                Begin your journey by checking the pre-qualification requirements . FAQ
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>
                                    Sign Up:

                                </b>
                                Sign up to the platform.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>
                                    Take and Pass the Assessment:
                                </b>
                                Demonstrate your skills and knowledge through our assessment.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>
                                    Enroll into Program:
                                </b>
                                Once you pass the assessment, you can enroll in the program.
                            </p>
                        </li>
                    </ul>
                    <Button className="bg-[#1A183E] flex h-fit w-fit" asChild>
                        <Link href={'/signup'} className='text-xl py-3 px-6'>
                            Start Now
                        </Link>
                    </Button>

                    <div className='flex flex-col gap-8 mt-8'>
                        <h1 className='font-semibold'>
                            Partnering for Success:
                        </h1>
                        <p>
                            At INGRYD Academy, we&apos;ve established strong partnerships with industry leaders,
                            startups, and organizations who share our commitment to empowering tech professionals
                            offering opportunities to work on meaningful projects. These partners provide
                            a platform for talents to step into the professional realm, working on projects
                            that matter and contributing to their innovative initiatives.
                        </p>
                        <Button className="bg-[#1A183E] flex h-fit w-fit" asChild>
                            <Link href={'/signup'} className='text-xl py-3 px-6'>
                                Partner with us
                            </Link>
                        </Button>
                    </div>
                </li>
            </ul>
        </section >
    )
}

export default HowTo