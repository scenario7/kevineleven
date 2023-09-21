import React from 'react'

const AppCard = (props) => {

    const {imageURL, title, description, projectLink, numerals} = props.project;

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:items-center justify-center sm:items-start px-8 pt-10 pb-10">
                <img src={imageURL} alt="" className='rounded-2xl w-24 h-24'/>

    <div className='flex lg:justify-between lg:w-screen'>
        <div className='flex flex-col justify-between py-2 lg:pl-4'>
            <h1 className='font-bold text-xl text-white'>{title}</h1>
            <h1 className='font-semibold text-md text-zinc-400'>{description}</h1>
            <h1 className='font-bold tracking-tighter text-white bg-gradient-to-r to-gray-900 from-gray-300 transition duration-700 bg-clip-text text-transparent text-2xl'>{numerals}</h1>
        </div>
    </div>
    <a href={projectLink} target='_blank' className='lg:pl-3'>
    <button className='flex items-center bg-blue-500 hover:bg-blue-700 text-white font-medium text-lg rounded-full px-3 h-10'>
            Download
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>

        </button>
    </a>

    </div>


  )
}

export default AppCard