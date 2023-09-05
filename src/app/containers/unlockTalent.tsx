import React from 'react'
import CourseHighllight from './courseHighllight'

const UnlockTalent = () => {
    return (
        <section className="py-32 flex flex-col items-center text-center gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
                Unlock <span className="text-gray-500"> hidden </span> tech talents
            </h1>                       
            <p className='text-lg text-center'>Welcome to INGRYD academy, Africa&nbsp;s number one tech talent partner, helping organizations <br /> transform their businesses..</p>

            <CourseHighllight />
        </section>
    )
}

export default UnlockTalent