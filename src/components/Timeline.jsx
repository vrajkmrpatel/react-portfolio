import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const Timeline = () => {
    const [activeTab, setActiveTab] = useState('education');
    const [visibleItems, setVisibleItems] = useState(new Set());
    const observerRef = useRef(null);

    // Sample data - User should update with their actual information
    const educationData = [
        {
            id: 1,
            degree: 'MTech in Information and Communication Technology',
            specialization: 'Software Systems',
            institution: 'Dhirubhai Ambani University (DAIICT)',
            location: 'Gandhinagar, Gujarat',
            period: '2024 - 2026',
            description: 'Specializing in Software Systems with focus on advanced algorithms, distributed systems, and software architecture. Qualified through GATE 2024.',
            isOngoing: true
        },
        {
            id: 2,
            degree: 'BTech in Computer Science Engineering',
            institution: 'Government Engineering College Gandhinagar',
            location: 'Gandhinagar, Gujarat',
            period: '2020 - 2024',
            description: 'Completed undergraduate studies with strong foundation in data structures, algorithms, web development, and software engineering principles.',
            isOngoing: false
        }
    ];

    const experienceData = [
        {
            id: 1,
            position: 'Jr.Software Engineer intern',
            company: 'GrowExx',
            location: 'Ahmedabad, Gujarat',
            period: 'Jan 2026 - Present',
            description: 'Developed web applications using MERN stack, implemented responsive designs, and collaborated with cross-functional teams.',
            isOngoing: true
        },
        {
            id: 2,
            position: 'Full stack Developer Freelancer',
            company: 'Self-Employed',
            location: 'Remote',
            period: '2025 - Present',
            description: 'Building modern, responsive websites and applications for clients. Specialized in React, Node.js, and full-stack development.',
            isOngoing: true
        }
    ];

    const currentData = activeTab === 'education' ? educationData : experienceData;

    // Intersection Observer for scroll animations
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemId = entry.target.getAttribute('data-timeline-id');
                        setVisibleItems((prev) => new Set([...prev, itemId]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        // Reset visible items when tab changes
        setVisibleItems(new Set());

        // Observe all timeline items
        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item) => {
            if (observerRef.current) {
                observerRef.current.observe(item);
            }
        });

        return () => {
            items.forEach((item) => {
                if (observerRef.current) {
                    observerRef.current.unobserve(item);
                }
            });
        };
    }, [activeTab]);

    return (
        <div className="container mx-auto w-full py-12 px-4">
            {/* Section Title */}
            <div className="poppins-bold text-primary mb-8 tracking-tight text-3xl sm:text-5xl text-center">
                My Journey
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-12">
                <button
                    onClick={() => setActiveTab('education')}
                    className={`btn btn-sm md:btn-lg gap-2 transition-all duration-300 ${activeTab === 'education'
                        ? 'btn-primary'
                        : 'btn-outline btn-primary'
                        }`}
                >
                    <FaGraduationCap className="text-xl" />
                    Education
                </button>
                <button
                    onClick={() => setActiveTab('experience')}
                    className={`btn btn-sm md:btn-lg gap-2 transition-all duration-300 ${activeTab === 'experience'
                        ? 'btn-primary'
                        : 'btn-outline btn-primary'
                        }`}
                >
                    <FaBriefcase className="text-xl" />
                    Experience
                </button>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 max-md:left-8"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                    {currentData.map((item, index) => (
                        <div
                            key={item.id}
                            data-timeline-id={`${activeTab}-${item.id}`}
                            className={`timeline-item relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                } flex items-center max-md:flex-row ${visibleItems.has(`${activeTab}-${item.id}`)
                                    ? 'timeline-item-visible'
                                    : 'opacity-0'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-base-100 z-10 max-md:left-8 timeline-dot">
                                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                            </div>

                            {/* Content Card */}
                            <div
                                className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                                    } max-md:pl-16`}
                            >
                                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-base-300">
                                    <div className="card-body p-6">
                                        {/* Period Badge */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                            {item.isOngoing && (
                                                <span className="badge badge-success badge-outline w-fit">
                                                    Ongoing
                                                </span>
                                            )}
                                            <div className="flex items-center gap-2">
                                                <FaCalendar className="text-primary" />
                                                <span className="badge badge-primary badge-lg poppins-medium">
                                                    {item.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="card-title text-xl poppins-bold text-primary mb-1">
                                            {activeTab === 'education' ? item.degree : item.position}
                                        </h3>

                                        {/* Specialization/Company */}
                                        {activeTab === 'education' && item.specialization && (
                                            <p className="poppins-medium text-base opacity-90 mb-2">
                                                Specialization: {item.specialization}
                                            </p>
                                        )}

                                        {/* Institution/Company */}
                                        <p className="poppins-semibold text-lg mb-2">
                                            {activeTab === 'education' ? item.institution : item.company}
                                        </p>

                                        {/* Location */}
                                        <div className="flex items-center gap-2 mb-3 opacity-70">
                                            <FaMapMarkerAlt className="text-sm" />
                                            <span className="text-sm poppins-regular">{item.location}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="poppins-regular text-sm leading-relaxed opacity-80">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
