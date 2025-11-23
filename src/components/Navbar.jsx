import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "forest"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div className="navbar container mx-auto p-4 md:p-3 md:flex md:justify-between items-center">
            <div className="poppins-semibold text-xl md:text-2xl px-3 md:px-5 font-bold ">
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
                className={`md:flex text-center md:items-center md:gap-3 absolute md:static left-0 w-full md:w-auto md:pl-0 
        ${open
                        ? "top-16 opacity-100 flex pb-4 flex-col md:flex-row z-10 bg-base-100 "
                        : "top-[-420px]"
                    } md:opacity-100 `}
            >
                <Link
                    className="mx-2 my-2 text-xl cursor-pointer  font-semibold hover:text-primary"
                    onClick={() => setOpen(false)}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="mx-2 my-3 text-xl cursor-pointer  font-semibold hover:text-primary"
                    onClick={() => setOpen(false)}
                    to="/projects"
                >
                    Projects
                </Link>
                <Link
                    className="mx-2 my-3 text-xl cursor-pointer  font-semibold hover:text-primary"
                    onClick={() => setOpen(false)}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className="mx-2 my-3 text-xl cursor-pointer  font-semibold hover:text-primary"
                    onClick={() => setOpen(false)}
                    to="contact"
                >
                    Contact
                </Link>

                <div
                    className={` flex justify-center md:justify-normal gap-3 `}
                >
                    {/* Theme Selector - Responsive */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow-lg bg-base-200 rounded-box w-40 mt-3 border border-base-300">
                            <li className="menu-title">
                                <span className="text-xs font-semibold opacity-70">Choose Theme</span>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleThemeChange("light")}
                                    className={`btn btn-sm justify-start ${theme === 'light' ? 'btn-primary' : 'btn-ghost'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Light
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleThemeChange("dark")}
                                    className={`btn btn-sm justify-start ${theme === 'dark' ? 'btn-primary' : 'btn-ghost'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                    Dark
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleThemeChange("forest")}
                                    className={`btn btn-sm justify-start ${theme === 'forest' ? 'btn-primary' : 'btn-ghost'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    Forest
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Old toggle code commented out */}
                    {/*<label className="swap swap-rotate btn btn-circle">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light" ? false : true}
                        />

                        <svg
                            className="swap-on fill-current w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <svg
                            className="swap-off fill-current w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
    </label>*/}
                    <label className="btn btn-circle">
                        <a
                            href="https://github.com/vrajkmrpatel"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <svg
                                className=" fill-current w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </label>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
