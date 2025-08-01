# MERN Blog

A full-stack blog platform built with the MERN stack (MongoDB, Express, React, Node.js).

---


## Features
- User authentication (Sign Up, Sign In, OAuth)
- Create, update, and delete blog posts
- Commenting system
- User dashboard with admin and private routes
- Responsive and modern UI with Tailwind CSS
- State management with Redux
- Theming support (dark/light mode)

- Admin dashboard for managing users, posts, and comments
- Like and reply to comments
- Search and filter posts
- Firebase integration for image uploads
- Persistent login with JWT and cookies

## Project Structure

```
mern-blog/
├── api/                        # Backend (Node.js, Express)
│   ├── controllers/            # Route controllers
│   │   ├── auth.controller.js
│   │   ├── comment.controller.js
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   ├── models/                 # Mongoose models
│   │   ├── comment.model.js
│   │   ├── post.model.js
│   │   └── user.model.js
│   ├── routes/                 # API routes
│   │   ├── auth.route.js
│   │   ├── comment.route.js
│   │   ├── post.route.js
│   │   └── user.route.js
│   ├── utils/                  # Utility functions and middleware
│   │   ├── error.js
│   │   └── verifyUser.js
│   └── index.js                # Server entry point
├── client/                     # Frontend (React, Vite)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── CallToAction.jsx
│   │   │   ├── Comment.jsx
│   │   │   ├── CommentSection.jsx
│   │   │   ├── DashboardComp.jsx
│   │   │   ├── DashComments.jsx
│   │   │   ├── DashPosts.jsx
│   │   │   ├── DashProfile.jsx
│   │   │   ├── DashSidebar.jsx
│   │   │   ├── DashUsers.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── OAuth.jsx
│   │   │   ├── OnlyAdminPrivateRoute.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── pages/              # Main pages
│   │   │   ├── About.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── PostPage.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── UpdatePost.jsx
│   │   ├── redux/              # Redux state management
│   │   │   ├── store.js
│   │   │   ├── theme/
│   │   │   │   └── themeSlice.js
│   │   │   └── user/
│   │   │       └── userSlice.js
│   │   ├── firebase.js         # Firebase config
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   ├── index.html              # HTML template
│   ├── package.json            # Frontend dependencies
│   ├── postcss.config.js       # PostCSS config
│   ├── tailwind.config.js      # Tailwind CSS config
│   └── vite.config.js          # Vite config
├── .env                        # Environment variables
├── package.json                # Project metadata and scripts
└── README.md                   # Project documentation
```

## Tech Stack
- **Frontend:** React, Vite, Redux Toolkit, Tailwind CSS, Flowbite React, React Router, Firebase
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, cookie-parser, dotenv
- **Other:** ESLint, PostCSS, Vite Proxy, React Icons

## API Endpoints

### Auth
- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/signin` — Login
- `POST /api/auth/google` — Google OAuth login

### User
- `GET /api/user/getusers` — Get all users (admin)
- `GET /api/user/:userId` — Get user by ID
- `PUT /api/user/update/:userId` — Update user
- `DELETE /api/user/delete/:userId` — Delete user
- `POST /api/user/signout` — Sign out

### Post
- `POST /api/post/create` — Create post (admin)
- `GET /api/post/getposts` — Get posts (with filters)
- `PUT /api/post/updatepost/:postId/:userId` — Update post (admin)
- `DELETE /api/post/deletepost/:postId/:userId` — Delete post (admin)

### Comment
- `POST /api/comment/create` — Add comment
- `GET /api/comment/getPostComments/:postId` — Get comments for a post
- `PUT /api/comment/likeComment/:commentId` — Like a comment
- `PUT /api/comment/editComment/:commentId` — Edit comment
- `DELETE /api/comment/deleteComment/:commentId` — Delete comment
- `GET /api/comment/getcomments` — Get all comments (admin)

## Main Components
- **Header/Footer:** Navigation and branding
- **Dashboard:** Admin/user dashboard with stats and management
- **PostCard:** Displays blog post summary
- **CommentSection/Comment:** Add, view, and like comments
- **Auth (SignIn/SignUp/OAuth):** User authentication
- **PrivateRoute/OnlyAdminPrivateRoute:** Route protection
- **ThemeProvider:** Dark/light mode support
- **Projects/About:** Informational pages

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MongoDB database (cloud or local)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mern-blog.git
   cd mern-blog
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Install frontend dependencies:
   ```sh
   cd client
   npm install
   cd ..
   ```
4. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:
   ```env
   MONGO=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. (Optional) Set up Firebase for image uploads in `client/.env`:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

### Running the App
- Start the backend server:
  ```sh
  npm run dev
  ```
- Start the frontend development server:
  ```sh
  cd client
  npm run dev
  ```

## Deployment
- Build frontend: `cd client && npm run build`
- Serve static files from Express backend (already configured)
- Deploy to platforms like Vercel, Netlify (frontend) and Render, Heroku (backend)

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

## Security
- Never commit sensitive data (like real `.env` values)
- Use HTTPS in production
- JWT and cookies are used for secure authentication
- Passwords are hashed with bcryptjs

## License
This project is licensed under the ISC License.

---

## Credits
- Inspired by modern blog platforms
- Built by Anuj and contributors
- Uses open source libraries and tools

---

