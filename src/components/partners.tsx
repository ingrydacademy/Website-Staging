import Image from 'next/image'

// import images
import First from "@/assets/partners/1200px-Zenith_Bank_Logo 1.png"
import Second from "@/assets/partners/access-bank-plc-icon-2048x507-4kgbbmz8 1.png"
import Third from "@/assets/partners/microsoft-logo 1.png"
import Fourth from "@/assets/partners/uba-logo-1CFD25002D-seeklogo 2.png"
import Fifth from "@/assets/partners/GIZ-logo-removebg-preview 2.png"
import Sixth from "@/assets/partners/Nigeria_Police_logo-removebg-preview 2.png"



const images = [First, Second, Third, Fourth, Fifth, Sixth]

const imageGrid = images.map((image, i) => {
    return (
        <li key={i} className='flex items-center justify-center w-1/3 lg:w-1/6 '>
            <Image src={image} alt="partner's logo" className='self-center mx-auto w-2/3 lg:w-full'  />
        </li>
    )
})
const Partners = () => {
    
    return (

        <section className='pt-10'>
            <article className="flex flex-col gap-5 lg:gap-10 items-center py:16 lg:py-20 ">
                <h1 className="text-xl lg:text-5xl font-semibold">Our Hiring Partners</h1>
                <ul className="w-full px-6 lg:px-36 flex flex-wrap items-center lg:gap-20 justify-center gap-8">
                    {imageGrid}
                </ul>
            </article>
        </section>
    )
}

export default Partners
