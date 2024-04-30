import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar container mx-auto p-4 md:p-3 md:flex md:justify-between items-center  ">
            <div className="poppins-semibold text-xl md:text-2xl px-3 md:px-5 font-bold">
                <Link to="/">Vraj Patel</Link>
            </div>

            <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
            >
                <ion-icon
                    name={open ? "close-outline" : "menu-outline"}
                ></ion-icon>
            </div>

            <ul
                className={`md:flex text-center md:items-center md:gap-3 absolute md:static left-0 w-full md:w-auto md:pl-0 text-black 
        ${
            open
                ? "top-16 opacity-100 flex flex-col md:flex-row bg-black z-10"
                : "top-[-420px]"
        } md:opacity-100 `}
            >
                <Link
                    className="mx-2 my-2 text-xl cursor-pointer text-white font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="mx-2 my-3 text-xl cursor-pointer text-white font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="/projects"
                >
                    Projects
                </Link>
                <Link
                    className="mx-2 my-3 text-xl cursor-pointer text-white font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className="mx-2 my-3 text-xl cursor-pointer text-white font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="contact"
                >
                    Contact
                </Link>

                <div
                    className={` flex justify-center md:justify-normal gap-3 `}
                >
                    <Link
                        to="https://www.linkedin.com/in/sdevrajkumarpatel/"
                        className=" mx-2 my-3 text-2xl md:text-4xl text-white bg-black"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        to="https://github.com/vrajkmrpatel"
                        className=" mx-2 my-3 text-2xl md:text-4xl text-white bg-black rounded-full drop-shadow-md"
                    >
                        <FaGithub />
                    </Link>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
