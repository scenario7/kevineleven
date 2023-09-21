import React from 'react'
import AppCard from './AppCard'

const AppCarousel = () => {

    const apps = [
        {
            title : "Mumbai Metro",
            imageURL : "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/4d/95/f5/4d95f513-43ab-e11d-c5b1-6f5d5252f409/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp",
            description : "An app I made for the metro train network in Mumbai. The app features train timings, station maps, a fare calculator, bus routes and much more. It is aimed at giving mumbaikars a seamless travel experience",
            numerals : "25,000+ Downloads",
            projectLink : "https://apps.apple.com/tr/app/mumbai-metro/id1621720810"
        },
        {
            title : "BunkMate",
            imageURL : "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/bf/3e/da/bf3edaf7-71cf-ed83-be6b-3826e4db73cc/AppIcon-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp",
            description : "An attendance tracker app I made for students like me who want more free time to pursue side hustles. The app lets you know when you can skip classes and when you must attend them.",
            numerals : "3-figure MRR",
            projectLink : "https://apps.apple.com/tr/app/bunkmate-attendance-tracker/id6452119916"
        },
        {
            title : "Manipal Notice Board",
            imageURL : "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/0e/45/5c/0e455c4b-435f-e6ff-0b2a-9fbb3a6b27e2/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
            description : "An open source app I worked on in Flutter for my college. It is a digital notice board for all the events happening on campus, and it aims to reduce the usage of paper notices.",
            numerals : "",
            projectLink : "https://apps.apple.com/tr/app/manipal-bangalore-notice-board/id6447073761"
        }
    ]

    const renderApps = apps.map((app) => {
        return(
            <AppCard project={app}></AppCard>
        )
    })

  return (
    <div className='flex flex-col px-5 space-y-7 pt-10'>
        <h1 className=' text-center font-bold text-2xl px-6 text-gray-300'>Published Apps</h1>
        <div className='flex flex-col pb-10 space-y-20 lg:space-y-10 lg:divide-y lg:divide-gray-800'>
            {renderApps}
        </div>
    </div>
  )
}

export default AppCarousel