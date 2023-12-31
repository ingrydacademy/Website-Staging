"use client"


import { useState } from 'react'
import { Transition } from '@headlessui/react'
import iconBar from '@/assets/Group 845.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from "next/link"
import { Button } from './ui/button'
import Logo from '@/assets/logo.png'
import NavMenuItem from './NavMenuItem'


const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const menuItems = [
        { label: "About us", href: "/about-us" },
        { label: "Techies", dropdown: true, links: [{ name: "For Training", url: "/for-training" }, { name: "Find Jobs", url: "/find-jobs" }] },
        { label: "Employers", dropdown: true, links: [{ name: "Request Training", url: "/request-training" }, { name: "Request Staffing", url: "/request-staffing" }] },
        { label: "Scholarships", href: "/scholarships" },
        { label: "Courses", dropdown: true, links: [{ name: "Cybersecurity", url: "/cybersecurity" }, { name: "Java and Spring Boot", url: "/java-and-spring-boot" }, { name: "Data Science", url: "/data-science" }, { name: "React.js", url: "/reactjs" }, { name: "Node.js", url: "/nodejs" }, { name: "Linux", url: "/linux" }, { name: "DevOps", url: "/devops" }, { name: "IT Solution Sales", url: "/IT-solution-sales" }] }
    ];
    const handleBarClick = () => {
        setMobileMenuOpen(true)
    }

    const handleXClick = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header>
            <nav className="bg-transparent relative text-white lg:grid grid-cols-6 items-center  block px-6 py-6 lg:py-5 lg:px-5 " aria-label="Global">
                <figure className='flex col-span-1 items-center justify-between'>
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Ingryd</span>
                        <Image
                            className="h-16 w-auto"
                            src={Logo}
                            alt="logo"
                        />
                    </Link>
                    <Image
                        src={iconBar}
                        alt='iconsbar'
                        className='lg:hidden ml-auto cursor-pointer'
                        onClick={handleBarClick}
                    />
                </figure>

                <ul className={mobileMenuOpen ? `block absolute top-0 left-0 w-full p-10 z-50 col-span-5 bg-black lg:p-0 l lg:bg-transparent lg:static lg:flex items-center gap-10 md:justify-between lg:gap-5` : `hidden absolute top-0 left-0 w-full p-10 z-50 col-span-5 bg-black lg:p-0 l lg:bg-transparent lg:static lg:flex items-center gap-10 md:justify-between lg:gap-5`}>
                    <XMarkIcon className='w-7 ml-auto cursor-pointer lg:hidden' onClick={handleXClick} />
                    <div className='flex flex-col gap-5 lg:flex-row lg:gap-10'>
                        {menuItems.map((item, index) => (
                            <NavMenuItem key={index} {...item} />
                        ))}
                    </div>

                    <div className="flex lg:justify-end lg:items-center gap-4 ml-auto mt-5 lg:mt-0 ">
                        <Button asChild variant={'outline'} className='border-primary text-primary hover:text-primary'>
                            <Link href={`${baseUrl}/login`} className="">
                                Sign In
                            </Link>
                        </Button>
                        <Button asChild className='bg-primary ml-3'>
                            <Link href={`${baseUrl}/signup`} className="">
                                Sign up
                            </Link>
                        </Button>
                    </div>
                </ul>
            </nav>
        </header >
    )
}

export default NavBar