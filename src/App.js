import React, { useState } from "react";
import {
  Modal,
  ConfigProvider,
  Space,
  Layout,
  Card,
  Flex,
  FloatButton,
  Divider,
} from "antd";

import AnswerQuestionButton from "./components/AnswerQuestionButton";
import HelpMe from "./components/HelpMe";
import NavBar from "./components/NavBar";
import RosettaCard from "./components/Help/Rosetta/Card";

import {
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

import SyntaxHighlighter from "react-syntax-highlighter";
// import ConceptCard from "./components/Help/Concept/Card";
// import ConceptTag from "./components/Help/Concept/Tag";

import {
  SettingOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import conceptTagFactory from "./components/Help/Concept";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

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

          <Space>
            {["print", "string literal", "standard out"].map((concept) =>
              conceptTagFactory(concept)
            )}
          </Space>
        </div>
      }
      size="large"
    >
      {/* <Space>
          <PlayCircleOutlined onClick={null} />
          <ShareAltOutlined />
          <SettingOutlined />
        </Space> */}
      <SyntaxHighlighter
        language="python"
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
      >
        print("Hello, World!")
      </SyntaxHighlighter>

      {/* <Flex gap="middle" align="center">
        <SmileOutlined />
        <MehOutlined />
        <FrownOutlined />
        <DislikeOutlined />
      </Flex>
      <Divider /> */}

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
          {/* <Header style={headerStyle}></Header> */}
          <Content style={contentStyle}>
            <NavBar />
            {coreApp}

            <HelpMe callBack={showModal} />
          </Content>
          <Footer style={footerStyle}>Examon</Footer>
        </Layout>
      </div>
      <Modal
        title="Help"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RosettaCard
          transaltions={[
            {
              code: 'print("Hello, World!")',
              language: "python",
            },
            {
              code: 'console.log(\"Hello, World!\")',
              language: "javascript",
            },
            {
              code: "print 'Hello, World!'",
              language: "ruby",
            },
            {
              code: 'public class Main { \n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
              language: "java",
            },
          ]}
        />
      </Modal>
    </ConfigProvider>
  );
};

export default App;
