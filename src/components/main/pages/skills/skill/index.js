import React, { Component } from "react";
import ReactSVG from 'react-svg';
import Waypoint from 'react-waypoint';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

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
        Modal.setAppElement(this.el);
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

        <SlidingPane
                isOpen={ this.state.isPaneOpen }
                
                width='500px'
                onRequestClose={ () => this.setState({ isPaneOpen: false }) }>
                <ReactSVG className="SlidingPane-svg" path={require(`../../../../../assets/img/skills-icons/${this.props.data.image}`)}
        />
        <h2 className="skill-modal-title">{this.props.data.title}</h2>
        <h3 className="skill-modal-secondary">{this.props.data.secondary}</h3>
        <p className="skill-modal-summary">{this.props.data.summary}</p>
      </SlidingPane>
    </div>
  )
 }
}

export default Skill;