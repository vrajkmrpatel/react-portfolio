import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto w-full mt-5 ">
            <div className="flex flex-col justify-center items-center">
                <div className="poppins-bold mb-4 tracking-tight text-3xl sm:text-5xl text-center">
                    Get in Touch
                </div>
               
                   <form 
                   className="w-[80%] flex justify-center items-center gap-4 flex-col">
                        <input type="text" className="input input-bordered w-full" placeholder="Your Name"/>
                        <input type="email" className="input input-bordered w-full" placeholder="Your Email"/>
                        <textarea className="textarea textarea-bordered w-full h-48 " placeholder="Enter Message..."></textarea>
                        <button type="submit" className="btn btn-primary rounded-full w-full">Send Message</button>
                   </form>
                   
                </div>
        
        </div>
    );
};

export default Contact;
