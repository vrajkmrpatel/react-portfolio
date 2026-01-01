import React, { useState, useEffect } from "react";

const LoadingScreen = ({ isLoading, onLoadComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 90) {
                        return prev + Math.random() * 30;
                    }
                    return prev;
                });
            }, 300);

            return () => clearInterval(interval);
        }
    }, [isLoading]);

    useEffect(() => {
        if (!isLoading && progress > 0) {
            setProgress(100);
            const timer = setTimeout(() => {
                onLoadComplete();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading, onLoadComplete]);

    if (progress === 100 && !isLoading) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 bg-gradient-to-br from-base-100 to-base-200 flex flex-col items-center justify-center z-[9999] transition-opacity duration-500 ${
                progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            {/* Animated Logo/Text */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
                    Vraj Patel
                </h1>
                <p className="text-lg text-base-content/70">Loading Portfolio</p>
            </div>

            {/* Animated Spinner */}
            <div className="mb-8">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>

            {/* Progress Bar */}
            <div className="w-64 md:w-80 h-1 bg-base-300 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Progress Text */}
            <p className="text-sm text-base-content/60 mt-4">{Math.floor(progress)}%</p>

            {/* Animated dots */}
            <div className="flex gap-2 mt-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></span>
            </div>
        </div>
    );
};

export default LoadingScreen;
