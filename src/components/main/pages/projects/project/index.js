import React, { Component } from "react";
import Modal from 'react-responsive-modal';

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
 	    const { open } = this.state;
  return (
    <div className="project" onClick={this.onOpenModal}>
    	<div className="project-wrap">
        <img src={this.props.data.image} alt=""/>
        <h3>{this.props.data.title}</h3>
        <h5 className="portfolio-icon-description">{this.props.data.description}</h5>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000}
        >
        <img src={this.props.data.image} alt=""/>
        <h3>{this.props.data.title}</h3>
        <p>{this.props.data.summary}</p>
        </Modal>

        </div>
    </div>
  )
 }
}

