import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const LoadingScreen = ({ isLoading, onLoadComplete }) => {
    const [phase, setPhase] = useState("counting");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const [displayCount, setDisplayCount] = useState(0);
    const words = ['Researcher', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];
    const [wordIndex, setWordIndex] = useState(0);
    const containerRef = useRef(null);

    // Animate counter
    useEffect(() => {
        const controls = animate(count, 100, {
            duration: 2.8,
            ease: [0.25, 0.1, 0.25, 1],
            onUpdate: (v) => setDisplayCount(Math.round(v)),
        });
        return controls.stop;
    }, [count]);

    // Cycle words
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((i) => (i + 1) % words.length);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    // Phase transitions
    useEffect(() => {
        const t1 = setTimeout(() => setPhase("reveal"), 3000);
        const t2 = setTimeout(() => setPhase("exit"), 3600);
        const t3 = setTimeout(onLoadComplete, 4200);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onLoadComplete]);

    return (
        <motion.div
            ref={containerRef}
            className="fixed inset-0 z-50 overflow-hidden"
            key="splash"
        >
            {/* Two-panel curtain */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-base-100 to-base-200 flex"
                animate={phase === "exit" ? { opacity: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                {/* Left curtain */}
                <motion.div
                    className="w-1/2 h-full bg-gradient-to-br from-primary/20 to-accent/20 origin-left"
                    animate={phase === "reveal" || phase === "exit" ? { scaleX: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                />
                {/* Right curtain */}
                <motion.div
                    className="w-1/2 h-full bg-gradient-to-br from-accent/20 to-primary/20 origin-right"
                    animate={phase === "reveal" || phase === "exit" ? { scaleX: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
                />
            </motion.div>

            {/* Content layer */}
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-base-100 to-base-200"
                animate={phase === "reveal" || phase === "exit" ? { opacity: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                {/* Animated line top */}
                <motion.div
                    className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.8, ease: [0.25, 0.1, 0.25, 1] }}
                />

                {/* Main percentage counter */}
                <div className="relative flex items-baseline gap-1">
                    <motion.span
                        className="text-[12rem] sm:text-[16rem] font-black text-primary leading-none tracking-tighter select-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        {displayCount}
                    </motion.span>
                    <motion.span
                        className="text-4xl sm:text-6xl font-light text-accent select-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        %
                    </motion.span>
                </div>

                {/* Rotating word */}
                <div className="h-8 overflow-hidden mt-4">
                    <motion.div
                        key={wordIndex}
                        className="text-lg sm:text-xl tracking-[0.3em] uppercase text-accent font-light"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {words[wordIndex]}
                    </motion.div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-16 left-8 right-8 sm:left-16 sm:right-16">
                    <div className="flex justify-between items-center mb-3">
                        <motion.span
                            className="text-xs tracking-[0.2em] uppercase text-base-content/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Loading experience
                        </motion.span>
                        <motion.span
                            className="text-xs tracking-[0.2em] uppercase text-base-content/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Please wait
                        </motion.span>
                    </div>
                    <div className="w-full h-[1px] bg-base-300 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.8, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                    </div>
                </div>

                {/* Corner markers */}
                <motion.div
                    className="absolute top-8 left-8 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {/* <span className="text-xs tracking-[0.15em] uppercase text-base-content/60">Portfolio</span> */}
                </motion.div>

                <motion.div
                    className="absolute top-8 right-8 text-right"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {/* <span className="text-xs tracking-[0.15em] uppercase text-base-content/60">© 2026</span> */}
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-primary"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
