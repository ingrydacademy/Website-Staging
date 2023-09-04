
const GetTalent = () => {
    return (
        <section className=" py-36 px-6 lg:px-16 flex flex-col gap-10 items-center relative">
            <div className="text-center flex flex-col gap-4">
                <h1 className="text-4xl lg:text-5xl font-semibold">
                    How we get top talent
                </h1>
                <p className="text-xl lg:text-2xl text-foreground">
                    We undergo a 4 stage process to get the most suitable talents in different fields
                </p>
            </div>
            <div className="flex flex-col lg:w-1/2 ">
                <ul className="flex flex-col justify-center gap-8 w-full">
                    <li className="flex flex-col items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            1</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-2xl font-bold">Call for application</h1>
                            <p className="flex lg:text-lg ">
                                Interested and qualified candidates are invited to submit their application for a specific track they&apos;re interested in.
                                This includes resume, portfolio and other additional materials.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            2</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-2xl font-bold">Selection Process</h1>
                            <p className="flex lg:text-lg ">
                                Our team evaluates the applications received in response to the &quot;call for application.&quot;
                                This is conducted by a team of recruiters and hiring managers who will review all submitted documents.</p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            3</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-2xl font-bold">Training</h1>
                            <p className="flex lg:text-lg ">
                                At this stage, the new hires are provided with the necessary knowledge and skills.
                                They&apos;re introduced to the organization, policies and procedures through an induction ceremony. </p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center gap-6">
                        <span className="w-10 h-10 flex items-center justify-center 
                        border border-gray-500 rounded-md ">
                            4</span>
                        <div className="flex flex-col gap-2 items-center text-center">
                            <h1 className="text-2xl font-bold">Posting to customers</h1>
                            <p className="flex lg:text-lg ">
                                The newly hired tech talents are made available to customers for providing excellent services.
                                This happens after the training and onboarding process and allows the company&apos;s feedback.</p>
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