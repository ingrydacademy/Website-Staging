
const Aim = () => {
    return (
        <section className=' relative flex flex-col lg:grid lg:grid-flow-row lg:grid-rows-3'>
            <article className='bg-[#F4DCFF] text-secondary px-10 lg:px-20 py-10 flex items-center lg:py-14 z-10'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 lg:items-center'>
                    <h1 className='text-xl lg:text-5xl font-semibold lg:w-1/3 '>Our Mission</h1>
                    <p className='text-sm lg:text-2xl  z-10 relative lg:w-2/3 font-medium lg:px-3'>To produce highly trained tech talent with the right expertise, culture and work readiness to support the increasing demand from businesses globally.</p>
                </div>
            </article>
            <article className='  px-10 lg:px-20 py-10 flex items-center lg:py-14 z-10 '>
                
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 lg:items-center'>
                    <h1 className='text-xl lg:text-5xl font-semibold lg:w-1/3'>Our Vision</h1>
                    <div className='text-sm lg:text-2xl  z-10 relative lg:w-2/3 font-medium'>
                        <p className='lg:w-4/5'>
                        To become the go to partner globally for business seeking top tech talent to drive innovative solutions.
                        </p>
                    </div>
                </div>
            </article>
            <article className='bg-secondary text-white px-10 lg:px-20 py-10 flex items-center lg:py-14 z-10  '>
                <div className='flex flex-col gap-8 lg:gap-12 my-auto'>
                    <h1 className='text-xl lg:text-5xl font-semibold text-center'>Core Values</h1>
                    <ul className='flex flex-col lg:flex-row gap-6 lg:gap-10 text-sm lg:text-lg'>
                        <li className='lg:px-6'><b className='text-sm lg:text-2xl'>Passion</b> fuels excellence and drive impact. It’s a core value that inspires us to achieve greatness and make a meaningful difference.</li>
                        <li className='lg:px-6'><b className='text-lg lg:text-2xl'>Vision</b> enables us to see beyond the present and create a better future. It empowers us to set ambitious goals and make lasting change.</li>
                        <li className='lg:px-6'><b className='text-lg lg:text-2xl'>Integrity</b> is a core value that guides us to do what’s right, even when it’s hard. It builds trust, respect, and credibility, and also helps us to make positive impact</li>
                    </ul>
                </div>
            </article>


        </section>
    )
}

export default Aim