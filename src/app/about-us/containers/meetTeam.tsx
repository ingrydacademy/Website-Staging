
import Image from "next/image"

import img1 from "@/assets/team1.png"
import img2 from "@/assets/team2.png"
import img3 from "@/assets/team3.png"
import img4 from "@/assets/team4.png"
import { Linkedin } from "lucide-react"
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
                        <h1 className="font-semibold text-xl">Khadijar Abdulkadril</h1>
                        <p className="text-gray-700">CEO</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full mt-auto">
                            <Link href={''} className="">
                                <Linkedin className="w-4 h-4" />
                            </Link>

                        </Button>

                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <Image src={img2} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
                        <h1 className="font-semibold text-xl">Osagie Aghado</h1>
                        <p className="text-gray-700">CDO</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full mt-auto">
                            <Link href={''} className="">
                                <Linkedin className="w-4 h-4" />
                            </Link>

                        </Button>

                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <Image src={img3} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
                        <h1 className="font-semibold text-xl">Oluwafemi Ojo</h1>
                        <p className="text-gray-700">Business Development</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full mt-auto">
                            <Link href={''} className="">
                                <Linkedin className="w-4 h-4" />
                            </Link>

                        </Button>

                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <Image src={img4} alt="team image" className="h-40 aspect-square bg-gray-200 rounded-lg" />
                        <h1 className="font-semibold text-xl">Doris Theophilus</h1>
                        <p className="text-gray-700">Business Development</p>
                        <Button variant={"outline"} asChild size={"icon"} className="rounded-full mt-auto">
                            <Link href={''} className="">
                                <Linkedin className="w-4 h-4" />
                            </Link>

                        </Button>

                    </li>
                </ul>
            </article>
        </section>
    )
}

export default MeetTeam