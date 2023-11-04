"use client"

import { Button } from "@/components/ui/button"
import BackIcon from "./backicon"

const Form = () => {
    return (
        <form className='w-4/5 lg:w-2/3 bg-[#F6F6F6] px-5 py-10 lg:py-20 lg:px-10 flex flex-col gap-5 '>
            <BackIcon />
            <div className="flex flex-col gap-5 lg:gap-10 w-full">
            <h1 className="font-semibold text-xl">Request staffing</h1>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <aside className="flex flex-col gap-2 lg:gap-5 lg:w-1/2">
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Name of organization <span className="text-red-700">*</span>
                        </p>
                        <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                    </label>
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Email <span className="text-red-700">*</span>
                        </p>
                        <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                    </label>
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Position requesting for <span className="text-red-700">*</span>
                        </p>
                        <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                    </label>
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Start date <span className="text-red-700">*</span>
                        </p>
                        <input type="date" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                    </label>
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Salary Range <span className="text-red-700">*</span>
                        </p>
                        <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                    </label>

                </aside>
                <aside className="flex flex-col gap-2 lg:gap-5 lg:w-1/2">
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Contact person <span className="text-red-700">*</span>
                        </p>
                        <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                    </label>
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Phone number <span className="text-red-700">*</span>
                        </p>
                        <input type="text" className="border-2 w-full h-10 lg:h-14 rounded-sm lg:rounded-lg px-2 border-[#BABABA] focus:bg-none" />
                    </label>
                    <label className="flex flex-col gap-1 lg:gap-3">
                        <p className="text-sm font-medium">
                            Describe the skills required for the position <span className="text-red-700">*</span>
                        </p>
                        <textarea rows={11} className="border-2 w-ful h-10llg: rou rounded-smnlg:ded-lg px-2 resize-none border-[#BABABA] focus:bg-none" />
                    </label>
                </aside>
            </div>
            <Button className="bg-secondary w-32">Submit form</Button>
            </div>

        </form>
    )
}

export default Form