import Link from 'next/link'
import Image from 'next/image'
import icon1 from '@/assets/training-online-icon 1.svg'
import icon2 from '@/assets/share-group-member-icon 1.svg'

import img1 from '@/assets/searchforImage.png'
import { ArrowRight } from 'lucide-react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Offers = () => {
    return (
        <section className="p-8 bg-secondary lg:p-0 lg:flex justify-between items-center  text-white">
            <h1 className='text-2xl lg:text-4xl lg:hidden font-semibold'><span className='text-primary'>Your search</span>  for the right <br /> tech talent <span className='text-primary'> ends here</span>
            </h1>

            <div className='my-5 lg:my-0 lg:w-1/2'>
                <figure>
                    <Image src={img1} alt='image' className='rounded-lg lg:h-full lg:rounded-none'/>
                </figure>
            </div>
            <div className='lg:w-1/2 lg:px-10'>
            <h1 className='text-xl hidden lg:block lg:text-4xl mb-10 font-semibold'><span className='text-primary'>Your search</span>  for the right <br /> tech talent <span className='text-primary'> ends here</span>
            </h1>
            <ul className='flex flex-col gap-10'>
                    <li className='flex gap-4'>
                        <Image src={icon1} alt='image' className="h-20 aspect-square rounded-lg bg-primary p-3" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-xl'>
                            Bespoke Training on Request
                            </h1>
                            <p className='font-light text-sm lg:text-base'>
                            Select special skills, empower your teams! Upgrade current staff or tap into our talent pool. Tailored programs, real results. Let's co-create excellence!
                            </p>
                            <Link href={'/about-us'} className='flex gap-2 font-light underline items-center'>
                                <span> Learn More</span> 
                                <ArrowRightIcon className='w-4  h-4' />
                            </Link>
                        </div>
                    </li>
                    <li className='flex gap-4'>
                        <Image src={icon2} alt='image' className="h-20 aspect-square rounded-lg bg-primary p-3" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-xl'>
                            Outsourcing Simplified 
                            </h1>
                            <p className='font-light text-sm lg:text-base'>
                            Need top-tier software engineers? Access our network of prepped professionals, available for flexible 3-6 month contracts or per your unique needs. Skill-matched and experience-aligned, we connect expert talent with your project demands. Hassle-free, quality guaranteed.
                            </p>
                            <Link href={'/https://lms.ingrydacademy.com/signup'} className='flex gap-2 font-light underline items-center'>
                                <span> Learn More</span> 
                                <ArrowRightIcon className='w-4  h-4' />
                            </Link>
                        </div>
                    </li>
                </ul>
                </div>
    </section>
    )
}

export default Offers