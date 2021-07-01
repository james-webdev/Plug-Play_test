import * as React from "react";
import Layout from "../components/layout/Layout";
import Main from "../components/Main";
import BottomButton from "../components/BottomButton";

const IndexPage = () => {
  return (
    <>
      <div className="bgimage -mb-24 sm:-mb-5 z-0 relative">
        <div className="absolute">
          <Layout>
            <div className="mt-64 sm:mt-48">
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
