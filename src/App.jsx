import React, { useState } from "react";
import {
  Modal,
  ConfigProvider,
  Space,
  Layout,
  Card,
  Flex,
} from "antd";

import AnswerQuestionButton from "./components/AnswerQuestionButton";
import HelpMe from "./components/HelpMe";
import NavBar from "./components/NavBar";


import {
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

import SyntaxHighlighter from "react-syntax-highlighter";


import conceptTagFactory from "./components/Help/Concept";
const { Header, Footer, Content } = Layout;

const headerStyle = {};
const contentStyle = {};
const footerStyle = {};
const layoutStyle = {};

const mockData = [
  { value: "None", correct: false, disabled: false },
  { value: "Hello", correct: false, disabled: false },
  { value: "Hello, World!", correct: true, disabled: false },
  { value: "Hi World", correct: false, disabled: false },
];

const App = () => {
  const [options, setOptions] = useState(mockData);
  const showModal = () => setIsModalOpen(true);

  const callBack = () => {
    setOptions(
      [...options].map((option) => {
        return (option.disabledValue = true && option);
      })
    );
  };

  const coreApp = (
    <Card
      title={
        <div>
          <Flex justify="space-between">
            <h2>What does the code print to standard out?</h2>
          </Flex>
        </div>
      }
      size="large"
    >
      <Flex justify="space-between">
        <Space>
          {["print", "string literal", "standard out"].map((concept) =>
            conceptTagFactory(concept)
          )}
        </Space>
        <Flex gap="middle" align="center">
          <DislikeOutlined />
          <MehOutlined />
          <FrownOutlined />
          <SmileOutlined />
        </Flex>
      </Flex>
      <SyntaxHighlighter
        language="python"
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
      >
        {'def f1():\n    return "Hello, World!"\n\nprint(f1())'}
      </SyntaxHighlighter>

      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {options.map((option) => (
          <AnswerQuestionButton
            value={option.value}
            correct={option.correct}
            callBack={callBack}
            disabledValue={option.disabledValue}
          />
        ))}
      </Space>
    </Card>
  );

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
            {coreApp}
            <HelpMe callBack={showModal} />
          </Content>
          <Footer style={footerStyle}>Examon</Footer>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default App;
