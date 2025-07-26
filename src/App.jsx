import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
   <div className='App'>

    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element={<Hero />}></Route>
            <Route path='/projects' element={<Project />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>

        </Routes>
        <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
