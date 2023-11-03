import Image from 'next/image'
import NoteBg from "../assets/backgroundimg.png"

const Note = () => {

  return (
    <section className='flex flex-col items-center justify-center text-center shrink-0 py-10 px-10 lg:py-24 lg:px-36  text-white grow lg:h-full lg:min-h-screen relative'>
      <Image src={NoteBg} alt="Note image" className="object-cover absolute inset-0 -z-10" fill />
        <div className='flex flex-col gap-10 lg:gap-24'>
            <h1 className='text-xl lg:text-4xl font-semibold'>Companies that invest in skilled technology professionals have observed an increase in productivity by over 40% and in profitability by over 30%.</h1>
            <p className='text-lg lg:text-2xl'>At Ingryd, we understand that talent is the lifeblood of any successful organization. Our mission is simple: to connect you with the brightest minds and the most skilled professionals across various industries.</p>
        </div>
    </section>
  )
}



export default Note