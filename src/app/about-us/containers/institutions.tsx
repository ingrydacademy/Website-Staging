import Image from 'next/image'

// import images
import Lseft from "../../../assets/institutions/LSETF-logo 1.png"
import Fpg from "../../../assets/institutions/FPG-logo 2.png"
import Lag from "../../../assets/institutions/png-clipart-lekki-ikoyi-link-bridge-alimosho-government-of-lagos-state-local-government-in-malaysia-food-state-removebg-preview 1.png"
import Police from "../../../assets/institutions/Nigeria_Police_logo-removebg-preview 1.png"
import Innovate from "../../../assets/institutions/lagos-innovates-logo-removebg-preview 1.png"
import Giz from "../../../assets/institutions/GIZ-logo-removebg-preview 1.png"



const images = [Lseft, Fpg, Lag, Police, Innovate, Giz]

const imageGrid = images.map((image, i) => {
    return (
        <li key={i} >
            <Image src={image} alt="partner's logo" className='self-center mx-auto'  />
        </li>
    )
})
const Institutions = () => {
    
    return (

        <section>
            <article className="flex flex-col gap-5 lg:gap-10 items-center pb:10 lg:pb-20 ">
                <h1 className="text-xl lg:text-5xl font-semibold">Institutions that trust us</h1>
                <ul className="w-full px-6 lg:px-36 grid grid-cols-2 items-center  lg:grid-cols-6 gap-8">
                    {imageGrid}
                </ul>
            </article>
        </section>
    )
}

export default Institutions
