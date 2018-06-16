import React, { Component } from "react";
import ReactSVG from 'react-svg';
import Waypoint from 'react-waypoint';

class Skill extends Component {
 constructor(){
   super();
   this.state = {
     ready : false
   };

   this.showSkill = this.showSkill.bind(this);
 }

 showSkill(){
    this.setState({
      ready : true
    });
 }

 openDetails(){
   alert('go ahead')
 }

 render() {
  return (
    <div onClick={this.openDetails} className={`skill ${this.state.ready ? 'loaded' : '' }`}>
        <div className="skill-wrap">
           <ReactSVG path={require(`../../../../../assets/img/skills-icons/${this.props.data.image}`)}
        />
        <h3>{this.props.data.title}</h3>
        </div>

        <div className="position-trigger">
          <Waypoint
            onEnter={this.showSkill}
          />
        </div>
    </div>
  )
 }
}

export default Skill;