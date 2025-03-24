import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectList from "./components/ProjectList";
import AddProject from "./components/AddProject";
import EditProject from "./components/EditProject";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/projects/${id}`);
    setProjects(prev => prev.filter(p => p._id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="hero-section text-center py-5">
          <h1>Welcome to My Portfolio</h1>
          <p>Showcasing my projects and skills</p>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <ProjectList projects={projects} onDelete={handleDelete} />
                <AddProject setProjects={setProjects} />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edit/:id" element={<EditProject setProjects={setProjects} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;