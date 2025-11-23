# 🚀 Modern React Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)

**A high-performance, accessible, and beautifully designed portfolio built with modern web technologies**

[Live Demo](https://vrajpatel.vercel.app) • [Report Bug](https://github.com/vrajkmrpatel/react-portfolio/issues) • [Request Feature](https://github.com/vrajkmrpatel/react-portfolio/issues)

</div>

---

## ✨ Highlights

🎨 **3 Beautiful Themes** - Light, Dark, and Forest (default)  
⚡ **Lightning Fast** - Code splitting, lazy loading, and intelligent caching  
♿ **Fully Accessible** - WCAG compliant with ARIA labels and semantic HTML  
📱 **Responsive Design** - Pixel-perfect on mobile, tablet, and desktop  
🔒 **Secure** - Environment variables and best security practices  
🎯 **SEO Optimized** - Meta tags, Open Graph, and JSON-LD structured data  
📄 **PDF Resume Viewer** - Interactive resume display with download option  
🚀 **Serverless Architecture** - AWS Lambda for scalable project data delivery

---

## 🖼️ Preview

<div align="center">
  <img src="https://github.com/vrajkmrpatel/react-portfolio/blob/main/src/assets/serverless-api.png" alt="Serverless Architecture" width="800"/>
</div>

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Next-generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library
- **React Router** - Client-side routing
- **React Icons** - Icon library

### Backend & Services
- **AWS Lambda** - Serverless API for project data
- **Firebase** - Real-time database and analytics
- **Web3Forms** - Contact form handling

### Performance & Optimization
- **Code Splitting** - Lazy loading for optimal bundle size
- **API Caching** - 5-minute cache with localStorage
- **Image Optimization** - Lazy loading with proper dimensions
- **Skeleton Loaders** - Better perceived performance

---

## 🚀 Features

### 🎨 Theme System
- **3 Carefully Curated Themes**: Light, Dark, and Forest
- **Persistent Selection**: Theme saved in localStorage
- **Smooth Transitions**: Seamless theme switching
- **Responsive Dropdown**: Works perfectly on all devices

### ⚡ Performance Optimizations
- **Code Splitting**: Route-based lazy loading reduces initial bundle size
- **Smart Caching**: API responses cached for 5 minutes
- **Lazy Images**: Images load only when needed
- **Skeleton Loaders**: Visual feedback during data loading
- **Optimized Builds**: Minification and tree-shaking

### ♿ Accessibility Features
- **ARIA Labels**: All interactive elements properly labeled
- **Semantic HTML**: Proper use of `<main>`, `<section>`, `<footer>`
- **Keyboard Navigation**: Full keyboard accessibility
- **Alt Text**: Descriptive alt text for all images
- **Color Contrast**: WCAG AA compliant

### 🔍 SEO Optimization
- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Rich social media previews
- **Twitter Cards**: Beautiful Twitter sharing
- **JSON-LD**: Structured data for search engines
- **Semantic URLs**: Clean, descriptive routing

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: Tablet and desktop layouts
- **Touch-Friendly**: Large tap targets on mobile
- **Adaptive UI**: Components adjust to screen size

### 📄 PDF Resume Viewer
- **Interactive Viewer**: Native PDF rendering in modal
- **Download Option**: One-click resume download
- **Share Button**: Direct link to Google Drive
- **Responsive Modal**: Adapts to all screen sizes

---

## 🏗️ Architecture

### Serverless API (AWS Lambda)

```python
# lambda_function.py - Serverless project data endpoint

import json
from datetime import datetime

def lambda_handler(event, context):
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "max-age=86400, public",
            "Last-Modified": datetime.utcnow().strftime("%a, %d %b %Y %H:%M:%S GMT")
        },
        "body": json.dumps([
            {
                "id": 1,
                "title": "Project Name",
                "description": "Project description",
                "img": "project-image.jpg",
                "demo": "https://demo-url.com",
                "github": "https://github.com/username/repo"
            }
            # ... more projects
        ])
    }
```

### Caching Layer

```javascript
// src/utils/cache.js - Smart caching system

export const getCachedData = (key) => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
    
    if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem(key);
        return null;
    }
    
    return data;
};
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- Firebase account (for analytics)
- AWS account (for Lambda API)

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/vrajkmrpatel/react-portfolio.git
cd react-portfolio

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Add your environment variables
# Edit .env and add:
# VITE_WEB3FORMS_KEY=your_web3forms_api_key

# 5. Start development server
npm run dev

# 6. Build for production
npm run build

# 7. Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Web3Forms API Key (for contact form)
VITE_WEB3FORMS_KEY=your_api_key_here

# Optional: Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_PROJECT_ID=your_project_id
```

---

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── resume.pdf              # Your resume PDF
│   └── vite.svg
├── src/
│   ├── assets/                 # Images and static files
│   ├── components/
│   │   ├── About.jsx          # About section
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Footer.jsx         # Footer with social links
│   │   ├── Hero.jsx           # Hero section with resume modal
│   │   ├── Navbar.jsx         # Navigation with theme selector
│   │   ├── Project.jsx        # Projects showcase
│   │   ├── ProjectSkeleton.jsx # Loading skeleton
│   │   └── ProfileViews.jsx   # Visitor counter
│   ├── utils/
│   │   └── cache.js           # Caching utility
│   ├── App.jsx                # Main app with routing
│   ├── App.css
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── .env                       # Environment variables (gitignored)
├── .gitignore
├── index.html                 # HTML template with SEO meta tags
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md
```

---

## 🎯 Performance Metrics

| Metric | Score | Details |
|--------|-------|---------|
| **First Contentful Paint** | < 1.5s | Fast initial render |
| **Largest Contentful Paint** | < 2.5s | Quick main content load |
| **Time to Interactive** | < 3.0s | Rapid interactivity |
| **Cumulative Layout Shift** | < 0.1 | Stable visual layout |
| **Bundle Size** | ~150KB | Optimized with code splitting |
| **Lighthouse Score** | 95+ | Excellent overall performance |

---

## � Security Best Practices

✅ **Environment Variables** - Sensitive keys stored securely  
✅ **HTTPS Only** - Enforced secure connections  
✅ **CORS Configuration** - Proper cross-origin settings  
✅ **Input Validation** - Form inputs sanitized  
✅ **Dependency Audits** - Regular security updates  
✅ **No Exposed Secrets** - `.env` in `.gitignore`

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
netlify deploy --prod
```

### Firebase Hosting

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

---

## 🎨 Customization Guide

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#your-color",
          secondary: "#your-color",
        },
      },
    ],
  },
};
```

### Add New Projects

Update your AWS Lambda function or modify the API endpoint in `Project.jsx`.

### Modify Resume

Replace `public/resume.pdf` with your resume and update the Google Drive link in `Hero.jsx`.

---

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing library
- **Vite Team** - For the blazing-fast build tool
- **TailwindCSS** - For the utility-first CSS framework
- **DaisyUI** - For beautiful components
- **Open Source Community** - For inspiration and resources

---

## 📧 Contact

**Vrajkumar Patel**

- Portfolio: [vrajpatel.dev](https://vrajpatel.vercel.app)
- LinkedIn: [@sdevrajkumarpatel](https://www.linkedin.com/in/sdevrajkumarpatel/)
- GitHub: [@vrajkmrpatel](https://github.com/vrajkmrpatel)
- Twitter: [@ilovecompiler](https://twitter.com/ilovecompiler)
- Email: 31vrajpatel@gmail.com

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

**Built with ❤️ by Vrajkumar Patel**

</div>
