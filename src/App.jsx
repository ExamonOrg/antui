import React, { useState } from "react";
import { ConfigProvider, Layout } from "antd";

import HelpMe from "./components/HelpMe";
import NavBar from "./components/NavBar";
import Trivia from "./components/Trivia";

const { Header, Footer, Content } = Layout;

const headerStyle = {};
const contentStyle = {};
const footerStyle = {};
const layoutStyle = {};

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <div className="App">
        <Layout style={layoutStyle}>
          <Content style={contentStyle}>
            <NavBar />
            <Trivia />
            <HelpMe />
          </Content>
          <Footer style={footerStyle}>Examon</Footer>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default App;
