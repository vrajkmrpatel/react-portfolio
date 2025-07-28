# 🚀 React Portfolio 

A modern, high-performance portfolio built with React and Firebase — featuring serverless APIs, caching, accessibility, and polished animations.

## Serverless API 

<img src="https://github.com/vrajkmrpatel/react-portfolio/blob/main/src/assets/serverless-api.png"></img>



## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Serverless API (AWS Lambda)
- **Database**: Firebase Realtime Database
- **Hosting**: Vercel, Netlify, Firebase Hosting
- **Animation**: `react-countup` for visitor engagement
- **Caching**: Custom cache layer to optimize API/database calls

---
## Sample AWS Lambda function

```python
# lambda_function.py

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
               # objects of projects
               {..},
               {..}
               
         ])
      }

   ```
---

## ✨ Core Features

### 🔗 Serverless API for Projects
- Dynamically serve project data through serverless endpoints.
- Affordable and scalable alternative to hosted backend services.
- Lower cold-start latency and deployment overhead.

### ⚡ Caching Layer
- Implements local/edge caching to **minimize duplicate API/database requests**.
- Faster reloads and reduced Firebase read costs via in-memory or storage cache.

### 🚀 Performance Optimization
- Lazy-loaded React components to reduce initial JavaScript bundle size.
- Modern image formats (WebP/AVIF) with `loading="lazy"`.
- Bundle minification, tree-shaking, and code-splitting for faster load times.

### ♿ Accessibility & Responsive Design
- Semantic HTML (e.g. `<main>`, `<section>`, `<header>`) for better screen reader support.
- Keyboard accessibility, focus states, and sufficient color contrast.
- Mobile-first layout with CSS Flexbox/Grid and responsive media queries.

---

## 🚀 Setup & Usage

1. **Clone the repo**  
   ```bash
   git clone https://github.com/vrajkmrpatel/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Configure Firebase**  
   Add your Firebase credentials using `.env.local` or environment variables as per your setup.

4. **Run locally**  
   ```bash
   npm start
   ```

5. **Deploy**  
   Build and deploy via Vercel, Netlify, Firebase Hosting, or your preferred platform.

---

## 🧠 Future Enhancements

- Add CI pipeline with **Lighthouse audits** for performance, accessibility, SEO.
- Integrate a **GraphQL API** with caching and offline support.
- Introduce skeleton loaders or progressive image loading (e.g., blur-up effect).
- Implement offline-first support with service workers or IndexedDB.

---

## 📄 License & Credits

Licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

Inspired by open-source React portfolios and templates such as those from Ubaimutl and others.

---

**Built with ❤️ by Vraj Patel**  
