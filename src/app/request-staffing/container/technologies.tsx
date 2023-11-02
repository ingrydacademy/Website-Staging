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

        </section>
    )
}

export default Technologies