import React from "react";
import './style.scss';

const Navbar = ({onSubmit, onChange}) => {
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

}

export default Navbar;
