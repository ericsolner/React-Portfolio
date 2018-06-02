import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Waypoint from 'react-waypoint';
import ReactSVG from 'react-svg';
import Logo from '../../assets/img/eric-solner-logo.svg';
import GithubLogo from '../../assets/img/github.svg';
import LinkedInLogo from '../../assets/img/linkedin.svg';
import PhoneIcon from '../../assets/img/phone.svg';
import EmailIcon from '../../assets/img/email.svg';

class Nav extends Component {

  constructor(){
    super();
    this.state = {
      locked :false
    }

    this.lockNav = this.lockNav.bind(this);
  }

  lockNav(lock){
    this.setState({
      locked : lock
    });
  }

  render() {
    return (
      <div className={"waypoint-wrapper " + (this.state.locked ? "locked" : "")}>
        <div className="position-trigger">
          <Waypoint
            onEnter={()=>{this.lockNav(false)}}
            onLeave={()=>{this.lockNav(true)}}
          />
        </div>
        <nav className={this.state.locked ? "locked" : ""}>
          
          <div className="logo"><Link to="/"><ReactSVG path={Logo} alt="Eric Solner Logo"/></Link></div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li className="icon"><a href="https://github.com/ericsolner" target="_blank"><ReactSVG path={GithubLogo} alt="Github Logo"/></a></li>
            <li className="icon"><a href="https://www.linkedin.com/in/ericsolner/" target="_blank"><ReactSVG path={LinkedInLogo} alt="LinkedIn Logo"/></a></li>
            <li className="icon"><a href="mailto:Eric.Solner@Yahoo.com" target="_blank"><ReactSVG path={EmailIcon} alt="Email Eric Solner Icon"/></a></li>
            <li className="icon"><a href="tel:18155295530" target="_blank"><ReactSVG path={PhoneIcon} alt="Call Eric Solner Icon"/></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
