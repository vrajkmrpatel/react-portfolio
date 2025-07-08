import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import {
    FaArrowUpRightFromSquare,
    FaSquareArrowUpRight,
} from "react-icons/fa6";

// function to limit the number of words in description
function truncateDescription(description, maxLength) {
    const words = description.split(" ");
    if (words.length > maxLength) {
        return words.slice(0, maxLength).join(" ") + "...";
    }
    return description;
}

const Project = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios("/api/projects");
                const data = response.data;
                setCards(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto w-full h-[85vh] mt-5 ">
            <div className="poppins-bold text-primary mb-4 tracking-tight text-3xl sm:text-5xl text-center">
                Projects
            </div>
            <div>
                {loading ? (
                    <p className="text-center ">Loading... <br /> This will take some time...</p>
                ) : error ? (
                    <p className="text-center ">Error: {error}</p>
                ) : (
                    <div className="flex flex-wrap justify-center gap-2">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="w-30 max-w-96 flex flex-col gap-2 m-4  p-4 rounded-lg bg-base-200 drop-shadow-md transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    src={card.img}
                                    className="w-90 h-full rounded-lg cursor-pointer "
                                    alt={card.title}
                                />
                                <div className="md:text-xl text-center font-bold ">
                                    {card.title}
                                </div>
                                <p className="text-xs md:text-sm text-gray-600">
                                    {truncateDescription(card.description, 15)}
                                </p>
                                <div className="flex justify-center text-xs md:text-sm font-semibold">
                                    <Link
                                        to={card.demo}
                                        className="w-1/2 bg-white text-black uppercase text-center  border hover:text-white hover:bg-primary border-black hover:border-primary p-2 rounded-full m-1"
                                    >
                                        <a className=" flex justify-center items-center gap-1">
                                            demo
                                            <FaArrowUpRightFromSquare />
                                        </a>
                                    </Link>
                                    <Link
                                        to={card.github}
                                        className="w-1/2 bg-white hover:bg-black text-black uppercase text-center border hover:text-white  border-black p-2 rounded-full m-1"
                                    >
                                        <a className=" flex justify-center items-center gap-1">
                                            Github
                                            <FaGithub />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;
