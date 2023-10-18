import iconLinkedIn from '@/assets/akar-icons_linkedin-fill.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// import images
import Rex from "../../../assets/rex.png"
import Khadijat from "../../../assets/khadijat.png"
import Timothy from "../../../assets/timothy.png"
import Osagie from "../../../assets/osagie.png"
import Patricia from "../../../assets/patricia.png"
import Bayonle from "../../../assets/bayonle.png"
import Onyebuchi from "../../../assets/onyebuchi.png"


const images = [
    { name: "Rex Mafiana", post: "Chairman", image: Rex, url: "" },
    { name: "Khadijat Abdulkadir", post: "CEO/Executive Director", image: Khadijat, url: "https://www.linkedin.com/in/khadijat-abdulkadir/" },
    { name: "Timothy Adeyemo", post: "CFO/Executive Director", image: Timothy, url: "" },
    { name: "Osagie Aghedo", post: "COO/ED of Training", image: Osagie, url: "" },
    { name: "Patricia Aderibigbe", post: "Non-Executive Director", image: Patricia, url: "" },
    { name: "Bayonle Fashipe", post: "Non-Executive Director", image: Bayonle, url: "" },
    { name: "Onyebuchi Akosa", post: "Non-Executive Director", image: Onyebuchi, url: "" }
]

const imageGrid = images.map((image, i) => {
    return (
        <li key={i} className={`flex flex-col items-center gap-2 `}>
            <Image src={image.image} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
            <h1 className="font-semibold text-lg lg:text-xl">{image.name}</h1>
            <p className="text-gray-700 text-sm">{image.post}</p>
            <Button variant={"outline"} asChild size={"icon"} className="rounded-full border-2 mt-auto">
                <Link href={image.url} className="p-1">
                    <Image src={iconLinkedIn} alt="icon" className="w-3 h-3" />
                </Link>
            </Button>

        </li>
    )
})
const Directors = () => {
    
    return (

        <section>
            <article className="flex flex-col gap-10 lg:gap-24 items-center pb-28">
                <h1 className="text-2xl lg:text-5xl font-semibold">Board of Directors</h1>
                <ul className="w-full px-6 lg:px-36 grid grid-cols-2 text-center lg:grid-cols-4 gap-8">
                    {imageGrid}
                    <li className="hidden lg:flex"></li>
                </ul>
            </article>
        </section>
    )
}

export default Directors