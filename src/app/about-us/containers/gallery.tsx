import Image from "next/image"
import First from "../../../assets/Rectangle 282.png"
import Second from "../../../assets/Rectangle 283.png"
import Third from "../../../assets/Rectangle 284.png"
import Fourth from "../../../assets/Rectangle 285.png"
import Fifth from "../../../assets/Rectangle 286.png"
import Sixth from "../../../assets/Rectangle 287.png"
import Seventh from "../../../assets/Rectangle 288.png"
import Eight from "../../../assets/Rectangle 289.png"
import Nineth from "../../../assets/Rectangle 290.png"

const col1 = [
    First, Fourth, Seventh
]
const col2 = [
    Second, Fifth, Eight
]

const col3 = [
    Third, Sixth, Nineth
]

const col1List = col1.map((photo, index) => {
    return <Image key={index} src={photo} alt="photo" className="rounded"/>
}
)
const col2List = col2.map((photo, index) => {
    return <Image key={index} src={photo} alt="photo" className="rounded"/>
}
)
const col3List = col3.map((photo, index) => {
    return <Image key={index} src={photo} alt="photo" className="rounded"/>
}
)

const Gallery = () => {
    return (
        <section className="flex gap-2 lg:gap-10 lg:my-24 mx-auto mb-10 px-10 lg:px-14">
            <section className="flex flex-col gap-2 lg:gap-10">
                {col1List}
            </section>
            <section className="flex flex-col gap-2 lg:gap-10 -mt-5 lg:-mt-20">
                {col2List}
            </section>
            <section className="flex flex-col gap-2 lg:gap-10">
                {col3List}
            </section>
        </section>
    )
}

export default Gallery