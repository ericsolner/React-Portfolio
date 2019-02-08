import React from "react";
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

export default class CustomAnimation extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
 render() {
  return (
    <div className="project" >
    	<div className="project-wrap" onClick={() => {this.setState({ isPaneOpen: !this.state.isOpenPanel })}}>
	          <img alt="" src={require(`../../../../../assets/img/portfolio-icons/${this.props.data.image}`)}/>
	        <h3>{this.props.data.title}</h3>
	        <h5 className="portfolio-icon-description">{this.props.data.description}</h5>
        </div>

        <SlidingPane
                isOpen={ this.state.isPaneOpen }
                width='800px'
                onRequestClose={()=> this.setState({ isPaneOpen: false })}>
	        <img alt="" className="project-modal-img" src={require(`../../../../../assets/img/portfolio-icons/${this.props.data.modalimage}`)}/>
	        <h3 className="project-title">{this.props.data.title}</h3>
	        <p className="summary-paragraph">{this.props.data.summary}</p>
	        <a className="project-button" href={this.props.data.url} target="_blank">{this.props.data.button}</a>
        </SlidingPane>
    </div>
  )
 }
}

