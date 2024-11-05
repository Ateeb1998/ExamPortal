import { Button } from 'flowbite-react'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GiTeacher } from "react-icons/gi";
import { FiRadio } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsTranslate } from "react-icons/bs";

const Details = () => {
    return (
        <div className='flex flex-col md:flex-row  max-w-5xl gap-5 md:-space-x-24 md:gap-0 m-auto mt-28 items-center'>
            <div className='flex-1'>
                <div className='space-y-5 w-96'>
                    <div className="w-fit flex items-center space-x-2 bg-[#D4F6FF] text-[#0ad0f4] border border-[#C6E7FF] px-3 py-1.5 rounded-lg">
                        <FaGraduationCap className="h-6 w-6" />
                        <Link to="/" className="text-sm sm:text-xl font-semibold whitespace-nowrap">
                            Exam Portal
                        </Link>
                    </div>

                    <p className='text-3xl font-semibold'>Why Exam Portal ?</p>

                    <p>With 1.8+ Crore Students and One of the best Selection rate in India amongst online learning platforms, you can surely rely on us to excel.</p>

                    <Button className='bg-green-400 text-xs'>Get Started For Free</Button>
                </div>
            </div>





            <div className='flex-1'>
                <div className='flex flex-col sm:grid sm:grid-cols-2 gap-5 space-x-2'>
                    <div className='bg-green-100 w-64 p-5 rounded-xl hover:scale-105'>
                        <GiTeacher className='text-7xl text-white bg-green-400 p-5 rounded-xl mb-20' />
                        <p className='mb-2 font-semibold'>Learn from the Best</p>
                        <p className='text-sm text-gray-500'>Learn from the masters of the subject, in the most engaging yet simplified ways</p>
                    </div>

                    <div className='bg-pink-100 w-64 p-5 rounded-xl hover:scale-105'>
                    <FiRadio className='text-7xl bg-pink-500 text-white p-5 rounded-xl mb-20' />
                        <p className='mb-2 font-semibold'>Live Tests for Real Exam Experience</p>
                        <p className='text-sm text-gray-500'>Feel the thrill of a real exam. Improve your time & pressure management skills</p>
                    </div>

                    <div className='bg-yellow-100 w-64 p-5 rounded-xl hover:scale-105'>
                    <TbBrandGoogleAnalytics className='text-7xl bg-yellow-400 p-5 text-white rounded-xl mb-20' />
                        <p className='mb-2 font-semibold'>Detailed Score Analysis</p>
                        <p className='text-sm text-gray-500'>Get a detailed breakdown of your strengths & weaknesses and discover insights to improve your score</p>
                    </div>

                    <div className='bg-green-100 w-64 p-5 rounded-xl hover:scale-105 duration-500 ease-in-out'>
                    <BsTranslate className='text-7xl text-white bg-green-400 p-5 rounded-xl mb-20' />
                        <p className='mb-2 font-semibold'>Multilingual: 8 Languages</p>
                        <p className='text-sm text-gray-500'>Learn in the language you are most comfortable with. Choose from any of our 8 languages</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details
