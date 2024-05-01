import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter, FaReact } from 'react-icons/fa6'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import {  C, Mongo, Python, Vscode, JS, Cpp, Css, Express, Html, Java, Node, ReactLogo  } from '../assets/technologies_logo/index'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container mx-auto w-full  mt-5 ">
            <div className="text-xl md:text-3xl text-center m-2 font-semibold">
                About
            </div>
            <div className="w-full container mx-auto flex justify-center items-center flex-wrap-reverse mt-5">
            <div className="left-container md:w-1/2 w-96 p-5 ">
                <div className='technologies-container'>
                  <div className='poppins-bold text-2xl text-center'>Technologies</div>
                  <div className='flex justify-center p-5 items-center flex-wrap  mt-5 gap-4'>
                    
                   
                    <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={Html} alt="" />
                    </div>
                    <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={Css} alt="" />
                    </div>
                    <div className=''>
                    <img className=' w-24 h-24  rounded-xl object-cover ' src={JS} alt="" />
                  </div>
                    <div className=''>
                    
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={ReactLogo} alt="" />
                    </div>
                    <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={Node} alt="" />
                    </div>
                    <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={Express} alt="" />
                    </div>
                    <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={Mongo} alt="" />
                    </div>
                    <div className=''>
                    <img className=' w-24 h-24  rounded-xl object-cover ' src={C} alt="" />
                    </div>
                    <div className=''>
                      <img className='w-24 h-24 rounded-xl object-cover' src={Cpp} alt="" />
                    </div>
                    <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover' src={Python} alt="" />
                      </div>
                      <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={Vscode} alt="" />
                      </div>
                    <div className=''>
                      <img className=' w-24 h-24  rounded-xl object-cover ' src={Java} alt="" />
                    </div>
                  </div>  
                </div>
            </div>
            <div className="right-container md:w-1/2 w-96 p-5">
                
      
                <p className="poppins-regular mt-2 text-sm md:text-lg text-justify">
                    I am currently in my final year of Computer Engineering. I
                    am very passionate about technology, programming and
                    development. I have done Programming in C, C++ and Java.
                    Currently using C++ for DSA and Problem Solving. Apart from
                    coding web development has been a part of my interest. I
                    have made projects in Javascript, React, Node and Express.
                </p>
                <p className="poppins-regular mt-2 text-sm md:text-lg text-justify">
                    I love to explore things & love to implement them in
                    real-life problems. I'm currently trying to learn various
                    technologies and will definitely master them one day.
                </p>
    
                <div className="flex justify-center md:justify-normal mt-4 gap-3 md:gap-5">
                    <Link
                        to="https://www.linkedin.com/in/sdevrajkumarpatel/"
                        className="text-xl md:text-3xl p-3 bg-white text-blue-700 rounded-full drop-shadow-md hover:bg-black hover:text-white"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link 
                    to="https://github.com/vrajkmrpatel"
                    className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white">
                        <FaGithub />
                    </Link>
                    <Link 
                    to="https://leetcode.com/Vrajkmr/"
                    className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white">
                        <SiLeetcode />
                    </Link>
                    <Link 
                    to="https://auth.geeksforgeeks.org/user/vrajpatel31"
                    className="text-xl md:text-3xl p-3 bg-white text-green-500 rounded-full drop-shadow-md hover:bg-black hover:text-white">
                        <SiGeeksforgeeks />
                    </Link>
                    <Link 
                    to="https://twitter.com/ilovecompiler"
                    className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white">
                        <FaSquareXTwitter />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About