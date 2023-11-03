import WhoWeAre from "@/components/whoWeAre"

const WhoAndHow = () => {
    return (
        <section className='flex flex-col items-center mb-10 lg:mb-20'>
            <div>
                <ul className='flex flex-col text-center mx-auto'>
                    <WhoWeAre/>

                    <li className='w-full px-8 lg:px-12 flex flex-col justify-center'>
                        <h1 className='text-xl lg:text-5xl mb-4 lg:mb-10 font-semibold'>
                            How we impact?
                        </h1>
                        <p className="text-11 lg:text-2xl">
                        INGRYD Academy is your go-to partner for advanced tech training and job placement. Our expert team and extensive talent network make us the ideal choice for tech enthusiasts seeking borderless opportunities and businesses looking to scale and innovate with top-tier tech talent. 
                        </p>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}

export default WhoAndHow