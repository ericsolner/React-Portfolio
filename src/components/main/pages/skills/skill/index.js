import React, { Component } from "react";
import ReactSVG from 'react-svg';
import { Waypoint } from 'react-waypoint';


class Skill extends Component {
 constructor(props){
   super(props);
   this.state = {
     ready : false,
     isPaneOpen: false
   };

   this.showSkill = this.showSkill.bind(this);
 }

 componentDidMount() {
        
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
    <div ref={ref => this.el = ref} className={`skill ${this.state.ready ? 'loaded' : '' }`}>
        <div className="skill-wrap" onClick={() => {this.setState({ isPaneOpen: !this.state.isOpenPanel })}} >
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