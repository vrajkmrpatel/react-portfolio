import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// DEFAULT: Smooth fade + scale + slide animation
const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: {
            duration: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

// ALTERNATIVE 1: Slide from right (uncomment to use)
// const pageVariants = {
//     initial: {
//         opacity: 0,
//         x: 100
//     },
//     animate: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 0.4,
//             ease: [0.6, -0.05, 0.01, 0.99]
//         }
//     },
//     exit: {
//         opacity: 0,
//         x: -100,
//         transition: {
//             duration: 0.3,
//             ease: [0.6, -0.05, 0.01, 0.99]
//         }
//     }
// };

// ALTERNATIVE 2: Simple fade (uncomment to use)
// const pageVariants = {
//     initial: {
//         opacity: 0
//     },
//     animate: {
//         opacity: 1,
//         transition: {
//             duration: 0.5,
//             ease: 'easeInOut'
//         }
//     },
//     exit: {
//         opacity: 0,
//         transition: {
//             duration: 0.3,
//             ease: 'easeInOut'
//         }
//     }
// };

const PageTransition = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;

