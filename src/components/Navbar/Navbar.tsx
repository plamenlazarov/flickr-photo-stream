import React from "react";
import "./style.scss";

interface NavbarProps {
  onChange: (e: any) => void,
  onSubmit: (e: any) => void
}

const Navbar: React.SFC<NavbarProps> = (props) => {
  return (
    <header>
      <div>PHOTO GALLERY</div>
      <div className="search">
        <form onSubmit={props.onSubmit}>
          <input type="text" onChange={props.onChange} />
          <button>Search</button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
