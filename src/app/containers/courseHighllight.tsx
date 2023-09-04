import ch1 from '@/assets/ch-1.png'
import ch2 from '@/assets/ch-2.png'
import ch3 from '@/assets/ch-3.png'

import Image from 'next/image'
import { Book, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CourseHighllight = () => {
    return (
        <section className='flex flex-col px-8 lg:px-48 py-6'>
            <ul className='grid lg:grid-cols-3 gap-8'>
                <li className="flex flex-col w-full borderp-1 border-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                        <Image src={ch3} alt="course image" className='object-cover' fill />
                    </div>
                    <div className='flex flex-col justify-between gap-2 grow p-2'>
                        <div className='flex justify-between p-2 border-b border-gray-100'>
                            <p className='text-2xl font-semibold'>{'Cybersecurity '}</p>
                        </div>
                        <p className='p-2'>
                            {'This 12-week Cybersecurity Course provides comprehensive training in protecting computer systems and networks from unauthorized access, use, disclosure, disruption, modification, or destruction...'}
                        </p>
                        <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                            <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                            <p className="flex items-center"><Book  className='text-primary h-4' /> Virtual</p>
                        </div>
                        <div className='flex px-2 gap-4 mt-4 items-center'>
                            <Button className="bg-secondary">Enroll</Button>
                            <p className='text-xl font-bold'>550,000</p>
                            <p className='text-xl font-bold line-through'>785,000</p>
                        </div>

                    </div>
                </li>
                <li className="flex flex-col w-full borderp-1 border-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                        <Image src={ch2} alt="course image" className='object-cover' fill />
                    </div>
                    <div className='flex flex-col justify-between gap-2 grow p-2'>
                        <div className='flex justify-between p-2 border-b border-gray-100'>
                            <p className='text-2xl font-semibold'>{'Linux '}</p>
                        </div>
                        <p className='p-2'>
                            {'Discover the power of Linux, the most popular operating system used in servers, supercomputers, and embedded devices. Learn how to install and configure Linux distributions, manage files and permissions...'}
                        </p>
                        <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                            <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                            <p className="flex items-center"><Book  className='text-primary h-4' /> Virtual</p>
                        </div>
                        <div className='flex px-2 gap-4 mt-4 items-center'>
                            <Button className="bg-secondary">Enroll</Button>
                            <p className='text-xl font-bold'>300,000</p>
                            <p className='text-xl font-bold line-through'>585,000</p>
                        </div>

                    </div>
                </li>
                <li className="flex flex-col w-full borderp-1 border-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <div className='w-full shrink-0 bg-gray-100 h-32 relative'>
                        <Image src={ch1} alt="course image" className='object-cover' fill />
                    </div>
                    <div className='flex flex-col justify-between gap-2 grow p-2'>
                        <div className='flex justify-between p-2 border-b border-gray-100'>
                            <p className='text-2xl font-semibold'>{'Java '}</p>
                        </div>
                        <p className='p-2'>
                            {'In this intensive Java programming course, you&apos;ll learn the fundamentals of object-oriented programming and master the Java syntax. From variables and loops to classes and objects, you&apos;ll gain a deep understanding of the Java...'}
                        </p>
                        <div className='flex gap-8 mt-6 text-sm px-2 justify-between'>
                            <p className="flex items-center"><Calendar className='text-primary h-4' /> 12 Weeks</p>
                            <p className="flex items-center"><Book  className='text-primary h-4' /> Hybrid</p>
                        </div>
                        <div className='flex px-2 gap-4 mt-4 items-center'>
                            <Button className="bg-secondary">Enroll</Button>
                            <p className='text-xl font-bold'>175,000</p>
                            <p className='text-xl font-bold line-through'>450,000</p>
                        </div>

                    </div>
                </li>
            </ul>
        </section>
    )
}

export default CourseHighllight