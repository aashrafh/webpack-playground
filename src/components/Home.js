import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <p>Hello World from React and Webpack! hot reloaded :)</p>
      <p>
        <Link to="/dynamic">Click here to navigate to the dynamic page</Link>
      </p>
    </Layout>
  );
};

export default Home;
