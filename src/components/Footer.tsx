import React from 'react'
import imgLogo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Ig from "@/assets/Ig.png"
import Twitter from "@/assets/Twitter.png"
import Facebook from "@/assets/facebook.png"
import Linkedin from "@/assets/in.png"

const Footer = () => {
    return (
        <footer className=" bg-[#1A183E] flex flex-col text-gray-200">
            
            <div className=" gap-8 container lg:px-30 lg:pt-20 pt-10 flex flex-col lg:flex-row justify-between flex-wrap w-full">
                <div className="flex flex-col gap-3 flex-1 lg:mr-32">
                    <Image src={imgLogo} alt='logo' className='w-40' />
                    <p>4A Akiogun Street, New Market Road, Oniru, Lagos State.</p>
                    <p >08165883197</p>
                    <p className="text-primary underline underline-offset-4"><Link href="https://support@ingrydacademy.com">support@ingrydacademy.com</Link></p>
                </div>
                <div className="flex flex-col flex-1 gap-5">
                    <p className="text-lg font-semibold">Quick Links</p>
                    <nav className="list-none flex flex-col gap-3">
                        <li>
                            <Link href={'/about-us'} className=" hover:text-primary">About us</Link>
                        </li>
                        <li>
                            <Link href={'/request-staffing'} className=" hover:text-primary">Request Staffing</Link>
                        </li>
                        <li>
                            <Link href={'/request-training'} className=" hover:text-primary">Request Training</Link>
                        </li>
                        <li>
                            <Link href={'/for-training'} className=" hover:text-primary">Get Trained</Link>
                        </li>
                        <li>
                            <Link href={'/for-hire'} className=" hover:text-primary">Get Job Placement</Link>
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
                            <Link href={'#'} className=" hover:text-primary">FAQS</Link>
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
                            <Link href={'/conditions'} className=" hover:text-primary">Terms and Conditions</Link>
                        </li>
                    </nav>
                </div>
            </div>
            <div className='flex items-center justify-center my-5 lg:justify-start lg:my-2 gap-3 lg:pl-30 container'>
                        <a href="https://www.instagram.com/ingrydacademy/" target='_blank'>
                            <Image
                                src={Ig}
                                alt='instagram icon'
                            />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100094777950769" target="_blank">
                            <Image
                                src={Facebook}
                                alt='facebook icon'
                            />
                        </a>
                        <a href="https://twitter.com/INGRYDAcademy" target='_blank'>
                            <Image
                                src={Twitter}
                                alt='twitter icon'
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/ingrydacademy/" target='_blank'>
                            <Image
                                src={Linkedin}
                                alt='linkedin icon'
                            />
                        </a>
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