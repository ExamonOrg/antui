import { Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  JavaScriptOutlined,
  RubyOutlined,
  JavaOutlined,
  DotNetOutlined,
  PythonOutlined,
} from "@ant-design/icons";

const languageIcons = {
  javascript: <JavaScriptOutlined />,
  ruby: <RubyOutlined />,
  java: <JavaOutlined />,
  dotnet: <DotNetOutlined />,
  python: <PythonOutlined />,
};

const RosettaCard = ({ transaltions }) => {
  return (
    <Card>
      {transaltions.map((translation) => {
        return (
          <div>
            {languageIcons[translation.language]}

            <SyntaxHighlighter
              language={translation.language}
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={false}
            >
              {translation.code}
            </SyntaxHighlighter>
            {translation.description && <p>transaltion.description</p>}
          </div>
        );
      })}
    </Card>
  );
};

export default RosettaCard;
