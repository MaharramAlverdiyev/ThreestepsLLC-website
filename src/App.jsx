import React from 'react'
import Header from './pages/Header/Header'
import SectionOne from './pages/sectionOne/sectionOne'
import './App.css';
import SectionTwo from './pages/sectionTwo/SectionTwo';
import SectionThree from './pages/sectionThree/SectionThree';
import SectionFour from './pages/sectionFour/SectionFour';
import SectionFive from './pages/sectionFive/SectionFive';
import SectionSix from './pages/sectionSix/SectionSix';


const App = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionThree/>
      <SectionFour/>
      <SectionTwo/>
      <SectionFive/>
      <SectionSix/>
    </>
  )
}

export default App