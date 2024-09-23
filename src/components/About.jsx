import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaReact } from "react-icons/fa6";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import {
    C,
    Mongo,
    Python,
    Vscode,
    JS,
    Cpp,
    Css,
    Express,
    Html,
    Java,
    Node,
    ReactLogo,
} from "../assets/technologies_logo/index";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container mx-auto w-full  mt-5 ">
            <div className="poppins-bold text-primary mb-4 tracking-tight text-3xl sm:text-5xl text-center">
                About
            </div>
            <div className="w-full container mx-auto flex justify-center items-center flex-wrap-reverse mt-5">
                <div className="left-container md:w-1/2 w-96 p-5 ">
                    <div className="technologies-container">
                        <div className="poppins-bold text-2xl text-center">
                            Technologies
                        </div>
                        <div className="flex justify-center p-5 items-center flex-wrap  mt-5 gap-4">
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={Html}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={Css}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={JS}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={ReactLogo}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={Node}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={Express}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={Mongo}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={C}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo w-24 h-24 rounded-xl object-cover"
                                    src={Cpp}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover"
                                    src={Python}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={Vscode}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="logo  w-24 h-24  rounded-xl object-cover "
                                    src={Java}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-container md:w-1/2 w-96 p-5">
                    <p className="poppins-regular mt-2 text-sm md:text-lg text-justify">
                        I am currently pursuing my MTech in Information and
                        Communication Technology with a specialization in
                        Software Systems at Dhirubhai Ambani Institute Of
                        Information and Communication Technology. I have
                        completed my BTech in Computer Science Engineering from
                        Government Engineering College Gandhinagar. I have
                        successfully qualified for the GATE 2024 exams, which
                        enabled me to secure admission into DAIICT's esteemed
                        MTech ICT program. My passion lies in technology,
                        programming, and development. I have experience in C,
                        C++, and Java, and I primarily use C++ for
                        problem-solving. Apart from coding, Web development has
                        been a part of my interest, which leading me to create
                        projects using JavaScript and React.
                    </p>
                    <p className="poppins-regular mt-2 text-sm md:text-lg text-justify">
                        I am always eager to explore new technologies and apply
                        them to solve real-world problems. My current academic
                        journey is focused on expanding my knowledge and
                        expertise,and I am committed to mastering the
                        technologies I engage with.
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
                            className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            to="https://leetcode.com/Vrajkmr/"
                            className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white"
                        >
                            <SiLeetcode />
                        </Link>
                        <Link
                            to="https://auth.geeksforgeeks.org/user/vrajpatel31"
                            className="text-xl md:text-3xl p-3 bg-white text-green-500 rounded-full drop-shadow-md hover:bg-black hover:text-white"
                        >
                            <SiGeeksforgeeks />
                        </Link>
                        <Link
                            to="https://twitter.com/ilovecompiler"
                            className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white"
                        >
                            <FaSquareXTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
