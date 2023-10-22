import Image from "next/image"
import Woman from "@/assets/focused-woman-testing-vr-headset 2.png"

const GetTalent = () => {
    return (
        <section className="my-10 px-6 lg:px-16 flex flex-col gap-10 items-center relative">
            <div className="text-center flex flex-col gap-4">
                <h1 className="text-xl lg:text-5xl font-semibold">
                    How we get the top tech talents
                </h1>
                <p className="text-sm lg:text-xl text-foreground">
                We undergo a 4-stage process to get the most suitable talents in different fields
                </p>
            </div>
            <div className="px-14 lg:flex">
                <ul className="flex flex-col justify-center gap-2 w-full lg:w-1/2">
                    <li className=" flex gap-4">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="w-10 h-10 lg:w30 lg:h-30 flex items-center justify-center border-[#4D4D4D] border-2 rounded-md ">
                                1
                            </span>
                            <div className="border-l-2 h-20 border-[#4D4D4D]"></div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-lg lg:text-xl font-bold">Call for application</h1>
                            <p className="text-sm lg:text-xl">We begin by inviting tech professionals to step into the world of opportunities.</p>
                        </div>
                    </li>
                    <li className=" flex gap-4">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="w-10 h-10 lg:w30 lg:h-30 flex items-center justify-center border-[#4D4D4D] border-2 rounded-md ">
                                2
                            </span>
                            <div className="border-l-2 h-20 border-[#4D4D4D]"></div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-lg lg:text-xl font-bold">Selection Process</h1>
                            <p className="text-sm lg:text-xl">Our rigorous selection process, which includes assessment, identifies the brightest talents, ensuring only the best move forward.</p>
                        </div>
                    </li>
                    <li className=" flex gap-4">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="w-10 h-10 lg:w30 lg:h-30 flex items-center justify-center border-[#4D4D4D] border-2 rounded-md ">
                                3
                            </span>
                            <div className="border-l-2 h-20 border-[#4D4D4D]"></div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-lg lg:text-xl font-bold">Training</h1>
                            <p className="text-sm lg:text-xl">Chosen talents embark on advanced training, honing their skills and preparing for real-world challenges.  </p>
                        </div>
                    </li>
                    <li className=" flex gap-4">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="w-10 h-10 lg:w30 lg:h-30 flex items-center justify-center border-[#4D4D4D] border-2 rounded-md ">
                                4
                            </span>
                            <div className="border-l-2 h-20 border-[#4D4D4D]"></div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-lg lg:text-xl font-bold">Outsourcing</h1>
                            <p className="text-sm lg:text-xl">We connect our trained tech talents with businesses, providing them the opportunity to shine in a professional setting. </p>
                        </div>
                    </li>
                </ul>

                <figure className="hidden lg:flex w-1/2">
                    <Image src={Woman} alt="woman image" className="ml-auto"/>
                </figure>


            </div>
            <div className="mt-1">
                <h1 className="text-xs lg:hidden lg:text-lg text-center font-semibold">Our rigorous training process ensures our customers are not <span className="font-bold">&quot;SWEATING THE TECH STUFF &quot;.</span>
                </h1>
            </div>
        </section>
    )
}

export default GetTalent