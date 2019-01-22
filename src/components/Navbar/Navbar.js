import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Navbar = ({ onSubmit, onChange }) => {
  return (
    <header>
      <div>PHOTO GALLERY</div>
      <div className="search">
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onChange} />
          <button>Search</button>
        </form>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Navbar;
