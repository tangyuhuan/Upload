import React, { Component } from "react";
import ReactDOM from "react-dom";

class Overlay extends Component {
  constructor(props) {
    super(props);
    /*根节点下创建一个div节点*/
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <span className="overlay-close" onClick={this.props.onClose}>×</span>
        {this.props.children}
      </div>,
      this.container
    );
  }
}


export default Overlay;

