import React from "react";
import { slide as Menu } from "react-burger-menu";
import Pulse from "../icons/pulse.png";
import Location from "../icons/location.png";
import Paper from "../icons/paper.png";
import Right from "../svgs/Right";

export default (props) => {
  return (
    <Menu right {...props}>
      <a className="menu-item p-4" href="/">
        <div className="flex items-center">
          <img className="w-7 mr-2" src={Pulse} alt="pulse image" />
          <p className="font-bold">Specialist</p>
          <p>&nbsp;or&nbsp;</p>
          <p className="font-bold">Practice</p>
          <div className="ml-3">
            <Right />
          </div>
        </div>

        <hr className="mt-4" />
      </a>

      <a className="menu-item p-3" href="/about">
        <div className="flex items-center mr-20">
          <img className="w-7 mr-2" src={Location} alt="location image" />
          <p>in&nbsp;</p>
          <p className="font-bold">Location</p>
          <div className="ml-5">
            <Right />
          </div>
        </div>
        <hr className="mt-4" />
      </a>

      <a className="menu-item p-3" href="/services">
        <div className="flex items-center">
          <img className="w-7 mr-2" src={Paper} alt="location image" />
          <p>Via any&nbsp;</p>
          <p className="font-bold">insurer</p>
          <div className="ml-5">
            <Right />
          </div>
        </div>
        <hr className="mt-4" />
      </a>
      <div className="flexImp justify-around items-center w-full mt-60">
        <div>
          <button>
            <div className="border border-grey-300 flex justify-center items-center rounded-full text-xl py-4 px-10 p-2">
              <p>Clear</p>
            </div>
          </button>
        </div>
        <div>
          <button>
            <div className="flex justify-center items-center text-white rounded-full text-xl py-4 px-10 buttonColor p-2">
              <p>Apply</p>
            </div>
          </button>
        </div>
      </div>
    </Menu>
  );
};
