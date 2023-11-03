
import Image from "next/image"
import First from "../images/osagie.png"
import Fourth from "../../../assets/Rectangle 59.png"
import Fifth from "../../../assets/Rectangle 60.png"
import Sixth from "../images/femi.png"
import Eight from "../images/visitors.png"
import Nineth from "../../../assets/Rectangle 62.png"
import Tenth from "../../../assets/Rectangle 66.png"
import Eleventh from "../../../assets/Rectangle 63.png"



// import { Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react"


const photos = [ First, Tenth, Nineth,   Fourth,Fifth, Sixth,Eleventh, Eight]

const photoList = photos.map((photo, index) => {
    return (
        <li key={index} className="">
            <Image src={photo} alt="photos" className="mx-auto"/>
        </li>
    )
})


const MeetTeam = () => {
    return (
        <section className="mt-10 lg:mt-24  md:w-90 text-white font-semibold bg-gradient-to-r from-[#1D63FE] to-[#FF00F8] w-90 px-8 py-10 lg:py-20 rounded  mx-auto">
             <h1 className="text-xl lg:text-4xl mb-5 lg:mb-20">The team behind it all</h1>
            <ul className="grid grid-cols-2 gap-4  lg:grid-cols-4 lg:gap-3">
                {photoList}
            </ul>
        </section>
    )
}

export default MeetTeam