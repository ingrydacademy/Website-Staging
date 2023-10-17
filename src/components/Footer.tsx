import React from 'react'
import imgLogo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Ig from "@/assets/Ig.png"
import Twitter from "@/assets/Twitter.png"
import Facebook from "@/assets/facebook.png"

const Footer = () => {
    return (
        <footer className=" bg-[#1A183E] flex flex-col  text-gray-200">
            <div className=" gap-8 container lg:px-30 lg:pt-20 flex flex-col lg:flex-row justify-between flex-wrap w-full">
                <div className="flex flex-col gap-3 flex-1 mr-32">
                    <Image src={imgLogo} alt='logo' className='w-40' />
                    <p>4A Akiogun street New Market Road, Oniru Lagos State.</p>
                    <p >08165883197</p>
                    <p className="text-primary underline underline-offset-4">support@ingrydacademy.com</p>
                    
                </div>
                <div className="flex flex-col flex-1 gap-5">
                    <p className="text-lg font-semibold">Quick Links</p>
                    <nav className="list-none flex flex-col gap-3">
                        <li>
                            <Link href={'/about-us'} className=" hover:text-primary">About us</Link>
                        </li>
                        <li>
                            <Link href={'/employers/staffing'} className=" hover:text-primary">Employers (Request Staffing)</Link>
                        </li>
                        <li>
                            <Link href={'/employers/training'} className=" hover:text-primary">Employers (Request Training)</Link>
                        </li>
                        <li>
                            <Link href={'/techies/training'} className=" hover:text-primary">Techies (For Training)</Link>
                        </li>
                        <li>
                            <Link href={'/techies/hire'} className=" hover:text-primary">Techies (For Hire)</Link>
                        </li>
                    </nav>
                </div>
                <div className="flex flex-col flex-1 gap-5">
                    <p className="text-lg font-semibold">Resources</p>
                    <nav className="list-none flex flex-col gap-3">
                        <li>
                            <Link href={'/scholarships'} className=" hover:text-primary">Scholarships</Link>
                        </li>
                        <li>
                            <Link href={'/community'} className=" hover:text-primary">Community</Link>
                        </li>
                        <li>
                            <Link href={'/faqs'} className=" hover:text-primary">FAQs</Link>
                        </li>
                    </nav>
                </div>
                <div className="flex flex-col flex-1 gap-5">
                    <p className="text-lg font-semibold">Legals</p>
                    <nav className="list-none flex flex-col gap-3">
                        <li>
                            <Link href={'/privacy'} className=" hover:text-primary">Privacy</Link>
                        </li>
                        <li>
                            <Link href={'/security'} className=" hover:text-primary">Security</Link>
                        </li>
                        <li>
                            <Link href={'/conditions'} className=" hover:text-primary">Conditions</Link>
                        </li>
                    </nav>
                </div>
            </div>
            <div className='flex items-center justify-center my-5 lg:justify-start lg:my-2 gap-3 lg:pl-30 container'>
                        <Link href={"#"}>
                            <Image
                                src={Ig}
                                alt='instagram icon'
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src={Facebook}
                                alt='facebook icon'
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src={Twitter}
                                alt='twitter icon'
                            />
                        </Link>
                    </div>
            <div className="pb-8 lg:mt-10">
                <div className="container text-center">
                    <p>Copyright 2023 Ingryd | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer