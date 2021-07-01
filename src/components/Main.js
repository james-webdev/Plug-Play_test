import React from "react";
import DownArrow from "../svgs/Down";

const Main = () => {
  return (
    <div className="ml-5 mr-4 sm:mr-0 sm:ml-20">
      <div className="text-white text-5xl 2xl:text-6xl mt-40 extralight minWidth max-w-2xl">
        <p>Managing your health has never been easier.</p>
      </div>
      <div className="flex items-center text-white text-xs mt-8">
        <DownArrow />
        <div className="extraSmall flex ml-2">
          <p className="font-bold">Search, Compare</p>
          <p>&nbsp;and&nbsp;</p>
          <p className="font-bold">Book</p>
          <p>&nbsp;a healthcare specialist.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
