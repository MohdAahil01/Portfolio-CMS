import React, { useState } from "react";
import axios from "axios";

function AddProject({ setProjects }) {
  const [formData, setFormData] = useState({ title: "", description: "", url: "", image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("url", formData.url);
    if (formData.image) data.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:8080/api/projects", data);
      setProjects(prev => [...prev, res.data]);
      setFormData({ title: "", description: "", url: "", image: null });
    } catch (err) {
      console.error("Error adding project:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <h3>Add Project</h3>
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
      <button type="submit" className="btn btn-success">Add</button>
    </form>
  );
}
export default AddProject;