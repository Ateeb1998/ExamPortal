import React from 'react';
import { BsShieldFillCheck } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { FcQuestions } from "react-icons/fc";

const Card = () => {
  return (

    <div className='-mt-16 flex flex-col md:flex-row border-8 rounded-xl border-white w-fit mx-auto z-10'>
      <div className='flex-1'>
        <div className='w-fit flex space-x-4 py-5 px-10 items-center hover:shadow-lg transition-shadow bg-green-200 rounded-l-lg'>
          <div className='text-green-500 text-4xl sm:text-5xl' aria-label="Shield icon"><BsShieldFillCheck /></div>
          <div className='flex flex-col'>
            <span>Registered Students</span>
            <span className='font-semibold text-xl'>1000+</span>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='z-10 w-fit flex space-x-4 py-5 px-10 items-center hover:shadow-lg transition-shadow bg-green-50'>
          <div className='text-green-500 text-4xl sm:text-5xl' aria-label="Shield icon"><GoTrophy /></div>
          <div className='flex flex-col'>
            <span>Student Selections</span>
            <span className='font-semibold text-xl'>600+</span>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className=' z-10 w-fit flex space-x-4 py-5 px-10 items-center hover:shadow-lg transition-shadow bg-green-50'>
          <div className='text-green-500 text-4xl sm:text-5xl' aria-label="Shield icon">
            <BsShieldFillCheck />
          </div>
          <div className='flex flex-col'>
            <span>Tests Attempted</span>
            <span className='font-semibold text-xl'>2000+</span>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='z-10 w-fit flex space-x-4 py-5 px-10 items-center hover:shadow-lg transition-shadow bg-green-50'>
          <div className='text-green-500 text-4xl sm:text-5xl' aria-label="Shield icon"><FcQuestions /></div>
          <div className='flex flex-col'>
            <span>Classes Attended</span>
            <span className='font-semibold text-xl'>2500+</span>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Card;
