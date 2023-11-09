import CourseHighllight from '@/components/courseHighllight'


const Courses = () => {
    return (
        <section className='flex flex-col items-center gap-2 my-10 lg:my-0 px-5 lg:px-10'>
            <div className='flex flex-col text-center gap-2'>
                <h1 className='font-semibold text-xl lg:text-5xl'>Courses Available</h1>
                <p className='text-xs lg:text-lg'>Make your choice from the listed courses. Discounted for a limited time:  </p>
            </div>
            <CourseHighllight />
        </section>
    )
}

export default Courses