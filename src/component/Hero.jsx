import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (

    <div className='text-white'>

        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Safe Your Data Now!</p>

            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Free antivirus is your first step to online freedom</h1>

            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, Flexible And </p>

                <Typed className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' strings={['Easy', 'Strong', 'Believed']} typeSpeed={120} backSpeed={140} loop />

            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-500'>GreenBull Antivirus is more than just an antivirus — it also includes these specialist tools.</p>

            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto hover:opacity-50 ease-in-out duration-500 text-black'>Get Started</button>

        </div>

    </div>
  )
}

export default Hero;
