import React from "react";
import Nav from "../layout/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <Nav />
      </div>
      {children}
    </>
  );
};

export default Layout;
