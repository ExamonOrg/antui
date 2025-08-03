import React, { useState, useEffect } from "react";
import { Card, Space, Flex } from "antd";
import EmojiBar from "./EmojiBar";
import AnswerQuestionButton from "./AnswerQuestionButton";
import SyntaxHighlighter from "react-syntax-highlighter";
import conceptTagFactory from "../Concept";

const mockData = [
  { value: "None", correct: false, disabled: false },
  { value: "Hello", correct: false, disabled: false },
  { value: "Hello, World!", correct: true, disabled: false },
  { value: "Hi World to the world", correct: false, disabled: false },
];

const buildChoices = (item) => {
    let incorrect = item.options.map((o) => {
      return { value: o, correct: false, disabled: false }
    })

    return incorrect.concat({ value: item.answer, correct: true, disabled: false })
}

const Trivia = ({ item }) => {
  const [options, setOptions] = useState(buildChoices(item));
  
  // Update options when item changes
  useEffect(() => {
    setOptions(buildChoices(item));
  }, [item]);
  
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
      </Flex>
      <SyntaxHighlighter
        language="python"
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
      >
        {item.code}
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
