import React, { Component } from 'react';
//import {Route, Switch } from 'react-router-dom';
import Nav from '../nav';
import Footer from '../footer';
import Projects from './pages/projects';
import Skills from './pages/skills';
import About from './pages/about';

class Main extends Component {

  componentWillAppear(){} 

  render() {
    return (
      <main>
        <About/>
        <Nav/>
        <Skills/>
        <Projects/>
      </main>
    );
  }
}

export default Main;
