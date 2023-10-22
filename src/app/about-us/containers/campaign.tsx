import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'


const Campaign = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return (
        <section>
            <article className=' text-white flex flex-col gap-8 px-6 lg:px-16 py-16'>
                <div className='flex flex-col gap-6 bg-[#1A183E] rounded-xl py-5 lg:py-12 px-12 items-center'>
                    <h1 className='text-base lg:text-5xl text-center font-semibold'>Join our team</h1>
                    <p className='text-xs lg:text-xl text-center lg:leading-9'>Join our team of high performing engineers, instructors, designers, and managers bringing the INGRYD dream to life!</p>
                    <Button asChild className='bg-primary w-fit mt-6'>
                        <Link href={`${baseUrl}/signup`} className="flex gap-8 items-center py-8 px-8">
                            <p className='text-base lg:text-2xl'>
                                Start here
                            </p>

                            <ArrowRightIcon className="w-6 h-6" />
                        </Link>
                    </Button>
                </div>
            </article>
        </section>
    )
}

export default Campaign