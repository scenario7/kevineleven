import React from 'react'

const Header = () => {
  return (
    <div className='flex px-5 py-5 justify-between items-center'>
       <h1 className='font-primary font-bold tracking-tighte text-2xl text-white'>kevin<span className='text-gray-500'>thomas</span>.</h1> 
       <div className='flex items-center space-x-3'>
       <button className='text-white flex items-center hover:outline transition ease-in hover:outline-gray-500 hover:outline-1 bg-black px-3 py-1 rounded-full text-xl font-bold divide-x divide-gray-500'>
        <h1 className='pr-2'>contact</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>

        </button>
       </div>
       
    </div>
  )
}

export default Header