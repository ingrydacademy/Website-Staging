import Image from 'next/image'
import React from 'react'
import Woman from "../assets/Woman-smiling Background Removed 2.png"

const Note = () => {
    return (
        <section className='bg-secondary pt-10 lg:py-20 px-10 flex flex-col justify-between relative '>
            <p className='font-semibold lg:text-2xl text-center text-white px-2 lg:w-4/5 lg:text-left'>Technology is the foundation, but talent is the driving force behind successful businesses. Our expert-led training equips your workforce with the skills they need to drive your business to new heights.</p>

            <Image src={Woman} alt='woman image' className='lg:absolute right-0 bottom-0' />
        </section>
    )
}

export default Note