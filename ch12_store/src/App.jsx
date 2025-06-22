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
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/search" element={<Search />} />

        </Routes>
      </PageContainer>
    </>
  )
}


export default App