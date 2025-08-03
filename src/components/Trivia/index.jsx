import React, { useState, useEffect } from "react";
import { Card, Space, Flex } from "antd";
import AnswerQuestionButton from "./AnswerQuestionButton";
import SyntaxHighlighter from "react-syntax-highlighter";

const buildChoices = (item) => {
    let incorrect = item.options.map((o) => {
      return { value: o, correct: false, disabled: false }
    })

    return incorrect.concat({ value: item.answer, correct: true, disabled: false })
}

const Trivia = ({ item }) => {
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
      <Flex justify="space-between"></Flex>
      <SyntaxHighlighter
        language="python"
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
      >
        {item.code}
      </SyntaxHighlighter>

      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {buildChoices(item).map((option, index) => (
          <AnswerQuestionButton
            key={`option${index}`}
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
