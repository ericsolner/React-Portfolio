import React, { Component } from "react";
import ReactSVG from 'react-svg';

class Skill extends Component {

 render() {
  return (
    <div className="skill">
        <div className="skill-wrap">
           <ReactSVG path={require(`../../../../../assets/img/skills-icons/${this.props.data.image}`)}
        />
        <h3>{this.props.data.title}</h3>
        </div>
    </div>
  )
 }
}

export default Skill;