import React, { Component } from "react";
import { Waypoint } from 'react-waypoint';


class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      ready : false,
      isPaneOpen: false
    };
 
    this.showProject = this.showProject.bind(this);
  }
 
  componentDidMount() {
         
     }
 
  showProject(){
     this.setState({
       ready : true
     });
  }
 
  openDetails(){
    alert('go ahead')
  }

  render() {
    return (
      <div ref={ref => this.el = ref} className={`project Project ${this.state.ready ? 'loaded' : '' }`} >
        <div className="project-wrap">
          <div className="project-flex-1">
            <img alt="" src={require(`../../../../../assets/img/portfolio-icons/${this.props.data.image}`)} />
          </div>
          <div className="project-flex-2">
            <h3>{this.props.data.title}</h3>
            <h5 className="portfolio-icon-description">{this.props.data.description}</h5>
            <p className="summary-paragraph">{this.props.data.summary}</p>
            <a className="project-button" href={this.props.data.url} target="_blank">{this.props.data.button}</a>
          </div>
        </div>
        <div className="position-trigger">
          <Waypoint
            onEnter={this.showProject}
          />
        </div>
      </div>
    )
  }
}

export default Project;