import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import {
    FaArrowUpRightFromSquare,
    FaSquareArrowUpRight,
} from "react-icons/fa6";
import { getCachedData, setCachedData } from "../utils/cache";
import ProjectSkeleton from "./ProjectSkeleton";

// function to limit the number of words in description
function truncateDescription(description, maxLength) {
    const words = description.split(" ");
    if (words.length > maxLength) {
        return words.slice(0, maxLength).join(" ") + "...";
    }
    return description;
}

const API_URL = "https://9z5zbpb5g2.execute-api.us-east-1.amazonaws.com/v1/projects";
const CACHE_KEY = "cache_projects";

const Project = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Check cache first
            const cached = getCachedData(CACHE_KEY);
            if (cached) {
                setCards(cached);
                setLoading(false);
                return;
            }

            try {
                const response = await axios(API_URL);
                const data = response.data;
                setCachedData(CACHE_KEY, data);
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
        <div className="container mx-auto w-full py-8 px-4 min-h-[60vh]">
            <div className="poppins-bold text-primary mb-8 tracking-tight text-3xl sm:text-5xl text-center">
                Projects
            </div>
            <div>
                {loading ? (
                    <div className="flex flex-wrap justify-center gap-2">
                        {[...Array(6)].map((_, i) => <ProjectSkeleton key={i} />)}
                    </div>
                ) : error ? (
                    <p className="text-center ">Error: {error}</p>
                ) : (
                    <div className="flex flex-wrap justify-center gap-6 pb-8">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="w-full max-w-sm flex flex-col gap-3 p-5 rounded-xl bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
                            >
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src={card.img}
                                        className="w-full h-56 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
                                        alt={`${card.title} project screenshot`}
                                        loading="lazy"
                                        width="360"
                                        height="200"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 flex-grow">
                                    <h3 className="text-xl md:text-2xl text-center font-bold text-primary">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-base-content/80 text-center">
                                        {truncateDescription(card.description, 15)}
                                    </p>
                                </div>
                                <div className="flex justify-center gap-3 text-xs md:text-sm font-semibold mt-auto">
                                    <Link
                                        to={card.demo}
                                        className="flex-1 bg-primary text-primary-content uppercase text-center border border-primary hover:bg-primary-focus p-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                                        aria-label={`View demo of ${card.title}`}
                                    >
                                        <span className="flex justify-center items-center gap-2">
                                            <FaArrowUpRightFromSquare />
                                            Demo
                                        </span>
                                    </Link>
                                    <Link
                                        to={card.github}
                                        className="flex-1 bg-base-300 hover:bg-base-content hover:text-base-100 uppercase text-center border border-base-300 p-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                                        aria-label={`View ${card.title} on GitHub`}
                                    >
                                        <span className="flex justify-center items-center gap-2">
                                            <FaGithub />
                                            Github
                                        </span>
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
