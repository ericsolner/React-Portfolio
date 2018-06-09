import React, { Component } from "react";
import Skill from "./skill";
import SkillsData from "../../../../assets/data/skills.json";

class Skills extends Component {

 render() {
  return (
    <section className="page skills">
    <h1 className="skills-title">Skills</h1>
      <div className="skill-wrapper">
        {SkillsData.map((skill, index)=>{
          return <Skill key={index} data={skill}/>
        })}
      </div>
    </section>
  )
 }
}

export default Skills;