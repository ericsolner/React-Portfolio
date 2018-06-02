import React, { Component } from "react";
import ReactSVG from 'react-svg';
import ProfilePhoto from '../../../../assets/img/eric-solner.jpg';
import GithubLogo from '../../../../assets/img/github.svg';
import LinkedInLogo from '../../../../assets/img/linkedin.svg';
import PhoneIcon from '../../../../assets/img/phone.svg';
import EmailIcon from '../../../../assets/img/email.svg';

class About extends Component {

 render() {
  return (
    <section className="about">
        <div className="content">
            <div className="flex-wrap">
                <div>
                    <img src={ProfilePhoto} alt="A Photo of Web Developer Eric Solner"/>
                </div>
                <div>
                    <h1>Hi, I'm <strong>Eric Solner</strong>.</h1>
                    <p>I'm a passionate web developer from Chicago who specializes in front-end user interfaces. I am recent graduate of the Northwestern University Coding Bootcamp and am looking to join a team!</p>
                    <div className="contact-info">
                        <ul className="native-list">
                            <li><h4>Let's Talk!</h4></li>
                            <li><a href="mailto:Eric.Solner@Yahoo.com">Eric.Solner@Yahoo.com</a></li>
                            <li><a href="tel:8155295530">(815) 529-5530</a></li>
                        </ul>
                        <ul>
                            <li><a href="https://github.com/ericsolner" target="_blank"><ReactSVG path={GithubLogo} alt="Github Logo"/></a></li>
                            <li><a href="https://www.linkedin.com/in/ericsolner/" target="_blank"><ReactSVG path={LinkedInLogo} alt="LinkedIn Logo"/></a></li>
                            
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
 }
}

export default About;