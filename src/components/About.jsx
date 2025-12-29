import React from "react";
import Timeline from "./Timeline";
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
        <div className="container mx-auto w-full py-12 px-4">
            <div className="poppins-bold text-primary mb-8 tracking-tight text-3xl sm:text-5xl text-center">
                About Me
            </div>
            <div className="w-full container mx-auto flex justify-center items-start flex-wrap gap-8">
                {/* Technologies - Left Side */}
                <div className="left-container flex-1 md:max-w-[45%] w-full p-5 md:order-1 order-2">
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

                {/* About - Right Side */}
                <div className="right-container flex-1 md:max-w-[45%] w-full p-5 md:order-2 order-1">
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
                </div>
            </div>

         
        </div>
    );
};

export default About;
