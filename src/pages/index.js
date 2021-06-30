import * as React from "react";
import Layout from "../components/layout/Layout";
import Main from "../components/Main";
import BottomButton from "../components/BottomButton";

const IndexPage = () => {
  return (
    <>
      {/* <div className="">
        <Layout>
           <div className="border border-black ml-10 mainHeight mr-10">
            <Main />
          </div> 
        </Layout>
         <div className="mt-40 flex justify-center items-center bg-white w-full h-40 smallScreens">
        <button className="w-2/3">
          <p className="text-white rounded-full py-3 px-6 w-full buttonColor p-4">
            Find a specialist
          </p>
        </button>
      </div> 
      </div> */}
       <div className="bgimage -mb-24 sm:-mb-5 z-0 relative">
        <div className="absolute">
          <Layout>
            <div className="">
              <Main />
            </div>
          </Layout>
        </div>
      </div> 
       <div className="z-50">
        <BottomButton />
      </div>   
    </>
  );
};

export default IndexPage;
