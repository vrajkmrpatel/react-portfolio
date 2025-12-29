import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="container mx-auto w-full py-12 px-4">
            <div className="flex flex-col justify-center items-center">
                <div className="poppins-bold text-primary mb-8 tracking-tight text-3xl sm:text-5xl text-center">
                    Get in Touch
                </div>

                <div className="w-full container mx-auto flex justify-center items-center flex-wrap gap-8">
                    <div className="right-container w-full max-w-lg p-5 flex justify-center flex-col items-center">
                        <form
                            onSubmit={onSubmit}
                            className="w-full flex justify-center items-center gap-5 flex-col bg-base-200 p-8 rounded-xl shadow-lg"
                        >

                            <input
                                type="text"
                                name="name"
                                className="input input-bordered w-full input-lg"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full input-lg"
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                name="message"
                                className="textarea textarea-bordered w-full h-40 text-base"
                                placeholder="Enter Message..."
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-full shadow-lg hover:shadow-xl transition-all duration-300"
                                aria-label="Send contact message"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Send Message
                            </button>
                        </form>
                        {result && (
                            <div className={`mt-4 p-4 rounded-lg ${result.includes('Success') ? 'bg-success text-success-content' : 'bg-error text-error-content'}`}>
                                {result}
                            </div>
                        )}

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h3 className="poppins-semibold text-xl text-center mb-4">Connect With Me</h3>
                            <div className="flex justify-center gap-3 md:gap-5 flex-wrap">
                                <a
                                    href="https://www.linkedin.com/in/sdevrajkumarpatel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl p-3 bg-white text-blue-700 rounded-full drop-shadow-md hover:bg-black hover:text-white transition-colors"
                                    aria-label="LinkedIn Profile"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/vrajkmrpatel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white transition-colors"
                                    aria-label="GitHub Profile"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://leetcode.com/u/vraj_31/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white transition-colors"
                                    aria-label="LeetCode Profile"
                                >
                                    <SiLeetcode />
                                </a>
                                <a
                                    href="https://auth.geeksforgeeks.org/user/vrajpatel31"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl p-3 bg-white text-green-500 rounded-full drop-shadow-md hover:bg-black hover:text-white transition-colors"
                                    aria-label="GeeksforGeeks Profile"
                                >
                                    <SiGeeksforgeeks />
                                </a>
                                <a
                                    href="https://twitter.com/ilovecompiler"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl p-3 bg-white text-black rounded-full drop-shadow-md hover:bg-black hover:text-white transition-colors"
                                    aria-label="Twitter Profile"
                                >
                                    <FaSquareXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
