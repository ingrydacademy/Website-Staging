import { Button } from "@/components/ui/button"


const NewsLetter = () => {
    return (
        <section className="flex flex-col gap-8 lg:gap-12 bg-[#F4DCFF] px-6 lg:px-36 py-10 lg:py-24 justify-center items-center">
            <div className="text-center text-secondary flex flex-col gap-4">
                <h1 className="text-xl lg:text-4xl font-semibold">Subscribe to our newsletter</h1>
                <p className="text-sm">Get timely and latest info on growth strategy & opportunities around the world - for techies and companies.</p>
            </div>
            <div className="flex flex-col gap-3 lg:gap-5  w-full lg:w-2/3 overflow-hidden">
                <input type="text" placeholder="Enter your name" className=" text-sm rounded-md py-3 lg:py-5 text-center" />
                <input type="text" placeholder="Enter you email" className=" text-sm rounded-md py-3 lg:py-5 text-center" />
            </div>
            <Button className="bg-primary text-white whitespace-nowrap lg:text-2xl rounded-md">Subscribe</Button>
        </section>
    )
}

export default NewsLetter