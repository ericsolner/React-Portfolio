import React, { Component } from "react";
import Project from "./project";
import ProjectsData from "../../../../assets/data/projects.json";

class Projects extends Component {


 render() {
  return (
    <section className="page projects">
    <h1 className="portfolio-title">Portfolio</h1>
    <div className="project-wrapper">
      {ProjectsData.map((project, index)=>{
        return <Project key={index} data={project}/>
      })}
    </div>
    </section>
   
  )
 }
}

export default Projects;