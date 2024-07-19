import React, { useState } from "react";
import { Modal } from "antd";

import { ConfigProvider, Space } from "antd";
import { Layout } from "antd";
import { Menu } from "antd";
import { FloatButton } from "antd";
import {
  QuestionCircleOutlined,
  CheckSquareFilled,
  CheckSquareTwoTone,
} from "@ant-design/icons";
import AnswerQuestionButton from "./components/AnswerQuestionButton/AnswerQuestionButton";

import SyntaxHighlighter from "react-syntax-highlighter";
import { Card } from "antd";
import { Tag } from "antd";
const { Header, Footer, Content } = Layout;

const headerStyle = {
  // textAlign: "center",
  // lineHeight: "64px",
};
const contentStyle = {
  // textAlign: "center",
  // minHeight: 120,
  // lineHeight: "120px",
};
const footerStyle = {
  // textAlign: "center",
};
const layoutStyle = {
  // borderRadius: 8,
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [options, setOptions] = useState([
    { value: "None", correct: false, disabled: false },
    { value: "Hello", correct: false, disabled: false },
    { value: "Hello, World!", correct: true, disabled: false },
    { value: "Hi World", correct: false, disabled: false },
  ]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const callBack = () => {
    const optionsCopy = [...options].map((option) => {
      option.disabled = true;
      return option;
    });
    // setOptions(optionsCopy);
    setOptions([
      { value: "None", correct: false, disabledValue: true },
      { value: "Hello", correct: false, disabledValue: true },
      { value: "Hello, World!!!!!", correct: true, disabledValue: true },
      { value: "Hi World", correct: false, disabledValue: true },
    ]);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: "#00b96b",
          // borderRadius: 2,
          // colorBgContainer: "#f6ffed",
        },
      }}
    >
      <div className="App">
        <Layout style={layoutStyle}>
          {/* <Header style={headerStyle}></Header> */}
          <Content style={contentStyle}>
            <Menu
              mode="horizontal"
              items={[
                { key: "mail", label: "Feed" },
                { key: "app", label: "LTM Train" },
                { key: "app", label: "Progress Map" },
              ]}
            />
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
                {options.map((option) => {
                  return (
                    <AnswerQuestionButton
                      value={option.value}
                      correct={option.correct}
                      callBack={callBack}
                      disabledValue={option.disabledValue}
                    />
                  );
                })}
              </Space>
            </Card>
            <FloatButton
              icon={<QuestionCircleOutlined />}
              type="default"
              onClick={showModal}
              tooltip="AI Learning Assistance"
              style={{
                right: 94,
              }}
            />
          </Content>
          <Footer style={footerStyle}>Examon</Footer>
        </Layout>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </ConfigProvider>
  );
};

export default App;
