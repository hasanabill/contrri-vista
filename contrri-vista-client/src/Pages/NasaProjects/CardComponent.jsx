import React from "react";
import "./NasaProjects.css";

function CardComponent({
  project_name,
  project_url_external,
  geographic_scope,
  fields_of_science,
  project_status,
  keywords,
}) {
  return (
    <>
      <article className="card-container">
        <a href={project_url_external} target="_blank" className="card-link">
          {project_name}
        </a>
        <p>
          <span className="level">Status: </span> {project_status}{" "}
        </p>
        <p>
          <span className="level">Geographic Scope: </span> {geographic_scope}{" "}
        </p>
        <p>
          <span className="level">Fields of Science: </span> {fields_of_science}{" "}
        </p>
        <p className="key-words">{keywords}</p>
      </article>
    </>
  );
}

export default CardComponent;
