import React from "react";
import { Icon, Header } from "semantic-ui-react";
import Layout from "./Layout";

const NotFound = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="big" />
      <strong>404: Page not found!</strong>
    </Layout>
  );
};

export default NotFound;
