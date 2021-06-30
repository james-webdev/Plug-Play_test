import React from "react";
import { stack as Menu } from "react-burger-menu";

export default (props) => {
  return (
    // Pass on our props
    <Menu right {...props}>
      <a className="menu-item p-3" href="/">
        Specialist or Practice
      </a>

      <a className="menu-item p-3" href="/about">
        in Location
      </a>

      <a className="menu-item p-3" href="/services">
        Via any insurer
      </a>
    </Menu>
  );
};
