import React, { useState } from "react";

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
                    <div className="left-container md:w-1/2 w-96 p-5 ">
                        <div class="mb-6 space-y-8 md:mt-8">
                            <p class="flex items-start -mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 mx-2 text-primary dark:text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <span class="mx-2  truncate w-72 dark:text-gray-400">
                                    Vadodara, Gujarat, India 390009
                                </span>
                            </p>

                            <p class="flex items-start -mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 mx-2 text-primary dark:text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>

                                <span class="mx-2 truncate w-72 dark:text-gray-400">
                                    +91 9512331224
                                </span>
                            </p>

                            <p class="flex items-start -mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 mx-2 text-primary dark:text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>

                                <span class="mx-2  truncate w-72 dark:text-gray-400">
                                    31vrajpatel@gmail.com
                                </span>
                            </p>
                        </div>
                        <div class="overflow-hidden rounded-lg lg:col-span-2 h-96">
                            <iframe
                                width="100%"
                                height="100%"
                                frameborder="0"
                                title="map"
                                marginheight="0"
                                marginwidth="0"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62732.38348851792!2d73.19419789199077!3d22.295840357599445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714757061047!5m2!1sen!2sin"
                            ></iframe>
                        </div>
                    </div>
                    <div className="right-container md:w-1/2 w-full max-w-lg p-5 flex justify-center flex-col items-center">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
