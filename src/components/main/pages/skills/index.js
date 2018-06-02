import React, { Component } from "react";
import Skill from "./skill";
import SkillsData from "../../../../assets/data/skills.json";

class Skills extends Component {

 constructor(){
  super();
 }

 render() {
  return (
    <section className="page skills">
      {SkillsData.map((skill, index)=>{
        return <Skill key={index} data={skill}/>
      })}
    </section>
  )
 }
}

export default Skills;