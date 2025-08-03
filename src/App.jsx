import React, { useState, useEffect } from "react";
import { ConfigProvider, Layout } from "antd";

import HelpMe from "./components/HelpMe";
import Trivia from "./components/Trivia";

const { Footer, Content } = Layout;

const contentStyle = {};
const footerStyle = {};
const layoutStyle = {};

const App = () => {
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch("/items.json").then(response=>{
      return response.json()
    }).then((jsonResponse)=>{
      setItems(jsonResponse)
      setItem(jsonResponse[0])
      console.log(jsonResponse)
    })
  }, [])

    if (!item) {
      return
    }

  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <div className="App">
        <Layout style={layoutStyle}>
          <Content style={contentStyle}>
            {/* <NavBar /> */}
            <Trivia item={item} />
            <HelpMe item={item} />
          </Content>
          <Footer style={footerStyle}>Examon</Footer>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default App;
