import CourseHighllight from "@/components/courseHighllight"


const Explore = () => {
    return (
        <section className='flex flex-col  lg:gap-10 py-10 lg:py-24 relative text-secondary'>
            <div className="text-center">
            <h1 className='text-xl lg:text-5xl font-semibold text-center '>
                Explore our Expertise
            </h1>
            <p className="text-sm px-5 lg:text-lg mt-5 ">Hire our talented trainers to deliver quality training on these technologies and more.</p>
            </div>

            <CourseHighllight />

        </section>
    )
}

export default Explore