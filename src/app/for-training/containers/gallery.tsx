"use client"
import Image from "next/image"

import first from "../assets/gallery/Rectangle 56.png"
import second from "../assets/gallery/Rectangle 57.png"
import third from "../assets/gallery/Rectangle 58.png"
import fourth from "../assets/gallery/Rectangle 59.png"
import fifth from "../assets/gallery/Rectangle 60.png"
import sixth from "../assets/gallery/Rectangle 61.png"
import seventh from "../assets/gallery/Rectangle 62.png"
import eighth from "../assets/gallery/Rectangle 63.png"


const images = [first, second, third, fourth]

const imageList = images.map((image, i) =>{
    return(
        <figure key={i} className="flex justify-center lg:w-1/5 ">
            <Image src={image} alt="image" className="lg:w-full" />
        </figure>
    )
})
const Gallery = () => {
  return (
    <section className="flex flex-col justify-center gap-10 lg:mb-20 mb-10 lg:gap-4  lg:flex-row lg:flex-wrap ">
        {imageList}
    </section>
  )
}

export default Gallery