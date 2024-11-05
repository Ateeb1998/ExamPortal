import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { Button } from 'flowbite-react';
import banner from '/banner.svg'
import appstore from '/appstore.svg'
import playstore from '/playstore.svg'


const HomeMainComp = () => {
  return (
    <div className='w-screen'>
      <div className='flex flex-col md:flex-row justify-center max-h-screen items-center w-screen mt-44 space-y-4 sm:space-y-1 space-x-0 sm:space-x-16  bg-gradient-to-b from-white to-blue-200 sm:px-14 pb-16'>

        <div>
          <div>
            <p className='text-3xl'>One Destination for</p>
            <p className='text-3xl font-semibold'>Complete Exam Preparation</p>
            <div className='flex sm:space-x-5 items-center mt-5'>
              <span className='flex items-center'>Learn <span className='text-green-400 text-2xl '><IoMdArrowDropright /></span></span>
              <span className='flex items-center'>Practice <span className='text-green-400 text-2xl'><IoMdArrowDropright /></span></span>
              <span className='flex items-center'>Improve <span className='text-green-400 text-2xl'><IoMdArrowDropright /></span></span>
              <span className='flex items-center'>Succeed <span className='text-green-400 text-2xl'><IoMdArrowDropright /></span></span>
            </div>
          </div>

          <div className='mt-12'>
            <p className='text-gray-500'>Start your preparation for selections. For Free!</p>
            <div className='ml-1'>
              <div className='flex flex-col sm:flex-row sm:space-x-3 gap-1 sm:gap-0 mt-5'>
                <Button className='m-auto bg-green-400 text-xs items-center w-44 sm:w-56'>Get Started For Free</Button>
                <div className='flex justify-around'>
                  <img src={playstore} className='w-36' alt="" />
                  <img src={appstore} className='w-36' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className=''>
          <img src={banner} className='z-0' />
        </div>


      </div>
    </div>
  )
}

export default HomeMainComp