"use client"
import Image from "next/image"
import Icon from "../assets/back.png"

const BackIcon = () => {
  return (
    <figure className="flex items-center justify-center bg-secondary cursor-pointer h-6 w-6 rounded-full">
        <Image src={Icon} alt="back icon"/>
    </figure>
  )
}

export default BackIcon