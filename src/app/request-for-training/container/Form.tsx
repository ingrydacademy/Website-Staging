"use client"

import { Button } from "@/components/ui/button"
import BackIcon from "../../request-for-staffing/containers/backicon"

const Form = () => {
    return (
        <form className='w-4/5 lg:w-2/3 bg-[#F6F6F6] px-5 py-10 lg:py-20 lg:px-10 flex flex-col gap-5  '>
            <BackIcon />
            <div className="flex flex-col gap-5 lg:gap-10 w-full">
                <h1 className="font-semibold text-xl">Request for training</h1>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                        <aside className="flex flex-col gap-2 lg:gap-5 lg:w-1/2">
                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    First name <span className="text-red-700">*</span>
                                </p>
                                <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>
                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    Last name <span className="text-red-700">*</span>
                                </p>
                                <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>

                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    Type of training <span className="text-red-700">*</span>
                                </p>
                                <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>

                        </aside>
                        <aside className="flex flex-col gap-2 lg:gap-5 lg:w-1/2">
                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    Email <span className="text-red-700">*</span>
                                </p>
                                <input type="email" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>
                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    Phone number <span className="text-red-700">*</span>
                                </p>
                                <input type="tel" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>
                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    Expected start date <span className="text-red-700">*</span>
                                </p>
                                <input type="date" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>

                        </aside>
                    </div>



                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium">
                            Desired programming languages <span className="text-red-700">*</span>
                        </p>
                        <div className="lg:flex gap-3">
                            <label className="flex gap-2">
                                <input type="checkbox" className="border-2 border-[#BABABA] focus:bg-none" />
                                <p className="text-sm font-medium">
                                    ReactJS
                                </p>
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" className="border-2 border-[#BABABA] focus:bg-none" />
                                <p className="text-sm font-medium">
                                    Javascript
                                </p>
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" className="border-2 border-[#BABABA] focus:bg-none" />
                                <p className="text-sm font-medium">
                                    Java
                                </p>
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" className="border-2 border-[#BABABA] focus:bg-none" />
                                <p className="text-sm font-medium">
                                    NodeJS
                                </p>
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" className="border-2 border-[#BABABA] focus:bg-none" />
                                <p className="text-sm font-medium">
                                    C# .Net
                                </p>
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" className="border-2 border-[#BABABA] focus:bg-none" />
                                <p className="text-sm font-medium">
                                    NextJS
                                </p>
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" className="border-2 border-[#BABABA] focus:bg-none" />
                                <p className="text-sm font-medium">
                                    Python
                                </p>
                            </label>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 ">
                        <aside className="flex flex-col gap-2 lg:gap-5 lg:w-1/2">
                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    Organization <span className="text-red-700">*</span>
                                </p>
                                <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>

                        </aside>
                        <aside className="flex flex-col gap-2 lg:gap-5 lg:w-1/2">
                            <label className="flex flex-col gap-3">
                                <p className="text-sm font-medium">
                                    Number of persons being trained <span className="text-red-700">*</span>
                                </p>
                                <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                            </label>

                        </aside>
                    </div>
                </div>
                <Button className="bg-secondary w-32">Submit form</Button>
            </div>

        </form>
    )
}

export default Form