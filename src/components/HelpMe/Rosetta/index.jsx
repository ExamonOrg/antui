import { Flex, Radio, Space, Segmented } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  JavaScriptOutlined,
  RubyOutlined,
  JavaOutlined,
  DotNetOutlined,
  PythonOutlined,
} from "@ant-design/icons";

import { useState } from "react";

const languageIcons = {
  javascript: <JavaScriptOutlined />,
  ruby: <RubyOutlined />,
  java: <JavaOutlined />,
  dotnet: <DotNetOutlined />,
  python: <PythonOutlined />,
};

const Rosetta = ({ translations }) => {
  const [translation, setTranslation] = useState(translations[2]);
  return (
    <div>
      <Segmented
        size="large"
        defaultValue={translation}
        options={translations.map((t) => {
          return {
            label: languageIcons[t.language],
            value: t,
          };
        })}
        onChange={(value) => {
          setTranslation(value);
        }}
      />

      <SyntaxHighlighter
        language={translation.language}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
      >
        {translation.code}
      </SyntaxHighlighter>
      {translation.description && <p>translation.description</p>}
    </div>
  );
};

export default Rosetta;
