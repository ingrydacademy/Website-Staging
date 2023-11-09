"use client"

import Image from "next/image"
import Icon from "../assets/back.png"
import { useRouter } from 'next/router';

const BackIcon = () => {

  // const router = useRouter();

  // const goBack = () => {
  //   router.back();
  // };

  return (
    <figure
      // onClick={goBack}
      className="flex items-center justify-center bg-secondary text-white font-medium cursor-pointer h-5 w-5 text-sm rounded-full">
      {"<"}
    </figure>
  )
}

export default BackIcon