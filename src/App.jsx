import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import SectionOne from './pages/sectionOne/sectionOne';
import SectionTwo from './pages/sectionTwo/SectionTwo';
import SectionThree from './pages/sectionThree/SectionThree';
import SectionFour from './pages/sectionFour/SectionFour';
import SectionFive from './pages/sectionFive/SectionFive';
import SectionSix from './pages/sectionSix/SectionSix';
import AdminPage from './pages/AdminPage/Adminpage';

import './App.css';
import SectionSeven from './pages/sectionSeven/SectionSeven';


const App = () => {
  const [partners, setPartners] = useState([]);

  const addPartner = (partner) => {
    setPartners([...partners, partner]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminPage
              addPartner={addPartner}
              partners={partners}
              setPartners={setPartners}
            />
          }
        />
        <Route path="/" element={
          <>
            <Header />
            <SectionOne />
            <SectionSeven/>
            <SectionThree />
            <SectionFour />
            <SectionTwo partners={partners} />
            <SectionFive />
            <SectionSix />
          </>
        } />
      </Routes>

    </Router>
  );
};

export default App;
