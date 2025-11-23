import { useState, lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

// Lazy load route components for better performance
const Project = lazy(() => import('./components/Project'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function App() {

  return (
    <div className='App min-h-screen flex flex-col'>

      <BrowserRouter>
        <Navbar />
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }>
          <main className="flex-grow">
            <Routes>
              <Route path='/' element={<Hero />}></Route>
              <Route path='/projects' element={<Project />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
