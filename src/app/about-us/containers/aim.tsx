import Image from 'next/image'
import imgCurve from '@/assets/curves2.svg'

const Aim = () => {
    return (
        <section className='relative flex flex-col lg:grid lg:grid-flow-row lg:grid-rows-3'>
            <article className='bg-[#F4DCFF] text-secondary px-6 lg:px-20 py-10 lg:py-14 z-10 relative'>
    <div className='flex flex-col lg:flex-row gap-4 lg:gap-36 lg:items-center'>
        <h1 className='text-xl lg:text-5xl font-semibold lg:w-1/2'>Our Mission</h1>
        <p className='text-sm lg:text-2xl lg:w-1/2 z-10 relative'>To empower techies with borderless skills, connecting them to dynamic career opportunities. To drive innovation by providing advanced training, bridging the talent gap, and nurturing the growth of individuals and organizations in the ever-evolving tech landscape.</p>
    </div>
   </article>

            <article className='px-6 lg:px-20 py-5 flex items-center lg:py-5 z-10'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-36  lg:items-center'>
                    <h1 className='text-xl lg:text-5xl font-semibold lg:w-1/2'>Our Vision</h1>
                    <p className='text-sm lg:text-2xl lg:w-1/2'>Fostering African Tech Excellence: to elevate Africa's tech landscape, nurturing the next generation of globally competitive talent.</p>
                </div>
            </article>

            <article className='bg-secondary text-white px-6 lg:px-20 py-10 lg:py-14 z-10 '>
                <div className='flex flex-col gap-8 lg:gap-12 my-auto'>
                    <h1 className='text-xl lg:text-5xl font-semibold text-center'>Core Values</h1>
                    <ul className='flex flex-col lg:flex-row gap-6 lg:gap-10 text-base lg:text-lg'>
                        <li><b className='text-sm lg:text-2xl'>Passion</b> fuels excellence and drive impact. It’s a core value that inspires us to achieve greatness and make a meaningful difference.</li>
                        <li><b className='text-lg lg:text-2xl'>Vision</b> enables us to see beyond the present and create a better future. It empowers us to set ambitious goals and make lasting change.</li>
                        <li><b className='text-lg lg:text-2xl'>Integrity</b> is a core value that guides us to do what’s right, even when it’s hard. It builds trust, respect, and credibility, and also helps us to make positive impact</li>
                    </ul>
                </div>
            </article>


        </section>
    )
}

export default Aim