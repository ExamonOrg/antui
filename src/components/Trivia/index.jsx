import React, { useState } from "react";
import { Card, Space, Flex } from "antd";
import EmojiBar from "./EmojiBar";
import AnswerQuestionButton from "./AnswerQuestionButton";
import SyntaxHighlighter from "react-syntax-highlighter";
import conceptTagFactory from "../Concept";

const mockData = [
  { value: "None", correct: false, disabled: false },
  { value: "Hello", correct: false, disabled: false },
  { value: "Hello, World!", correct: true, disabled: false },
  { value: "Hi World", correct: false, disabled: false },
];

const Trivia = () => {
  const [options, setOptions] = useState(mockData);
  const callBack = () => {
    setOptions(
      [...options].map((option) => {
        return (option.disabledValue = true && option);
      })
    );
  };
  return (
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
        <EmojiBar />
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
};

export default Trivia;
