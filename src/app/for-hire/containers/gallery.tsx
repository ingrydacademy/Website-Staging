import First from "@/assets/techies/gallery/Rectangle 56.png"
import Second from "@/assets/techies/gallery/Rectangle 57.png"
import Third from "@/assets/techies/gallery/Rectangle 58.png"
import Fourth from "@/assets/techies/gallery/Rectangle 59.png"
import Fifth from "@/assets/techies/gallery/Rectangle 60.png"
import Sixth from "@/assets/techies/gallery/Rectangle 61.png"
import Seventh from "@/assets/techies/gallery/Rectangle 62.png"
import Eighth from "@/assets/techies/gallery/Rectangle 63.png"
import Image from "next/image"


const images = [First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth]

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