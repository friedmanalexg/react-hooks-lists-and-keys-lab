import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const lizaProjects = projects.map((projObj) => {
    return <ProjectItem key={projObj.id} name={projObj.name} technologies={projObj.technologies} about={projObj.about}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{lizaProjects}</div>
    </div>
  );
}

export default ProjectList;
