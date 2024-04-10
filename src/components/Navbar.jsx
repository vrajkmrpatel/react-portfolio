import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar p-4 md:flex md:justify-between items-center bg-white  border border-b-black ">
            <div className="poppins-demibold text-md sm:text-xl px-3 md:px-5  font-bold">
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
                className={`md:flex text-center md:items-center md:gap-3 absolute md:static   left-0 w-full md:w-auto md:pl-0 text-black 
        ${open ? "top-16 opacity-100 flex flex-col md:flex-row bg-white" : "top-[-420px]"} md:opacity-100 `}
            >
                <Link
                    className="mx-2 my-2 text-md cursor-pointer text-black font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="mx-2 my-3 text-md cursor-pointer text-black font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="/projects"
                >
                    Projects
                </Link>
                <Link
                    className="mx-2 my-3 text-md cursor-pointer text-black font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className="mx-2 my-3 text-md cursor-pointer text-black font-semibold hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                    to="contact"
                >
                    Contact
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;
