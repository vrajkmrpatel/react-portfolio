import React from "react";
import myimg from "../assets/myimg.jpg";
import Resume from "../assets/resume.jpg"
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import Typewriter from 'typewriter-effect';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Hero = () => {

    const [text] = useTypewriter({
        words: ['CSE Student', 'Web Developer', 'Software Engineer'],
        delaySpeed: 1000,
        loop: {},
    });

    return (
        <div className="w-full container mx-auto flex justify-center items-center flex-wrap mt-5 ">
            <div className="left-container md:w-1/2 w-96 p-5 ">
                <img
                    src={myimg}
                    alt="myimg"
                    className="w-96 m-auto rounded-full border border-primary p-1 "
                />
            </div>
            <div className="right-container md:w-1/2 w-96 p-5">
                <div className="poppins-medium text-xl md:text-4xl">
                    Hello, My self Vrajkumar Patel
                </div>
                <div className="poppins-bold text-4xl md:text-6xl font-semibold my-2">
                    I'm a
                    <span className="pl-2 text-primary uppercase">{text}</span>
                    <Cursor />
                </div>

                {/*<button className="btn btn-primary">
                    <Link
                    to="https://drive.google.com/file/d/1SapCFvRACycTsJamd1HsvjCNeBh0xAOn/view?usp=drive_link"
                    className="poppins-semibold px-5 py-2 text-center uppercase">Resume</Link>
            </button>*/}

                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>RESUME</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <img src={Resume} />
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn  btn-warning mx-2"><Link to="https://drive.google.com/file/d/1SapCFvRACycTsJamd1HsvjCNeBh0xAOn/view?usp=drive_link" >Share</Link></button>
                                <button className="btn btn-error">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Hero;
