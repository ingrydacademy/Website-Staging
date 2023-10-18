
import Image from "next/image"
import First from "../../../assets/Rectangle 56.png"
import Second from "../../../assets/Rectangle 58.png"
import Third from "../../../assets/Rectangle 57.png"
import Fourth from "../../../assets/Rectangle 59.png"
import Fifth from "../../../assets/Rectangle 60.png"
import Sixth from "../../../assets/Rectangle 64.png"
import Seventh from "../../../assets/Rectangle 61.png"
import Eight from "../../../assets/Rectangle 65'.png"
import Nineth from "../../../assets/Rectangle 62.png"
import Tenth from "../../../assets/Rectangle 66.png"
import Eleventh from "../../../assets/Rectangle 63.png"
import Twelfth from "../../../assets/Rectangle 67.png"



// import { Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react"


const photos = [ First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eight, Nineth, Tenth, Eleventh, Twelfth]

const photoList = photos.map((photo, index) => {
    return (
        <li key={index} className="">
            <Image src={photo} alt="photos" className="mx-auto"/>
        </li>
    )
})


const MeetTeam = () => {
    return (
        <section className="mt-24  md:w-90 text-[#2A0839] font-semibold bg-[#F4DCFF] px-8  py-10 lg:py-20 rounded  md:mx-auto">
             <h1 className="text-2xl lg:text-4xl mb-10">The team behind it all</h1>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
                {photoList}
            </ul>
        </section>
    )
}

export default MeetTeam