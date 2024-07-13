import React from "react";
import { Button } from "antd";
import { ConfigProvider, Input, Space, Flex, theme } from "antd";
import { Layout } from "antd";
import { Menu } from "antd";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Card } from "antd";
import { Tag } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  // overflow: "hidden",
  // width: "calc(50% - 8px)",
  // maxWidth: "calc(50% - 8px)",
};

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#00b96b",
        borderRadius: 2,

        // Alias Token
        colorBgContainer: "#f6ffed",
      },
    }}
  >
    <div className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Menu
            mode="horizontal"
            items={[
              { key: "mail", label: "Feed" },
              { key: "app", label: "LTM Train" },
              { key: "app", label: "Progress Map" },
            ]}
          />
        </Header>
        <Content style={contentStyle}>
          <Card title="What does the code print?" size="large">
            <Tag>print</Tag>
            <Tag>str</Tag>
            <SyntaxHighlighter
              language="python"
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={false}
              // style={props.codeStyle}
              // customStyle={{ "margin-bottom": "0" }}
            >
              print("Hello, World!")
            </SyntaxHighlighter>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Button type="primary">None</Button>
              <Button type="primary">Hello</Button>
              <Button onClick={() => {
                
              }} type="primary">
                Hello, World!</Button>
              <Button type="primary">Hello World</Button>
            </Space>
          </Card>
          {/* <Flex vertical={true}></Flex> */}
          <FloatButton
            icon={<QuestionCircleOutlined />}
            type="default"
            tooltip="AI Learning Assistance"
            style={{
              right: 94,
            }}
          />
        </Content>
        <Footer style={footerStyle}>Examon</Footer>
      </Layout>
    </div>
  </ConfigProvider>
);

export default App;
