import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

// https://reactjs.org/docs/portals.html
const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
    private el = document.createElement("div");

  public componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  public componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  public render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
