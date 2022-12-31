import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import SignupPage from './pages/SignupPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App; 