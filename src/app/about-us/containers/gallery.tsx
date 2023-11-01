import Image from "next/image"
import First from "../images/Rectangle 282.png"
import Second from "../images/Rectangle 289.png"
import Third from "../images/Rectangle 290.png"
// import Second from "../../../assets/Rectangle 283.png"
// import Third from "../../../assets/Rectangle 284.png"
// import Fourth from "../../../assets/Rectangle 285.png"
// import Fifth from "../../../assets/Rectangle 286.png"
// import Sixth from "../../../assets/Rectangle 287.png"
// import Seventh from "../../../assets/Rectangle 288.png"
// import Eight from "../../../assets/Rectangle 289.png"
// import Nineth from "../../../assets/Rectangle 290.png"

const images = [
    Third,Second, First
]
// const col2 = [
//     Second, Fifth, Eight
// ]

// const col3 = [
//     Third, Sixth, Nineth
// ]

const imageList = images.map((photo, index) => {
    return <Image key={index} src={photo} alt="photo" className="rounded"/>
}
)
// const col2List = col2.map((photo, index) => {
//     return <Image key={index} src={photo} alt="photo" className="rounded"/>
// }
// )
// const col3List = col3.map((photo, index) => {
//     return <Image key={index} src={photo} alt="photo" className="rounded"/>
// }
// )

const Gallery = () => {
    return (
        <section className="grid grid-cols-3 gap-5 lg:gap-10 my-10 lg:my-20 mx-auto lg:w-90">
            {imageList}
        </section>
    )
}

export default Gallery