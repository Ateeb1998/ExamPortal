import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='flex w-screen justify-center bg-gray-600 mt-5 text-blue-200'>
            <div className='max-w-7xl'>
                <div className='flex flex-col sm:flex-row sm:space-x-24 mt-5 p-5 text-sm'>
                    <div className=''>
                        <div className="w-fit flex items-center space-x-2 bg-[#D4F6FF] text-[#0ad0f4] border border-[#C6E7FF] px-3 py-1.5 rounded-lg">
                            <FaGraduationCap className="h-6 w-6" />
                            <Link to="/" className="text-sm sm:text-xl font-semibold whitespace-nowrap">
                                Exam Portal
                            </Link>
                        </div>

                        <p className='text-white mt-5 mb-3'>Exam portal Edu Solutions Pvt. Ltd.</p>
                        <p className=''>Xyz Near Petrol Pump Akola </p>
                        <p>Support : xyz@gmail.com</p>
                        <p>Toll Free Number : 1800 00 0000</p>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-white mb-5'>Company</p>
                        <span>About Us</span>
                        <span>Careers</span>
                        <span>Teach Online on Testbook</span>
                        <span>Media</span>
                        <span>Sitemap</span>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-white mb-5'>Products</p>
                        <span>Test Series</span>
                        <span>Live Tests and Quizzes</span>
                        <span>Testbook Pass</span>
                        <span>Online Video</span>
                        <span>Practice</span>
                        <span>Live Classes</span>
                        <span>Blog</span>
                        <span>Refer & Earn</span>
                        <span>Books</span>
                        <span>Exam Calender</span>
                    </div>

                    <div>
                        <p className='text-white mb-5'>Our App</p>
                        <div className='space-y-2'>
                            <img src="https://testbook.com/angular/assets/img/template-img/appstore.svg" alt="" />
                            <img src="https://testbook.com/angular/assets/img/template-img/playstore.svg" alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='my-5 flex flex-col gap-3 sm:flex-row justify-between'>
                    <div>Copyright © 2024 Exam Portal Edu Solutions Pvt. Ltd.: All rights reserved</div>
                    <div className='space-x-5'>
                        <span>User Policy</span>
                        <span>Terms</span>
                        <span>Privacy</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer