import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { userContext } from '../Context/UserName'
import { AuthContext } from '../Context/AuthContext'

export default function Home() {
    const {setToken} = useContext(AuthContext)
    const navigate = useNavigate()

    const {userName} = useContext(userContext)
    const [products , setProducts] = useState([])
    const setLogOut = ()=>{
        localStorage.removeItem("token");
localStorage.removeItem("userName");
setToken("")
navigate('/signin')
    }
 const courses = [
  { id: 1, title: "React Basics", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/react-native.png" },
  { id: 2, title: "JavaScript Mastery", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/javascript.png" },
  { id: 3, title: "CSS for Beginners", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/css3.png" },
  { id: 4, title: "HTML Fundamentals", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/html-5.png" },
  { id: 5, title: "Advanced React Hooks", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/react-native.png" },
  { id: 6, title: "TypeScript for React", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/typescript.png" },
  { id: 7, title: "Node.js Essentials", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/nodejs.png" },
  { id: 8, title: "Express.js API Building", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/express.png" },
  { id: 9, title: "MongoDB Basics", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/mongodb.png" },
  { id: 10, title: "Next.js Introduction", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/nextjs.png" },
  { id: 11, title: "Python for Web Devs", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/python.png" },
  { id: 12, title: "C# Fundamentals", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/c-sharp-logo.png" },
  { id: 13, title: "Unity Game Basics", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/unity.png" },
  { id: 14, title: "Git & GitHub Crash Course", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/github.png" },
  { id: 15, title: "SQL & Databases", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/mysql-logo.png" },
  { id: 16, title: "Data Structures in JS", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/javascript.png" },
  { id: 17, title: "Algorithms for Beginners", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/source-code.png" },
  { id: 18, title: "UI/UX Design Basics", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/figma.png" },
  { id: 19, title: "Responsive Web Design", video: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://img.icons8.com/color/480/web-design.png" },
  { id: 20, title: "APIs and JSON", video: "https://www.w3schools.com/html/movie.mp4", thumbnail: "https://img.icons8.com/color/480/api.png" },
];
       const [selectedCourse, setSelectedCourse] = useState(null);
    

  return (
  <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            EduLearn 📚
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item" style={{"display" : "flex" , "align-items" : "center"}} onClick={()=> setLogOut()}><p style={{"color" : "#fff" , "margin" : "0" , "cursor" : "pointer"}}>LogOut</p></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4 fw-bold">🎓 Available Courses</h2>

        {/* Courses Grid */}
        {!selectedCourse && (
          <div className="row justify-content-center">
            {courses.map((course) => (
              <div
                key={course.id}
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                onClick={() => setSelectedCourse(course)}
                style={{ cursor: "pointer" }}
              >
                <div className="card course-card border-0 shadow-sm h-100">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="card-img-top course-thumb"
                  />
                  <div className="card-body text-center">
                    <h6 className="fw-bold">{course.title}</h6>
                    <p className="text-muted small mb-0">Click to view video</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Course */}
        {selectedCourse && (
          <div className="text-center mt-4">
            <h4 className="fw-bold mb-3">{selectedCourse.title}</h4>
            <video
              controls
              width="80%"
              className="rounded shadow-lg mt-3"
              src={selectedCourse.video}
            ></video>
            <div className="mt-4">
              <button
                className="btn btn-primary me-2 px-4"
            onClick={()=> navigate("Quiz")}
              >
                Go to Quiz
              </button>
              <button
                className="btn btn-outline-secondary px-4"
                onClick={() => setSelectedCourse(null)}
              >
                Back to Courses
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <small>© {new Date().getFullYear()} EduLearn. All rights reserved.</small>
      </footer>

      {/* Custom CSS */}
      <style>{`
        body {
          background-color: #f8f9fa;
        }
        .course-card {
          border-radius: 12px;
          transition: all 0.3s ease;
          background: white;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
        }
        .course-thumb {
          height: 160px;
          object-fit: contain;
          padding: 15px;
          background: #f9f9f9;
          border-bottom: 1px solid #eee;
        }
        video {
          border: 2px solid #ddd;
        }
      `}</style>
    </>
    
    
  )
    }