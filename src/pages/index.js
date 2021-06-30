import * as React from "react";
import Layout from "../components/layout/Layout";
import Main from "../components/Main";
import BottomButton from "../components/BottomButton";

const IndexPage = () => {
  return (
    <>
      <div className="bgimage relative">
        <div className="absolute">
          <Layout>
            <div className="">
              <Main />
            </div>
          </Layout>
        </div>
      </div>
      <div>
        <BottomButton />
      </div>
    </>
  );
};

export default IndexPage;
