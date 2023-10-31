import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Campaign = () => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return (
        <section className='flex p-4 lg:p-32'>
            <article className='bg-gradient-to-r from-[#1D63FE]  to-[#B900B4]
             rounded-lg w-full text-white flex flex-col items-center justify-center gap-8 lg:gap-16 px-6 py-16'>
                <h1 className='text-lg lg:text-4xl italic text-center font-semibold'>Innovate faster with the right talent </h1>
                <div className='flex gap-6 '>
                    <Button className='bg-[#1A183E] w-fit' asChild>
                        <Link href={`${baseUrl}/signup`} className='flex gap-3 items-center py-6 px-8'>
                            Start Here 
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </article>
        </section>
    )
}

export default Campaign