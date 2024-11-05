import React, { useState } from 'react';
import { 
  Button, 
  Navbar, 
  TextInput, 
  Dropdown
} from 'flowbite-react';
import { FaGraduationCap, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const examTypes = [
    "SSC Exams", "Banking Exams", "Teaching Exams", "Railway Exams",
    "Defense Exams", "Engineering Recruitment Exams", "State Government Exams", "Police Exams"
  ];

  const moreItems = [
    "Free Live Class", "Free Live Tests & Quizzes", "Previous Papers", "All Exams"
  ];

  const passItems = [
    { label: "Pass", href: "/pass" },
    { label: "Pass Pro", href: "/pass-pro" }
  ];

  const CustomNavLink = ({ href, children, className }) => (
    <Link 
      to={href} 
      className={`block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg ${className}`}
    >
      {children}
    </Link>
  );

  return (
    <Navbar 
      fluid 
      className="text-sm md:text-2xl border-b-2 shadow-md bg-white px-4 py-2.5 w-full z-50 top-0 fixed" 
    >
      {/* Brand Logo */}
      <div className="flex items-center space-x-2 bg-[#D4F6FF] text-[#0ad0f4] border border-[#C6E7FF] px-3 py-1.5 rounded-lg">
        <FaGraduationCap className="h-6 w-6" />
        <Link to="/" className="text-sm sm:text-xl font-semibold whitespace-nowrap">
          Exam Portal
        </Link>
      </div>

      {/* Search and Get Started Button */}
      <div className="flex md:order-2 gap-2 items-center">
        <div className="relative hidden sm:block">
          <TextInput
            icon={FaSearch}
            placeholder="Search"
            className="w-32 sm:w-60 lg:w-72"
            sizing="sm"
          />
        </div>
        <Button
          className="px-3 h-8 py-2 items-center hidden sm:inline-flex font-light text-white bg-green-500"
        >
          Get Started
        </Button>
        <Navbar.Toggle 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden"
        />
      </div>

      {/* Navigation Links */}
      <Navbar.Collapse className={isMenuOpen ? 'block' : 'hidden md:block'}>
        <div className="flex flex-col md:flex-row md:items-center md:gap-5 w-full md:w-auto mt-4 md:mt-0 text-gray-500 font-normal">
         

          {/* Exams Dropdown */}
          <Dropdown
            label={
              <div className="flex items-center space-x-1">
                <span>Exams</span>
              </div>
            }
            inline
            dismissOnClick={true}
          >
            <div className="py-1">
              {examTypes.map((exam) => (
                <Dropdown.Item key={exam} as={Link} to={`/exams/${exam.toLowerCase().replace(/\s+/g, '-')}`}>
                  {exam}
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown>

          {/* Regular Nav Links */}
          <CustomNavLink className="text-gray-300 font-normal" href="/coaching">
            Coaching
          </CustomNavLink>

          <CustomNavLink className="text-gray-300 font-normal" href="/test-series">
            Test Series
          </CustomNavLink>

          {/* Pass Dropdown */}
          <Dropdown
            label={
              <div className="flex items-center space-x-1">
                <span>Pass</span>
              </div>
            }
            inline
            dismissOnClick={true}
          >
            <div className="py-1">
              {passItems.map((item) => (
                <Dropdown.Item key={item.label} as={Link} to={item.href}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown>

          {/* More Dropdown */}
          <Dropdown
            label={
              <div className="flex items-center space-x-1">
                <span>More</span>
              </div>
            }
            inline
            dismissOnClick={true}
          >
            <div className="py-1">
              {moreItems.map((item) => (
                <Dropdown.Item 
                  key={item} 
                  as={Link} 
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item}
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown>

          {/* Mobile-only Get Started Button */}
          <Button
            gradientMonochrome="purple"
            outline
            className="md:hidden mt-4"
          >
            Get Started
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;