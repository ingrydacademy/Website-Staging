
const WhoAndHow = () => {
    return (
        <section className='py-24 flex flex-col items-center'>
            <div>
                <ul className='flex flex-col gap-20 lg:w-4/5 text-center mx-auto'>
                    <li className='px-5 w-full lg:px-16 flex flex-col justify-center'>
                        <h1 className='text-xl lg:text-5xl mb-4 font-semibold'>
                            Who we are
                        </h1>
                        <p className="text-lg lg:text-xl">
                            Ingryd is a premier tech talent outsourcing and training academy. At Ingryd, we pride ourselves on our ability to connect businesses with top tech talent,
                            providing innovative solutions to help business succeed in today&apos;s digital landscape
                        </p>
                    </li>

                    <li className='w-full px-5 lg:px-16 flex flex-col justify-center'>
                        <h1 className='text-xl lg:text-5xl mb-4 font-semibold'>
                            How we impact
                        </h1>
                        <p className="text-lg lg:text-xl">
                        INGRYD is committed to helping individuals and teams develop the skills they need to thrive in the tech industry. With a team of experienced professionals, a robust talent network, and a commitment to quality, Ingryd is the go-to partner for businesses looking to scale and innovate. 
                        </p>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}

export default WhoAndHow