import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SideBar from "../SideBar";
import LogoLight from "../../svgs/LogoLight";
import Logo from "../../svgs/Logo";
import LoginLogo from "../../icons/login.png";
import Compose from "../../icons/compose.png";
import Person from "../../svgs/Person";
import Create from "../../svgs/Create";

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
    <NavWrapper className="flex justify-center h-20 sm:h-1 items-center bg-white w-screen z-10 sm:bg-opacity-0">
      <div>
        <div className="h-14 flex" id="App">
          <div className="mt-5 pl-20 hidden sm:block">
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

      <div className="mt-2 hidden mr-20 sm:flex justify-center items-center">
        <div className="flex justify-center items-center p-1 text-white text-xs sm:p-2 m-1 sm:m-2">
          {/* <img className="w-4 mr-1" src={Compose} alt="compose icon" /> */}
          <div className="text-white">
            <Create />
          </div>
          <p className="ml-1">Write a review</p>
        </div>
        <div className="flex justify-center items-center p-1 text-white text-xs sm:p-2 m-1 sm:m-2">
          {/* <img className="w-4 mr-1" src={LoginLogo} alt="login icon" /> */}
          <Person />
          <p>Login</p>
        </div>
        <div className="p-1 border border-white rounded-full text-white text-xs sm:p-2 m-1 sm:m-2">
          Sign Up
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
