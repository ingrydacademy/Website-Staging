import React from 'react'

import imgLogo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className=" bg-[#1A183E] text-white flex flex-col">
            <div className="container mt-14 px-5 w-full">
                <Image src={imgLogo} alt='logo' className='w-1/2 lg:w-1/12 h-auto' />
            </div>

            <div className="container px-5 mb-8 gap-8 flex flex-col lg:flex-row justify-between flex-wrap w-full">
                <div className="w-64 flex-shrink-0 px-4">
                    <p className="mt-4 text-gray-200">4A Akiogun street New Market Road, Oniru Lagos State</p>
                    {/* <p className="mt-4 text-gray-200">08165883197</p> */}
                    <p className="mt-4 text-primary underline">support@ingrydacademy.com</p>
                </div>
                <div className="flex flex-col lg:items-end px-4 lg:text-right">
                    <h1 className="font-medium text-lg mb-10">Quick Links</h1>
                    <nav className="list-none flex flex-col gap-5">
                        <li>
                            <Link href={'/'} className="text-gray-200 hover:text-primary">Home</Link>
                        </li>
                        <li>
                            <Link href={'/about-us'} className="text-gray-200 hover:text-primary">About US</Link>
                        </li>
                        <li>
                            <Link href={'/scholarships'} className="text-gray-200 hover:text-primary">Scholarship</Link>
                        </li>
                    </nav>
                </div>

            </div>
            <div className="py-8">
                <div className="container text-center">
                    <p>Copyright 2023 Ingryd | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer