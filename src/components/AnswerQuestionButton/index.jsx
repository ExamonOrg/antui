import React, { useState } from "react";
import { Button } from "antd";

const AnswerQuestionButton = ({ value, correct, callBack, disabledValue }) => {
  let [color, setColor] = useState();
  let wrappedCallback = () => {
    setColor(correct ? "#00b96b" : "#f5222d");
    callBack();
  };
  return (
    <Button
      type="primary"
      style={{ background: color }}
      disabled={disabledValue}
      onClick={() => {
        wrappedCallback();
      }}
    >
      {value}
    </Button>
  );
};

export default AnswerQuestionButton;
