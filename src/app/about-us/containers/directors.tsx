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


const images = [
    { name: "Rex Mafiana", post: "Chairman", image: Rex, url: "https://www.linkedin.com/in/rex-mafiana-a8318957/" },
    { name: "Khadijat Abdulkadir", post: "CEO", image: Khadijat, url: "https://www.linkedin.com/in/khadijat-abdulkadir/" },
    { name: "Timothy Adeyemo", post: "CFO", image: Timothy, url: "https://www.linkedin.com/in/timothy-adeyemo-77a49515/" },
    { name: "Osagie Aghedo", post: "Director of Training & Operations", image: Osagie, url: "https://www.linkedin.com/in/osagie-a-03739b32/" },
    { name: "Patricia Aderibigbe", post: "Non-Executive Director", image: Patricia, url: "https://www.linkedin.com/in/patricia-aderibigbe-95b82ba/" },
    { name: "Bayonle Fashipe", post: "Non-Executive Director", image: Bayonle, url: "https://www.linkedin.com/in/steven-b-fashipe-136a921a/?originalSubdomain=uk" }
]

const imageGrid = images.map((image, i) => {
    return (
        <li key={i} className={`flex flex-col items-center gap-1 w-1/3 lg:w-1/5`}>
            <Image src={image.image} alt="team image" className="h-40 aspect-square rounded-lg" />
            <h1 className="font-semibold text-xs lg:text-xl">{image.name}</h1>
            <p className="text-gray-700 text-xxs lg:text-sm">{image.post}</p>
            <Button variant={"outline"} asChild size={"icon"} className="rounded-full border-2 hidden lg:flex">
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
            <article className="flex flex-col gap-10 lg:gap-10 items-center pb-10 lg:pb-24">
                <h1 className="text-xl lg:text-5xl font-semibold">Board of Directors</h1>
                <ul className="w-full lg:px-36 text-center flex flex-wrap justify-center gap-8">
                    {imageGrid}
                </ul>
            </article>
        </section>
    )
}

export default Directors