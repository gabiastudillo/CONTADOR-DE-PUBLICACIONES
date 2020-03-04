import React, { Component } from 'react';
import Template from './views/Template';

class App extends Component {
  //MAKE AJAX CALLS HERE
  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
  }
  render() {
    return (
      <Template />
    );
  }
}

export default App;
