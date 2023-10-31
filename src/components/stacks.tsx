import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import CyberIcon from "@/assets/stacksIcons/Cybersecurity and data safety in cloud storage.png"
import LinuxIcon from "@/assets/stacksIcons/devicon_linux.png"
import ReactIcon from "@/assets/stacksIcons/devicon_react.png"
import DevOpsIcon from "@/assets/stacksIcons/devops.png"
import ItIcon from "@/assets/stacksIcons/itsolutions.png"
import JavaIcon from "@/assets/stacksIcons/logos_java.png"
import PythonIcon from "@/assets/stacksIcons/logos_python.png"
import ProductIcon from "@/assets/stacksIcons/product.png"
import NodeIcon from "@/assets/stacksIcons/vscode-icons_file-type-node.png"
import StackHighlight from "./stackHighlight"


const stacks = [
    { h1: "Cybersecurity", p: "Cybersecurity unlocks the door to job security. Protect digital assets and explore global opportunities as a cybersecurity expert.", img: CyberIcon },
    { h1: "Linux", p: "Linux skills fuel diverse job opportunities. Embrace the world of open-source software and take your career to a global scale", img: LinuxIcon },
    { h1: "Java and Spring Boot", p: "Unlock exciting job prospects in Java and Spring Boot. Elevate your career with the expertise to develop high-performance applications. Leading companies in Nigeria and beyond await your skills", img: JavaIcon },
    { h1: "Data Science with Python", p: "Data Science opens doors to dynamic job opportunities. Harness the power of Python to drive data-driven decisions. Your journey starts here, with pathways to rewarding careers", img: PythonIcon },
    { h1: "React.js", p: "React.js offers promising job opportunities in web development. Craft captivating user interfaces and seize career possibilities in Nigeria's thriving tech sector and beyond", img: ReactIcon },
    { h1: "Node.js", p: "Node.js expertise paves the way for lucrative job prospects in server-side development. Join the ranks of Node.js developers powering applications worldwide.", img: NodeIcon },
    { h1: "DevOps", p: "DevOps opens up a world of job opportunities. Bridge the gap between development and operations, unlocking pathways to modern software development careers", img: DevOpsIcon },
    { h1: "IT Solution Sales", p: "IT Solution Sales is your gateway to a dynamic career. Explore the realm of technology sales and unlock opportunities with leading IT companies in Nigeria and beyond.", img: ItIcon },
    { h1: "Product Management", p: "Product Management empowers your career journey. Gain the skills to drive product success and lead your way to thriving roles in product management, strategy, and innovation", img: ProductIcon }
]

const stackList = stacks.map(stack => {
    return (
        <li className="flex flex-col justify-between p-5 shadow-lg rounded-lg h-331 w-387">
            <div className="flex flex-col gap-2">
                <figure>
                    <Image src={stack.img} alt={stack.h1 + " icon"} />
                </figure>
                <h1 className="text-2xl font-semibold">{stack.h1} </h1>
                <p>{stack.p}</p>
            </div>
            <Button className="bg-secondary text-lg"><Link href={"#"} >APPLY NOW</Link></Button>
        </li>
    )
})

const Stacks = () => {
    return (
        <section className='flex flex-col  lg:gap-10 py-24 relative text-secondary'>
            <h1 className='text-xl lg:text-5xl font-semibold text-center '>
                Stacks Available
            </h1>
            <StackHighlight />
            <ul className="hidden lg:grid grid-cols-3 gap-12 px-20">
                {stackList}
            </ul>

        </section>
    )
}

export default Stacks