import React, { useState } from "react";
import { Button } from "antd";

const AnswerQuestionButton = ({ value, correct, callBack, disabledValue }) => {
  const [selected, setSelected] = useState(false)
  let wrappedCallback = () => {
    callBack();
  };

  const getStyle = (correct, selected) => {
      if (!selected) {
        return {}
      }
      return { background: correct ? "#00b96b" : "#f5222d" };
  }

  return (
    <Button
      type="primary"
      style={getStyle(correct, selected)}
      disabled={disabledValue}
      onClick={() => {
        setSelected(true)
        wrappedCallback();
      }}
    >
      {value}
    </Button>
  );
};

export default AnswerQuestionButton;
