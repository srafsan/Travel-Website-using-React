import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import SignUp from './components/SignUp/SignUp'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='products' element={<Products />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
