// Knowledge base containing information about Vrajkumar Patel
// This data will be used to provide context to the AI chatbot
// Updated with comprehensive information from resume

export const knowledgeBase = {
    personal: {
        name: "Vrajkumar Patel",
        role: "MTech Student in ICT & Software Engineer",
        location: "Gandhinagar, Gujarat, India",
        email: "vrajpatel0231@gmail.com",
        alternateEmail: "31vrajpatel@gmail.com",
        portfolio: "https://vrajpatel.vercel.app",
        tagline: "Building scalable, serverless applications with modern cloud technologies"
    },

    education: {
        masters: {
            degree: "Master of Technology (MTech) in ICT",
            institution: "Dhirubhai Ambani University",
            location: "Gandhinagar, Gujarat",
            duration: "2024 - 2026",
            cpi: "8.39 / 10",
            status: "Currently Pursuing"
        },
        bachelors: {
            degree: "Bachelor of Engineering in Computer Engineering",
            institution: "Government Engineering College, Gandhinagar",
            location: "Gandhinagar, Gujarat",
            duration: "2020 - 2024",
            cgpa: "8.00 / 10",
            status: "Completed"
        },
        school: {
            level: "12th PCM",
            institution: "New Era High School",
            location: "Vadodara, Gujarat",
            year: "2019 - 2020",
            percentage: "83.23%"
        }
    },

    experience: {
        internships: [
            {
                company: "Slash Mark IT Startup",
                role: "Software Engineering Intern",
                duration: "Jan 2024 – April 2024",
                location: "Remote",
                type: "4-month internship",
                responsibilities: [
                    "Completed 4 months of internship focused on the MERN stack",
                    "Built full-stack projects and gained hands-on development experience",
                    "Learned and applied version control practices (Git/GitHub)",
                    "Worked on collaborative development and project management"
                ],
                technologies: ["MongoDB", "Express.js", "React", "Node.js", "Git", "GitHub"]
            }
        ],
        current: "Pursuing MTech in ICT at Dhirubhai Ambani University while building modern web applications"
    },

    skills: {
        languages: ["C++", "Java", "JavaScript", "Python", "HTML", "CSS"],
        developerTools: ["Git", "GitHub", "Postman", "Docker", "AWS"],
        frameworks: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
        libraries: ["NumPy", "Pandas"],
        databases: ["PostgreSQL", "MySQL", "MongoDB"],
        cloud: ["AWS Lambda", "AWS API Gateway", "AWS Elastic Beanstalk", "AWS S3"],
        softSkills: ["Problem-Solving", "Team Collaboration", "Leadership", "Communication"],
        coursework: ["Data Structures and Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOPS"],
        areasOfInterest: ["Backend Development", "Cloud Computing", "System Design", "Competitive Programming"]
    },

    projects: [
        {
            name: "Serverless Projects API",
            description: "Built a serverless API with AWS Lambda + API Gateway to serve portfolio data, replacing a slower Render backend",
            technologies: ["AWS Lambda", "API Gateway", "Caching", "REST API"],
            features: [
                "Implemented caching with Cache-Control/Last-Modified headers",
                "Achieved near-instant responses",
                "Zero cold starts and no idle costs",
                "Scalable serverless architecture"
            ],
            demo: "https://vrajpatel.vercel.app",
            github: "https://github.com/vrajkmrpatel/react-portfolio"
        },
        {
            name: "Food-Delivery Website",
            description: "Designed and implemented a mobile-responsive food-delivery platform",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Postman"],
            features: [
                "User authentication system",
                "Menu browsing functionality",
                "Shopping cart implementation",
                "RESTful APIs with Express.js",
                "MongoDB for scalable backend data management",
                "Mobile-responsive design"
            ],
            demo: "Available on request",
            github: "https://github.com/vrajkmrpatel"
        },
        {
            name: "Task Manager App",
            description: "Developed a task management system enabling users to add, update, and delete tasks",
            technologies: ["Node.js", "Express", "MongoDB", "AWS Elastic Beanstalk"],
            features: [
                "RESTful APIs in Express.js",
                "MongoDB Atlas for secure cloud-based data storage",
                "Deployed on AWS Elastic Beanstalk",
                "Reliable and scalable hosting at zero cost"
            ],
            github: "https://github.com/vrajkmrpatel"
        },
        {
            name: "Access Pattern-Aware Join Reordering Algorithm",
            description: "Research project studying how join order affects cache performance",
            technologies: ["Python", "PostgreSQL", "Perf"],
            guide: "Prof. Minal Bhise",
            features: [
                "Lightweight framework to evaluate memory access patterns",
                "Used perf counters for performance analysis",
                "Generated and executed all 8 join permutations of TPC-H Query 5",
                "Logged runtime and cache misses to identify pattern-performance correlations"
            ],
            type: "Research Project"
        },
        {
            name: "React Portfolio (Current)",
            description: "Modern portfolio with serverless architecture, AI chatbot, and responsive design",
            technologies: ["React", "Vite", "TailwindCSS", "AWS Lambda", "Groq API", "Firebase"],
            features: [
                "Serverless API with AWS Lambda",
                "AI Chatbot powered by Groq",
                "PDF Resume Viewer",
                "3 Beautiful Themes (Light, Dark, Forest)",
                "SEO Optimized",
                "Fully Responsive"
            ],
            demo: "https://vrajpatel.vercel.app",
            github: "https://github.com/vrajkmrpatel/react-portfolio"
        }
    ],

    achievements: [
        {
            title: "GATE 2024 - Computer Science",
            description: "Secured AIR 6409 among 1,23,967 candidates",
            year: 2024,
            category: "Competitive Exam"
        },
        {
            title: "Codechef START197 Contest",
            description: "Achieved Global rank of 31",
            year: 2024,
            category: "Competitive Programming"
        },
        {
            title: "LeetCode Achievement",
            description: "450+ problems solved with 1432 rating",
            platform: "LeetCode",
            category: "Competitive Programming",
            link: "https://leetcode.com/vrajkmrpatel"
        }
    ],

    competitiveProgramming: {
        leetcode: {
            problemsSolved: "450+",
            rating: 1432,
            profile: "https://leetcode.com/vrajkmrpatel"
        },
        codechef: {
            bestRank: "Global Rank 31 in START197",
            profile: "https://www.codechef.com/users/vrajkmrpatel"
        },
        geeksforgeeks: {
            profile: "https://auth.geeksforgeeks.org/user/vrajkmrpatel"
        }
    },

    social: {
        github: "https://github.com/vrajkmrpatel",
        linkedin: "https://www.linkedin.com/in/sdevrajkumarpatel/",
        twitter: "https://twitter.com/ilovecompiler",
        leetcode: "https://leetcode.com/vrajkmrpatel",
        codechef: "https://www.codechef.com/users/vrajkmrpatel",
        geeksforgeeks: "https://auth.geeksforgeeks.org/user/vrajkmrpatel",
        portfolio: "https://vrajpatel.vercel.app"
    },

    contact: {
        email: "vrajpatel0231@gmail.com",
        alternateEmail: "31vrajpatel@gmail.com",
        form: "Available on the Contact page",
        availability: "Open to opportunities, internships, and collaborations"
    }
};

// Enhanced system prompt for the AI chatbot
export const systemPrompt = `You are an AI assistant for Vrajkumar Patel's portfolio website. Your role is to help visitors learn about Vraj's background, skills, projects, and experience in a friendly and professional manner.

Key Information About Vrajkumar Patel:

EDUCATION:
- Currently pursuing MTech in ICT at Dhirubhai Ambani University (CPI: 8.39/10)
- BE in Computer Engineering from GEC Gandhinagar (CGPA: 8.00/10)

EXPERIENCE:
- Software Engineering Intern at Slash Mark IT Startup (Jan-April 2024)
- 4 months of MERN stack development experience
- Strong version control and collaborative development skills

TECHNICAL SKILLS:
- Languages: C++, Java, JavaScript, Python, HTML, CSS
- Frameworks: React.js, Node.js, Express.js, Tailwind CSS
- Databases: PostgreSQL, MySQL, MongoDB
- Cloud: AWS Lambda, API Gateway, Elastic Beanstalk
- Tools: Git, GitHub, Postman, Docker

NOTABLE PROJECTS:
1. Serverless Projects API - AWS Lambda + API Gateway with caching
2. Food-Delivery Website - Full-stack MERN application
3. Task Manager App - Deployed on AWS Elastic Beanstalk
4. Access Pattern-Aware Join Algorithm - Research project with PostgreSQL
5. React Portfolio - Current site with AI chatbot and serverless architecture

ACHIEVEMENTS:
- GATE 2024 CSE: AIR 6409 among 1,23,967 candidates
- Codechef: Global Rank 31 in START197 contest
- LeetCode: 450+ problems solved, 1432 rating

COMPETITIVE PROGRAMMING:
- Active on LeetCode, Codechef, and GeeksforGeeks
- Strong problem-solving skills
- Focus on Data Structures and Algorithms

AREAS OF INTEREST:
- Backend Development
- Cloud Computing
- System Design
- Competitive Programming

CONTACT:
- Email: vrajpatel0231@gmail.com
- LinkedIn: linkedin.com/in/sdevrajkumarpatel
- GitHub: github.com/vrajkmrpatel

Guidelines for Responses:
1. Be friendly, professional, and conversational
2. Keep responses concise (2-3 sentences max)
3. Use emojis sparingly for friendliness (1-2 per response)
4. Highlight specific achievements and numbers when relevant
5. If asked about projects, mention technologies and key features
6. If asked about competitive programming, mention LeetCode rating and Codechef rank
7. If asked about education, mention both MTech (current) and BE
8. If you don't know something specific, be honest and suggest checking the relevant section
9. Encourage visitors to explore the portfolio and reach out

Example Responses:
- Education: "Vraj is currently pursuing his MTech in ICT at DA-IICT (CPI 8.39) and completed his BE in Computer Engineering from GEC Gandhinagar with 8.00 CGPA. He has a strong academic background! 🎓"
- Skills: "Vraj is proficient in C++, Java, JavaScript, Python, and cloud technologies like AWS Lambda! He specializes in the MERN stack and cloud technologies like AWS Lambda. He's also skilled in system design and competitive programming. 🚀"
- Projects: "Check out his Serverless Projects API built with AWS Lambda achieving near-instant responses, or the Food-Delivery Website using the MERN stack! He's also worked on research projects involving PostgreSQL optimization. 💻"
- Achievements: "Vraj secured AIR 6409 in GATE 2024 CSE, achieved Global Rank 31 in Codechef's START197, and solved 450+ LeetCode problems with a 1432 rating! Impressive competitive programming skills! 🏆"
- Experience: "Vraj completed a 4-month Software Engineering Internship at Slash Mark IT Startup, focusing on MERN stack development and collaborative Git workflows. He's now pursuing his MTech while building amazing projects! �"

Remember: Keep it brief, friendly, and informative!`;

// Welcome message
export const welcomeMessage = "Hi! 👋 I'm Vraj's AI assistant. Ask me anything about his education, skills, projects, achievements, or experience!";

// Enhanced suggested questions
export const suggestedQuestions = [
    "What are Vraj's achievements?",
    "Tell me about his projects",
    "What is his educational background?",
    "How can I contact him?"
];
