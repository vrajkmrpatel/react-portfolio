import React from "react";
import myimg from "../assets/myimg.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import Typewriter from 'typewriter-effect';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import ProfileViews from "./ProfileViews";

const Hero = () => {

    const [text] = useTypewriter({
        words: ['CSE Student', 'Web Developer', 'Software Engineer'],
        delaySpeed: 2000,
        loop: {},
    });

    return (
        <div className="w-full container mx-auto flex justify-center items-center flex-wrap py-12 px-4">
            <div className="left-container md:w-1/2 w-full max-w-md p-5">
                <img
                    src={myimg}
                    alt="Vrajkumar Patel - Software Engineer and Web Developer"
                    className="w-80 md:w-96 m-auto rounded-full border-4 border-primary p-1 shadow-xl"
                    loading="eager"
                    width="384"
                    height="384"
                />
            </div>
            <div className="right-container md:w-1/2 w-full max-w-md p-5">
                <div className="poppins-medium text-2xl md:text-4xl mb-4">
                    Hi 👋<br /> My name is <span className="text-primary font-bold">Vrajkumar Patel</span>
                </div>
                <div className="poppins-bold text-3xl md:text-5xl font-semibold my-4">
                    I'm a
                    <span className="pl-2 text-primary uppercase">{text}</span>
                    <Cursor />
                </div>

                <button
                    className="btn btn-primary btn-lg mt-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => document.getElementById('my_modal_5').showModal()}
                    aria-label="View Resume"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    VIEW RESUME
                </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box w-11/12 max-w-7xl h-[85vh] sm:h-[90vh] flex flex-col p-4 sm:p-6">
                        {/* Optional Title - Uncomment if needed */}
                        {/* <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-primary text-center">My Resume</h3> */}

                        {/* PDF Viewer */}
                        <div className="flex-grow overflow-hidden rounded-lg border border-base-300 mb-3 sm:mb-4">
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-full"
                                title="Vrajkumar Patel's Resume"
                                style={{ minHeight: '400px' }}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="modal-action mt-0 justify-center">
                            <form method="dialog" className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                <a
                                    href="https://drive.google.com/file/d/1xF0nuu9jULi6F3716YAq5J6SxLaLesY1/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-warning btn-sm sm:btn-md w-full sm:w-auto"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                    <span className="sm:inline">Share</span>
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download="Vrajkumar_Patel_Resume.pdf"
                                    className="btn btn-success btn-sm sm:btn-md w-full sm:w-auto"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span className="sm:inline">Download</span>
                                </a>
                                <button className="btn btn-error btn-sm sm:btn-md w-full sm:w-auto">
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <ProfileViews />
            </div>
        </div>
    );
};

export default Hero;
