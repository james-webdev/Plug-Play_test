import React from "react";

const BottomButton = () => {
  return (
    <div className="z-30 mt-1">
      <div className="flex justify-center items-center bg-white h-32">
        <button className="w-full ml-3 mr-3 sm:ml-24 sm:mr-24">
          <p className="text-white rounded-full text-2xl py-6 sm:py-4 px-6 buttonColor p-4">
            Find a Specialist
          </p>
        </button>
      </div>
    </div>
  );
};

export default BottomButton;
