import React, { Component } from 'react';

import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
