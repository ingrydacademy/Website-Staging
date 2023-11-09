import { Button } from "@/components/ui/button"
import TechHighlights from "./TechHighlights"


const Technologies = () => {
    return (
        <section className='flex flex-col  lg:gap-10 py-10 lg:py-24 relative text-secondary'>
            <div className="text-center">
            <h1 className='text-xl lg:text-5xl font-semibold text-center '>
            Technologies
            </h1>
            <p className="text-sm px-5 lg:text-lg mt-5 ">Discover the Exceptional Talent Pool at INGRYD - in the following areas and more</p>
            </div>

            <TechHighlights />
            <p className="text-center text-sm lg:text-lg">Need a custom solution?</p>
            <Button asChild className="bg-primary w-1/12 mx-auto hover:bg-secondary transition-all duration-1000 ease-in-out cursor-pointer">
                <p>
                    Contact us
                </p>
            </Button>
        </section>
    )
}

export default Technologies