import React, { Component } from 'react';
//import {Route, Switch } from 'react-router-dom';
import Nav from '../nav';
import Footer from '../footer';
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

        <Footer/>
      </main>
    );
  }
}

export default Main;
