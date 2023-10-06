import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./CreateProject.css"; // Import your CSS stylesheet

const CreateProject = () => {
  // Define state variables to store project information
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTags, setProjectTags] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new project object with the entered information
    const newProject = {
      name: projectName,
      description: projectDescription,
      tags: projectTags.split(","), // Assuming tags are comma-separated
      // Add more fields as needed
    };

    // You can then send this project data to your backend or perform any other desired actions
    console.log("New Project Data:", newProject);

    // Clear the form after submission
    setProjectName("");
    setProjectDescription("");
    setProjectTags("");
  };

  return (
    <>
      <Navbar />
      <div className="create-project-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription">Project Description:</label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectTags">Project Tags (comma-separated):</label>
            <input
              type="text"
              id="projectTags"
              value={projectTags}
              onChange={(e) => setProjectTags(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Create Project
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
