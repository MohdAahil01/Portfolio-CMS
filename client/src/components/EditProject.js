import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProject({ setProjects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", description: "", url: "", image: null });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/projects`)
      .then(res => {
        const project = res.data.find(p => p._id === id);
        if (project) {
          setFormData({
            title: project.title,
            description: project.description,
            url: project.url,
            image: null
          });
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("url", formData.url);
    if (formData.image) data.append("image", formData.image);

    try {
      const res = await axios.put(`http://localhost:8080/api/projects/${id}`, data);
      setProjects(prev => prev.map(p => (p._id === id ? res.data : p)));
      navigate("/");
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <h3>Edit Project</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Description"
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="URL"
          value={formData.url}
          onChange={e => setFormData({ ...formData, url: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          onChange={e => setFormData({ ...formData, image: e.target.files[0] })}
        />
      </div>
      <button type="submit" className="btn btn-success">Update</button>
    </form>
  );
}
export default EditProject;