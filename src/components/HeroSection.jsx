import React from 'react'
import profile from '../images/profile.PNG'


const HeroSection = () => {
  return (
    <div className='flex items-center justify-center text-white px-8 py-8 pb-20 relative'>
        <div className='absolute top-0 -left-4 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-40'>

        </div>
        <div className='absolute bottom-0 -right-4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-40'>

        </div>
        <div className='relative flex flex-col-reverse lg:flex-row lg:items-center items-start'>
            <div className='flex-col justify-start pt-6'>
                <h2 className='font-medium tracking-tight text-2xl'>Hi, I'm Kevin 👋</h2>
                <h1 className='font-bold tracking-tight lg:text-8xl text-6xl'>I make apps for <span className='bg-gradient-to-tr bg-clip-text from-lime-400 to-lime-200 text-transparent'>iPhones</span> & <span className='bg-gradient-to-tr bg-clip-text from-blue-400 to-blue-200 text-transparent'>design</span> cool stuff for the web.</h1>
            </div>
            <img src={profile} alt="" className='lg:w-52 lg:h-52 w-24 h-24 rounded-full outline outline-gray-700 outline-4'/>
        </div>
    </div>
  )
}

export default HeroSection