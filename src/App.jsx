import { useState ,useEffect } from 'react'
import {  Routes, Route } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Home from './pages/Home';
function App() {
  const history = useNavigate()


  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])

  return (
<div className="app">
<Toaster />
<Header />
  <Routes>
    <Route path="/" element={<Home />} />
 
  </Routes>
</div>
  )
}

export default App
