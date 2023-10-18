import React from 'react'
import CourseHighllight from './courseHighllight'

const UnlockTalent = () => {
    return (
        <section className="py-10 px-8 flex flex-col items-center text-center gap-4">
            <h1 className="text-2xl lg:text-5xl font-bold">
                Ignite <span className="text-gray-500"> Your </span> Tech Journey
            </h1>                       
            <p className='text-sm text-center'>Welcome to INGRYD Academy, your premier tech talent partner in Africa. We're here to bridge the gap between recent tech graduates and the evolving needs of today's dynamic workforce.</p>

            <CourseHighllight />
        </section>
    )
}

export default UnlockTalent