import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SideBar from "../SideBar";
import LogoLight from "../../svgs/LogoLight";
import Logo from "../../svgs/Logo";

const NavWrapper = styled.div`
  grid-template-columns: 1fr;
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Nav = () => {
  return (
    <NavWrapper className="flex justify-center h-20 sm:h-1 items-center bg-white w-full z-10 sm:bg-opacity-0">
      <div>
        <div className="h-14 flex" id="App">
          <div className="mt-8 pl-20 hidden sm:block">
            <Link to="/">
              <LogoLight />
            </Link>
          </div>
          <div className="pt-4 w-40 pl-5 sm:hidden">
          <Link to="/">
            <Logo />
          </Link>
          </div>
          <div className="sm:hidden">
            <SideBar
              className=""
              pageWrapId={"page-wrap"}
              outerContainerId={"App"}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 hidden mr-20 sm:block">
        <Link to="/about" className="p-1  text-white sm:p-2 m-1 sm:m-2">
          Write a review
        </Link>
        <Link to="/projects" className="p-1 text-white sm:p-2 m-1 sm:m-2">
          Login
        </Link>
        <Link to="/contact" className="p-1 text-white sm:p-2 m-1 sm:m-2">
          Sign Up
        </Link>
      </div>
    </NavWrapper>
  );
};

export default Nav;
