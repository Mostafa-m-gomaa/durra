import { useState ,useEffect } from 'react'
import {  Routes, Route } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/footer';
import CatPage from './pages/CatPage';
import Cart from './pages/Cart';
import SubCatPage from './pages/SubCat';
import ProductPage from './pages/ProductPage';
import JewelPage from './pages/JeweleryPage';
function App() {
  const history = useNavigate()


  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])

  return (
<div className="app w-full max-w-[100vw] overflow-x-hidden">
<Toaster />
<Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cat/:id" element={<CatPage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/subcategory/:id" element={<SubCatPage />} />
    <Route path="/subCat/:id" element={<SubCatPage />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/cat/jeweleryCat" element={<JewelPage />} />
 
  </Routes>
  <Footer />
</div>
  )
}

export default App
