
const GetTalent = () => {
    return (
        <section className=" py-32 px-6 lg:px-16 flex flex-col gap-10 items-center relative">
            <div className="text-center flex flex-col gap-4">
                <h1 className="text-3xl lg:text-5xl font-semibold">
                    How we get the top tech talents
                </h1>
                <p className="text-lg lg:text-2xl text-foreground">
                    We undergo a 4 stage process to get the most suitable talents in different fields
                </p>
            </div>
            <div className="flex flex-col lg:w-1/2 ">
                <ul className="flex flex-col justify-center gap-8 w-full">
                    <li className="flex items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            1</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-lg lg:text-2xl font-bold">Call for application</h1>
                            
                        </div>
                    </li>
                    <li className="flex items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            2</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-lg lg:text-2xl font-bold">Selection Process</h1>
                            
                        </div>
                    </li>
                    <li className="flex items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            3</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-lg lg:text-2xl font-bold">Training</h1>
                            
                        </div>
                    </li>
                    <li className="flex items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            4</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-lg lg:text-2xl font-bold">Posting to customers</h1>
                            
                        </div>
                    </li>

                </ul>
            </div>
            <div className="mt-10">
                <h1 className="text-lg lg:text-2xl text-center">Our rigorous training process ensures our customers are not <br />
                    <span className="font-semibold">
                        &quot; SWEATING THE TECH STUFF &quot;.
                    </span>
                </h1>
            </div>
        </section>
    )
}

export default GetTalent