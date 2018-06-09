import React, { Component } from "react";
import ReactSVG from 'react-svg';
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
    <div className="skill" onClick={this.onOpenModal}>
        <div className="skill-wrap">
           <ReactSVG path={require(`../../../../../assets/img/skills-icons/${this.props.data.image}`)}
        />
        <h3>{this.props.data.title}</h3>
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
        <ReactSVG path={require(`../../../../../assets/img/skills-icons/${this.props.data.image}`)}
        />
        <h3>{this.props.data.secondary}</h3>
        <p>{this.props.data.summary}</p>
        </Modal>
        </div>
    </div>
  )
 }
}

