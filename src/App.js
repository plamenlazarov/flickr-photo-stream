import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <p>Hello!</p>;
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
