import React, { Component } from "react";
import ReactSVG from 'react-svg';

class Skill extends Component {

 render() {
  return (
    <div className="skill">
           <ReactSVG path={require(`../../../../../assets/img/skills-icons/${this.props.data.image}`)}
        />
        <h3>{this.props.data.title}</h3>
    </div>
  )
 }
}

export default Skill;