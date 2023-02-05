import React from 'react'
import Laptop from '../assets/laptopp.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />

            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>GreenBull Premium Security</p>

                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Complete protection for all your devices</h1>

                <p>Our most advanced protection is your toughest defense against viruses, ransomware, zero-day threats, Wi-Fi vulnerabilities, and more.</p>

                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 hover:opacity-50 ease-in-out duration-500 bg-black'>Get Started</button>


            </div>
        </div>
    </div>
  )
}

export default Analytics

