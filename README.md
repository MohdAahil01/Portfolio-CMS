# Portfolio CMS
A feature-rich portfolio website with a CMS to manage projects, built with React, Node.js, Express, and MongoDB.

## Features
- Display projects in a card layout with images
- Add, edit, and delete projects via a form
- Upload project images using Cloudinary
- About Me section with bio and profile picture
- Contact form using EmailJS
- Responsive design with animations (framer-motion)
- Runs locally with MongoDB (or MongoDB Atlas)

## Setup
1. Clone the repo: `git clone https://github.com/MohdAahil01/Portfolio-CMS.git`
2. Install backend dependencies: `npm install`
3. Install frontend dependencies: `cd client && npm install`
4. Set up `.env` in the root with `MONGO_URL`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
    - For local MongoDB: `MONGO_URL=mongodb://localhost:27017/portfolio-cms`
    - For MongoDB Atlas: `MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/portfolio-cms?retryWrites=true&w=majority`
5. Set up `client/.env` with `REACT_APP_EMAILJS_PUBLIC_KEY`
6. Run backend: `node app.js`
7. Run frontend: `cd client && npm start`

## Demo
This project runs locally. Follow the setup instructions to try it out!