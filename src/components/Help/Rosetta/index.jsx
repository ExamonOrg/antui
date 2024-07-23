import { Flex, Radio, Space } from "antd";
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

const Rosetta = ({ transaltions }) => {
  const [translation, setTranslation] = useState(transaltions[0]);
  return (
    <div>
      <Flex gap="middle" align="center">
        <Radio.Group defaultValue={translation}>
          {transaltions.map((t) => {
            return (
              <Radio.Button
                value={t.language}
                onClick={() => {
                  setTranslation(t);
                }}
              >
                <Space>
                  {languageIcons[t.language]}
                  <span>{t.language}</span>
                </Space>
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Flex>
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
