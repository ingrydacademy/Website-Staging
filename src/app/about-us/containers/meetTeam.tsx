
import Image from "next/image"

import img1 from "@/assets/team1.png"
import img2 from "@/assets/team2.png"
import img3 from "@/assets/team3.png"
import img4 from "@/assets/team4.png"
import { Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react"
import iconLinkedIn from '@/assets/akar-icons_linkedin-fill.svg'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const MeetTeam = () => {
    return (
        <section>
            <article className="flex flex-col gap-24 items-center py-28">
                <h1 className="text-4xl lg:text-5xl font-semibold">Meet Our Team</h1>
                <ul className="w-full px-6 lg:px-36 grid grid-cols-2 text-center lg:grid-cols-4 gap-8">
                    <li className="flex flex-col items-center gap-2">
                        <Image src={img1} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
                        <h1 className="font-semibold text-xl">Khadijat Abdulkadir</h1>
                        <p className="text-gray-700">CEO</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full border-2 mt-auto">
                            <Link href={`https://www.linkedin.com/in/khadijat-abdulkadir/`} className="p-2">
                                <Image src={iconLinkedIn} alt="icon" className="w-5 h-5" />
                            </Link>

                        </Button>

                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <Image src={img2} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
                        <h1 className="font-semibold text-xl">Osagie Aghado</h1>
                        <p className="text-gray-700">COO</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full border-2 mt-auto">
                            <Link href={`https://www.linkedin.com/in/osagie-a-03739b32/`} className="p-2">
                                <Image src={iconLinkedIn} alt="icon" className="w-5 h-5" />
                            </Link>

                        </Button>

                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <Image src={img3} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
                        <h1 className="font-semibold text-xl">Oluwafemi Ojo</h1>
                        <p className="text-gray-700">Business Development/Partnerships</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full border-2 mt-auto">
                            <Link href={`https://www.linkedin.com/in/oluwafemi-ojo-5897b7130?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`} className="p-2">
                                <Image src={iconLinkedIn} alt="icon" className="w-5 h-5" />
                            </Link>
                        </Button>

                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <Image src={img4} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
                        <h1 className="font-semibold text-xl">Doris Theophilus</h1>
                        <p className="text-gray-700">Program Manager/Advisor</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full border-2 mt-auto">
                            <Link href={`https://www.linkedin.com/in/doris-theophilus/`} className="p-2">
                                <Image src={iconLinkedIn} alt="icon" className="w-5 h-5" />
                            </Link>

                        </Button>

                    </li>
                </ul>
            </article>
        </section>
    )
}

export default MeetTeam