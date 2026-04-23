// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/index'
import SobreNos from './pages/SobreNos/index'
import FaleConosco from './pages/FaleConosco/index'
import Footer from './components/Footer/index'

export default function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
      </main>
      
      
    </>
  )
}

