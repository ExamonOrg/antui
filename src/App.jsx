import React, { useState, useEffect } from "react";
import { ConfigProvider, Layout, Button, Space } from "antd";

import HelpMe from "./components/HelpMe";
import Trivia from "./components/Trivia";

const { Footer, Content } = Layout;

const contentStyle = {};
const footerStyle = {};
const layoutStyle = {};

const App = () => {
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/items.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setItems(jsonResponse);
        setItem(jsonResponse[index]);
      });
  }, []);

  if (!item) {
    return <div>Loading...</div>;
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
            <Space>
              <Button
                type="primary"
                disabled={index === 0}
                onClick={() => {
                  const newIndex = index - 1;
                  setIndex(newIndex);
                  setItem(items[newIndex]);
                }}
              >
                Previous
              </Button>
              <Button
                type="primary"
                disabled={index >= items.length - 1}
                onClick={() => {
                  const newIndex = index + 1;
                  setIndex(newIndex);
                  setItem(items[newIndex]);
                }}
              >
                Next
              </Button>
            </Space>
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
