import { useState } from "react";
import "./App.css";

import { Flex, Button, Select } from "antd";
import { PlayCircleOutlined, SaveOutlined } from "@ant-design/icons";
import SyntaxHighlighter from "react-syntax-highlighter";

import { Pyodide } from "./pyodide";

import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeRunner({ code, snippets }) {
  const [pyprompt, setPyprompt] = useState(code);
  const [pyoutput, setPyoutput] = useState(null);
  const pyodide = Pyodide.getInstance();

  const select = (
    <Select
      style={{
        width: 200,
      }}
      // onChange={handleChange}
      options={[
        {
          label: <span>Snippets</span>,
          title: "snippets",
          options: [
            {
              label: <span>Print</span>,
              value: "a",
            },
            {
              label: <span>Print with string interpolation</span>,
              value: "b",
            },
          ],
        },
        {
          label: <span>question code</span>,
          title: "engineer",
          options: [
            {
              label: <span>Question Code</span>,
              value: "Chloe",
            },
            {
              label: <span>Custom Code</span>,
              value: "Chloe",
            },
          ],
        },
      ]}
    />
  );

  const onChange = (value) => {
    setPyprompt(value);
  };

  return (
    <Flex gap="middle" vertical>
      <Flex gap="middle">
        <Button
          onClick={() => {
            pyodide.setOutput((text) => {
              setPyoutput(text);
            });
            pyodide.run(pyprompt);
          }}
        >
          <PlayCircleOutlined /> Run Code
        </Button>
        <Button
          onClick={() => {
            pyodide.setOutput((text) => {
              setPyoutput(text);
            });
            pyodide.run(pyprompt);
          }}
        >
          <SaveOutlined />
          Save to Cheatsheet
        </Button>
        {select}
      </Flex>
      <AceEditor
        style={{}}
        highlightSelectedWord={true}
        mode="python"
        theme="github"
        minLines={10}
        onChange={onChange}
        value={pyprompt}
      ></AceEditor>

      {pyoutput && (
        <SyntaxHighlighter wrapLines={false} wrapLongLines={false}>
          {pyoutput}
        </SyntaxHighlighter>
      )}
    </Flex>
  );
}

export default CodeRunner;
