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
    this.goToSection = this.goToSection.bind(this);
  }

  lockNav(lock){
    this.setState({
      locked : lock
    });
  }


  goToSection(section){
   let elem = document.querySelector(`.${section}`);
   let navHeight = document.querySelector(".waypoint-wrapper nav").offsetHeight;
   let scrollPos = elem.offsetTop - navHeight;
   

   window.scrollTo( 0, scrollPos );
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
            <li><Link to="/about" onClick={()=>{this.goToSection('about')}}>About</Link></li>
            <li><Link to="/skills" href="/skills" onClick={()=>{this.goToSection('skills')}}>Skills</Link></li>
            <li><Link to="/portfolio" onClick={()=>{this.goToSection('projects')}}>Portfolio</Link></li>
            <li className="icon"><a href="https://github.com/ericsolner" target="_blank" rel="noopener noreferrer"><ReactSVG path={GithubLogo} alt="Github Logo"/></a></li>
            <li className="icon"><a href="https://www.linkedin.com/in/ericsolner/" target="_blank" rel="noopener noreferrer"><ReactSVG path={LinkedInLogo} alt="LinkedIn Logo"/></a></li>
            <li className="icon"><a href="mailto:Eric.Solner@gmail.com"><ReactSVG path={EmailIcon} alt="Email Eric Solner Icon"/></a></li>
            <li className="icon"><a href="tel:18155295530"><ReactSVG path={PhoneIcon} alt="Call Eric Solner Icon"/></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
