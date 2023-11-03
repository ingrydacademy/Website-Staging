import { Button } from "@/components/ui/button"
import Link from "next/link"

const skills = ["React.js", "Node.js", "JavaScript", "Java", "Spring Boot", "Python", "DevOps", "IT", "Data Science"]


const skillList = skills.map((skill, i) =>{
    return <li key={i} className="bg-secondary text-white flex items-center justify-center rounded-full py-3 lg:py-5 lg:font-semibold text-lg lg:text-3xl">{skill}</li>
})

const Skills = () => {
    return (
        <section className='flex flex-col gap-5  lg:gap-10 py-10 lg:pb-20 px-24 relative text-secondary'>
            <div className="text-center">
            <h1 className='text-xl lg:text-5xl font-semibold text-center '>
            Skills and Specialities
            </h1>
            <p className="text-sm lg:text-lg ">Empower your workforce in any of these areas and more.</p>
            </div>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                {skillList}
            </ul>

            <p className="text-sm text-center lg:text-lg ">Empower your workforce in any of these areas and more.</p>
            <Button className="lg:w-1/5 mx-auto"><Link href={"https://lms.ingrydacademy.com/signup"}>Empower Your Workforce</Link></Button>
            

        </section>
    )
}

export default Skills