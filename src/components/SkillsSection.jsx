import React from 'react'

const SkillsSection = () => {
  return (
    <div className='flex flex-col pt-10 pb-10'>
        <h1 className=' text-center font-bold text-2xl px-6 text-gray-300'>My Skills</h1>
        <div className='flex justify-center lg:space-x-24 space-x-8 pt-8'>
            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/swift/swift.png" alt="" className='h-8 lg:h-14 rounded-lg'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" alt="" className="h-8 lg:h-14" />
            <img src="https://static-00.iconduck.com/assets.00/flutter-icon-1651x2048-kopq1sul.png" alt="" className='h-8 lg:h-14'/>
            <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="" className='h-8 lg:h-14'/>
            <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" alt="" className='h-8 lg:h-14'/>
        </div>
    </div>
  )
}

export default SkillsSection