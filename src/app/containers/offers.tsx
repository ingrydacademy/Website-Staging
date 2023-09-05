import Link from 'next/link'
import Image from 'next/image'

import bgImage from '@/assets/curves.svg'


import icon1 from '@/assets/training-online-icon 1.svg'
import icon2 from '@/assets/share-group-member-icon 1.svg'

import img1 from '@/assets/searchforImage.png'
import { ArrowRight } from 'lucide-react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Offers = () => {
    return (
        <section className="relative flex flex-col lg:flex-row text-white">
            {/* <Image src={bgImage} alt="curve image" className="object-cover object-top absolute inset-0 -z-10" fill /> */}
            <div className='flex relative shrink-0 w-1/2'>
                <Image src={img1} alt="heroImage" fill className='object-cover' />
            </div>
            <div className='flex flex-col gap-10 grow bg-secondary p-8 py-16 lg:p-16'>
                <h1 className='text-2xl lg:text-4xl font-semibold'><span className='text-primary'>Your search</span>  for the right <br /> tech talent <span className='text-primary'> ends here</span></h1>
                <ul className='flex flex-col gap-6'>
                    <li className='flex gap-4'>
                        <Image src={icon1} alt='image' className="h-20 aspect-square rounded-lg bg-primary p-3" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-xl'>
                                Training on request
                            </h1>
                            <p className='font-light'>
                                Request custom training for your organization
                            </p>
                            <Link href={'/'} className='flex gap-2 font-light underline items-center'>
                                <span> Learn More</span> 
                                <ArrowRightIcon className='w-4  h-4' />
                            </Link>
                        </div>
                    </li>
                    <li className='flex gap-4'>
                        <Image src={icon2} alt='image' className="h-20 aspect-square rounded-lg bg-primary p-3" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-xl'>
                                Outsourcing
                            </h1>
                            <p className='font-light'>
                                Tap into our extensive database of ready-to-go trained tech expert
                            </p>
                            <Link href={'/'} className='flex gap-2 font-light underline items-center'>
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