import React, { Component } from "react";
import ReactDOM from "react-dom";
import PhotoStream from "./PhotoStream";

class App extends Component {
  render() {
    return (
      <div>
        <PhotoStream />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
