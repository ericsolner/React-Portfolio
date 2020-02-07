import React, { Component } from "react";
import Project from "./project";
import ProjectsData from "../../../../assets/data/projects.json";
import RouteScrollHandler from '../../../utilities/route-scroll-handler'

class Projects extends Component {
 
  constructor(){
    super();
    this.state = {}
  }
  componentDidMount(){
    this.setState({
      elem : this.refs.projects
    })
  }

 render() {
  return (
    <section className="page projects" ref="projects">
    {/* {this.state.elem ? <RouteScrollHandler route="portfolio" elem={this.state.elem}/> : "" } */}
    
    <h1 className="portfolio-title">Portfolio</h1>
    <div className="project-wrapper">
    {this.state.elem ? <RouteScrollHandler route="portfolio" elem={this.state.elem}/> : "" }
      {ProjectsData.map((project, index)=>{
        return <Project key={index} data={project}/>
      })}
    </div>
    </section>
   
  )
 }
}

export default Projects;