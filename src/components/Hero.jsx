import React from "react";
import myimg from "../assets/myimg.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import Typewriter from 'typewriter-effect';
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import Resume from '../../public/resume.pdf'

const Hero = () => {

    const [text] = useTypewriter({
        words: ['CSE Student', 'Web Developer', 'Software Engineer'],
        delaySpeed: 1000,
        loop: {},
    });
  
    return (
        <div className="w-full container mx-auto flex justify-center items-center flex-wrap mt-5">
            <div className="left-container md:w-1/2 w-96 p-5 ">
                <img
                    src={myimg}
                    alt="myimg"
                    className="w-96 m-auto rounded-full border border-white p-1"
                />
            </div>
            <div className="right-container md:w-1/2 w-96 p-5">
                <div className="poppins-medium text-xl md:text-4xl">
                    Hello, My self Vrajkumar Patel
                </div>
                <div className="poppins-bold text-4xl md:text-6xl font-semibold my-2">
                   I'm a 
                   <span className="pl-2 text-blue-700 uppercase">{text}</span>
                   <Cursor/>
                </div>
        {/*
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
    
                <div className="flex justify-normal mt-4 gap-3 md:gap-5">
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

                */}
                    <div className="mt-5">
                    <Link
                    to="https://drive.google.com/file/d/1SapCFvRACycTsJamd1HsvjCNeBh0xAOn/view?usp=drive_link"
                    className="poppins-semibold px-7 py-2 bg-white text-black rounded-full text-center uppercase">Resume</Link>
            </div>
            </div>
        </div>
    );
};

export default Hero;
