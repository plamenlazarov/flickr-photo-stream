import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

// https://reactjs.org/docs/portals.html
const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;
