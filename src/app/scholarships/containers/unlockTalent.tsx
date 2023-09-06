import React from 'react'
import CourseHighllight from './courseHighllight'

const UnlockTalent = () => {
    return (
        <section className="py-24 flex flex-col items-center px-6 text-center gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
                Available Courses
            </h1>
            <p className='text-lg text-center lg:px-36'>Beginning this October, the program will welcome its first cohort of 1,000 participants, followed by three additional cohorts over the next 12 months. To be qualified for the INGRYD scholarship, participants must pass the application assessment with a minimum average score of 65%.
            </p>

            <CourseHighllight />
        </section>
    )
}

export default UnlockTalent