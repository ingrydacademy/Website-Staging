"use client"

import Image from "next/image"
import Logo from '@/assets/logo.png'
import Pattern from "../assets/ingryd pattern 3.png"
import Link from "next/link"

const Aside = () => {
    return (
        <section className='w-1/3 lg:px-24 lg:py-10 h-full bg-secondary relative'>
             <Image src={Pattern} alt="ingryd logo" className="fixed left-0 top-40 w-387"/>
            <Link href="/" className="fixed">
                <figure className="w-40">
                    <Image src={Logo} alt="ingryd logo" className="static z-50" />
                </figure>
            </Link>
        </section>
    )
}

export default Aside