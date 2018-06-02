import React, { Component } from "react";
import Project from "./project";
import ProjectsData from "../../../../assets/data/projects.json";

class Projects extends Component {

 constructor(){
  super();
 }

 render() {
  return (
    <section className="page projects">
      {ProjectsData.map((project, index)=>{
        return <Project key={index} data={project}/>
      })}
    </section>
  )
 }
}

export default Projects;