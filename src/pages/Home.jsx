import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card';
import Courses from '../components/Courses';
import HomeMainComp from '../components/HomeMainComp';
import Details from '../components/Details';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Header />
      <HomeMainComp />
      <Card />
      <Courses />
      <Details />
      <Footer />
    </div>
  )
}

export default Home