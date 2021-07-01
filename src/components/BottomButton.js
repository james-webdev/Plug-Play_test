import React from "react";
import Search from "../svgs/Search";

const BottomButton = () => {
  return (
    <div className="z-30 mt-1">
      <div className="flex justify-center items-center bg-white h-32">
        <button className="w-full ml-3 mr-3 sm:ml-24 sm:mr-24">
          <div className="flex justify-center items-center text-white rounded-full text-2xl py-6 sm:py-4 px-6 buttonColor p-4">
            <Search />
            <p className="ml-2">Find a Specialist</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BottomButton;
