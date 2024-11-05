import React from 'react'
import FullStackDevelopmentCareerProgramCourseCard from '/FullStackDevelopmentCareerProgramCourseCard.webp'

const Courses = () => {
  return (
    <div className='py-2 w-screen h-fit bg-gradient-to-b from-green-50 to-blue-100 mt-5'>
        <div className='ml-3 sm:ml-56 text-3xl flex gap-2'>
            <span className='border-2 border-green-500 rounded-r-md'></span>
            <p>Explore Programs</p>
        </div>
        <div className='ml-3 sm:ml-56 flex flex-col md:flex-row gap-5 mt-5 border w-fit rounded-md'>
            <div className='w-60 hover:scale-105 duration-700 ease-in-out'>
                <img className='rounded-t-md ' src={FullStackDevelopmentCareerProgramCourseCard} alt="" />
                <p className='bg-gradient-to-r from-green-300 to-green-400 text-center py-1 text-white'>Batch closes in 5 hours</p>
                <p className='p-3'>Business Analyst Career Program (ChatGPT Included)</p>
                <p className="text-sm text-gray-500 p-3"> 8 months | 5+ Projects | Designed For Freshers </p>
            </div>

            <div className='w-60 hover:scale-105 duration-700 ease-in-out'>
                <img className='rounded-t-md' src={FullStackDevelopmentCareerProgramCourseCard} alt="" />
                <p className='bg-gradient-to-r from-green-300 to-green-400 text-center py-1 text-white'>Batch closes in 5 hours</p>
                <p className='p-3'>Business Analyst Career Program (ChatGPT Included)</p>
                <p className="text-sm text-gray-500 p-3"> 8 months | 5+ Projects | Designed For Freshers </p>
            </div>

            <div className='w-60 hover:scale-105 duration-700 ease-in-out'>
                <img className='rounded-t-md' src={FullStackDevelopmentCareerProgramCourseCard} alt="" />
                <p className='bg-gradient-to-r from-green-300 to-green-400 text-center py-1 text-white'>Batch closes in 5 hours</p>
                <p className='p-3'>Business Analyst Career Program (ChatGPT Included)</p>
                <p className="text-sm text-gray-500 p-3"> 8 months | 5+ Projects | Designed For Freshers </p>
            </div>
            
        </div>
    </div>
  )
}

export default Courses