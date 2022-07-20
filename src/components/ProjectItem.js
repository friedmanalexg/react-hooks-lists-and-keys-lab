import React from "react";

function ProjectItem({ name, about, technologies }) {
    
  let techCards = technologies.map((technologiesObj) => {
    return <span className="project-list"  key={technologiesObj} >{name = technologiesObj}</span>
    })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techCards}
      </div>
    </div>
  );
}

export default ProjectItem;


//doesn't work, lots of errors to read :(