import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
function App() {




  return (
    <>
     <div className='w-10/12 m-auto'>
        <Navbar>f</Navbar>

        <Routes>

          <Route path="/" element={<Home />}  />
        </Routes>
     </div>
    </>
  )
}


export default App