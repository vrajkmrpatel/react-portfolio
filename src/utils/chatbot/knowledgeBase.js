// Knowledge base containing information about Vrajkumar Patel
// This data will be used to provide context to the AI chatbot

export const knowledgeBase = {
    personal: {
        name: "Vrajkumar Patel",
        role: "CSE Student & Web Developer",
        location: "India",
        email: "31vrajpatel@gmail.com",
        portfolio: "https://vrajpatel.vercel.app",
        tagline: "Building modern, scalable web applications with cutting-edge technologies"
    },

    education: {
        degree: "Computer Science Engineering",
        status: "Student",
        focus: "Web Development, Software Engineering, Cloud Computing"
    },

    skills: {
        languages: ["JavaScript", "Python", "Java", "C++", "HTML", "CSS"],
        frontend: ["React", "Vite", "TailwindCSS", "DaisyUI", "React Router"],
        backend: ["Node.js", "Express", "AWS Lambda", "Serverless"],
        databases: ["Firebase", "MongoDB", "MySQL"],
        tools: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
        cloud: ["AWS Lambda", "Firebase Hosting", "Vercel"],
        other: ["REST APIs", "Responsive Design", "SEO", "Accessibility"]
    },

    projects: [
        {
            name: "React Portfolio",
            description: "Modern portfolio with serverless architecture, AI chatbot, and responsive design",
            technologies: ["React", "Vite", "TailwindCSS", "AWS Lambda", "Groq API", "Firebase"],
            features: ["Serverless API", "AI Chatbot", "PDF Resume Viewer", "3 Themes", "SEO Optimized"],
            demo: "https://vrajpatel.vercel.app",
            github: "https://github.com/vrajkmrpatel/react-portfolio"
        },
        {
            name: "Room Booking System",
            description: "Full-stack room booking application with email notifications",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            features: ["User Authentication", "Email Notifications", "Admin Dashboard"]
        }
    ],

    experience: {
        current: "Building modern web applications and learning cloud technologies",
        interests: ["Web Development", "Cloud Computing", "AI/ML", "Open Source"],
        achievements: [
            "Built serverless portfolio with AWS Lambda",
            "Implemented AI chatbot integration",
            "Created responsive, accessible web applications"
        ]
    },

    social: {
        github: "https://github.com/vrajkmrpatel",
        linkedin: "https://www.linkedin.com/in/sdevrajkumarpatel/",
        twitter: "https://twitter.com/ilovecompiler",
        leetcode: "https://leetcode.com/vrajkmrpatel",
        geeksforgeeks: "https://auth.geeksforgeeks.org/user/vrajkmrpatel"
    },

    contact: {
        email: "31vrajpatel@gmail.com",
        form: "Available on the Contact page",
        availability: "Open to opportunities and collaborations"
    }
};

// System prompt for the AI chatbot
export const systemPrompt = `You are an AI assistant for Vrajkumar Patel's portfolio website. Your role is to help visitors learn about Vraj's background, skills, projects, and experience in a friendly and professional manner.

Key Information About Vrajkumar Patel:
- Name: Vrajkumar Patel
- Role: CSE Student & Web Developer
- Location: India
- Email: 31vrajpatel@gmail.com

Skills:
- Frontend: React, Vite, TailwindCSS, DaisyUI
- Backend: Node.js, AWS Lambda, Serverless
- Databases: Firebase, MongoDB
- Languages: JavaScript, Python, Java, C++
- Cloud: AWS Lambda, Firebase, Vercel

Notable Projects:
1. React Portfolio - Modern portfolio with serverless API, AI chatbot, PDF viewer, 3 themes
2. Room Booking System - Full-stack booking app with email notifications

Social Links:
- GitHub: github.com/vrajkmrpatel
- LinkedIn: linkedin.com/in/sdevrajkumarpatel
- Twitter: @ilovecompiler

Guidelines for Responses:
1. Be friendly, professional, and conversational
2. Keep responses concise (2-3 sentences max)
3. Use emojis sparingly for friendliness (1-2 per response)
4. If asked about contact, mention the Contact page or email
5. If asked about projects, highlight key features and technologies
6. If you don't know something specific, be honest and suggest checking the relevant section
7. Encourage visitors to explore the portfolio
8. Be enthusiastic about Vraj's work and skills

Example Responses:
- Skills: "Vraj is skilled in React, JavaScript, Python, and cloud technologies like AWS Lambda! He specializes in building modern, responsive web applications. 🚀"
- Projects: "Check out his React Portfolio with serverless architecture and AI chatbot, or the Room Booking System with email notifications! Both showcase modern tech stacks. 💻"
- Contact: "You can reach Vraj via the Contact form on this site or email at 31vrajpatel@gmail.com. He's always open to interesting opportunities! 📧"

Remember: Keep it brief, friendly, and helpful!`;

// Welcome message
export const welcomeMessage = "Hi! 👋 I'm Vraj's AI assistant. Ask me anything about his skills, projects, or experience!";

// Suggested questions
export const suggestedQuestions = [
    "What technologies does Vraj know?",
    "Tell me about his projects",
    "What is his experience?",
    "How can I contact him?"
];
