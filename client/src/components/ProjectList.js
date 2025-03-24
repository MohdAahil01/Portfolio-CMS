import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectList({ projects, onDelete }) {
  const validProjects = projects.filter(project => project.title);

  return (
    <div className="row">
      {validProjects.map(project => (
        <motion.div
          className="col-md-4 mb-4"
          key={project._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card project-card">
            {project.image && (
              <img src={project.image} className="card-img-top" alt={project.title} />
            )}
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.url} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                Visit
              </a>
              <Link to={`/edit/${project._id}`} className="btn btn-warning me-2">Edit</Link>
              <button onClick={() => onDelete(project._id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
export default ProjectList;