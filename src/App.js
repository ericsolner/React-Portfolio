import React, { Component } from 'react';

import Main from './components/main';
import Footer from './components/footer';
import {withRouter} from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    console.log(this.props.location.pathname);
  }
  render() {
    return (
      <div className="App">
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
