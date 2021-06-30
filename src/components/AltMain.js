import React from "react";
import BgImage from "../images/background.png";

const AlternMain = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        {" "}
        <div className="absolute -z-1">
          <img
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%"
            }}
            src={BgImage}
            alt=""
          />
        </div>
        <div className="z-10">
          <div>
            <h1 className="text-2xl z-10 font-bold font-sans mt-5">
              Text goes here
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlternMain;
