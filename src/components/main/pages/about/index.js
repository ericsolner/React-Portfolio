import React, { Component } from "react";
import ReactSVG from 'react-svg';
import RouteScrollHandler from '../../../utilities/route-scroll-handler';
import ProfilePhoto from '../../../../assets/img/eric-solner.jpg';
import GithubLogo from '../../../../assets/img/github.svg';
import LinkedInLogo from '../../../../assets/img/linkedin.svg';

class About extends Component {
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        this.setState({
            elem : this.refs.about
        })
    }

 render() {

   
  return (
    <section className="about" ref="about">
        {this.state.elem ? <RouteScrollHandler route="" elem={this.state.elem}/> : "" }
    
        <div className="content">
            <div className="flex-wrap">
                <div>
                    <img src={ProfilePhoto} alt="Web Developer Eric Solner"/>
                </div>
                <div>
                    <h1>Hi, I'm <strong>Eric Solner</strong>.</h1>
                    <p>I'm a passionate web developer from Chicago who specializes in front-end user interfaces.</p>
                    <div className="contact-info">
                        <ul className="native-list">
                            <li><h4>Let's Talk!</h4></li>
                            <li><a href="mailto:Eric.Solner@Yahoo.com">Eric.Solner@Yahoo.com</a></li>
                            <li><a href="tel:8155295530">(815) 529-5530</a></li>
                        </ul>
                        <ul>
                            <li><a href="https://github.com/ericsolner" target="_blank" rel="noopener noreferrer"><ReactSVG path={GithubLogo} alt="Github Logo"/></a></li>
                            <li><a href="https://www.linkedin.com/in/ericsolner/" target="_blank" rel="noopener noreferrer"><ReactSVG path={LinkedInLogo} alt="LinkedIn Logo"/></a></li>
                            
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