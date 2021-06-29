import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SideBar from "../SideBar";

const NavWrapper = styled.div`
  grid-template-columns: 1fr;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const mobileNavWrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  gap: 5px;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Nav = () => {
  return (
    <NavWrapper className="border border-black flex justify-center items-center bg-white w-full z-10 bg-opacity-75">
      <div>
        <div className="border border-black h-14 flex" id="App">
          <Link to="/">
            <h1 className="border border-black text-4xl ml-5 p-1 sm:p-3 font-bold">
              Plug&Play
            </h1>
          </Link>
          <div className="sm:hidden">
            <SideBar
              className=""
              pageWrapId={"page-wrap"}
              outerContainerId={"App"}
            />
          </div>
        </div>
      </div>

      <div className="mr-5 hidden sm:block">
        <Link to="/about" className="p-1 sm:p-2 m-1 sm:m-2">
          Write a review
        </Link>
        <Link to="/projects" className="p-1 sm:p-2 m-1 sm:m-2">
          Login
        </Link>
        <Link to="/contact" className="p-1 sm:p-2 m-1 sm:m-2">
          Sign Up
        </Link>
      </div>
    </NavWrapper>
  );
};

export default Nav;
