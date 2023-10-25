
import Image from 'next/image'
import img1 from '@/assets/Rectangle 50.png'



const Benefit = () => {
    return (
        <section className="py-10 px-6 lg:px-20 lg:py-24 flex flex-col relative">
            <Image src={img1} alt="image" className="object-cover absolute inset-0 -z-10 " fill />
            <div className="flex flex-col gap-10 items-center">
                <div className='text-center flex flex-col gap-4'>
                    <h1 className="text-xl lg:text-5xl font-semibold text-white">Program Benefits</h1>
                    <p className='text-white text-sm lg:text-2xl font-light'>Unearthing the valuable returns of partnering with INGRYD</p>

                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                    <li className="bg-white p-8 text-center flex flex-col gap-6 rounded-lg">
                        <h1 className="font-semibold text-xl lg:text-2xl">For the participants</h1>
                        <p className='text-sm lg:text-base font-medium'>
                            Easier and quicker job placements.
                            A chance to learn in-demand & borderless tech skills and get employed. Become a more competitive & seasoned software engineer with access to endless opportunities around the world.
                        </p>
                    </li>
                    <li className="bg-white p-8 text-center flex flex-col gap-6 rounded-lg">
                        <h1 className="font-semibold text-xl lg:text-2xl">For the Organization</h1>
                        <p className='text-sm lg:text-base font-medium'>
                            Enough of unstable workforce. Tap into our talent pool to gain and retain talents. Enjoy Smooth onboarding process and keep pace with the changes in the tech industry. Minimise cost of recruitment.
                        </p>
                    </li>
                    <li className="bg-white p-8 text-center flex flex-col gap-6 rounded-lg">
                        <h1 className="font-semibold text-xl lg:text-2xl">For the Ecosystem</h1>
                        <p className='text-sm lg:text-base font-medium'>
                            Build a large talent pipeline. Accelerated growth and work fitness. Innovation potential.
                            Improve economic and welfare stability. Develop a robust network of partnerships and collaboration.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Benefit