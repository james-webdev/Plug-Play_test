import * as React from "react";
import Layout from "../components/layout/Layout";
import Main from "../components/Main";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className="ml-10 mr-10">
          <Main />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
