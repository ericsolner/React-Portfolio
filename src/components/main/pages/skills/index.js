import React, { Component } from "react";
import Skill from "./skill";
import SkillsData from "../../../../assets/data/skills.json";
import Waypoint from 'react-waypoint';
import RouteScrollHandler from '../../../utilities/route-scroll-handler'

class Skills extends Component {

  constructor(){
      super();
      this.state = {}
  }
  componentDidMount(){
      this.setState({
          elem : this.refs.skills
      })
  }

  

  render() {
    return (
      <section className="page skills" ref="skills">
        <div className="skill-wrapper">
        {this.state.elem ? <RouteScrollHandler route="skills" elem={this.state.elem}/> : "" }
          {SkillsData.map((skill, index)=>{
            return <Skill key={index} data={skill}/>
          })}
        </div>
      </section>
    )
  }
}
  
export default Skills;